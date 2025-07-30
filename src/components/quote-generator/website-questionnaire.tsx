'use client';

import { useState, FC, FormEvent, ChangeEvent, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// --- 1. DEFINE TYPESCRIPT TYPES & JSON DATA ---
type Option = string | { range: string; description: string };
type FollowUp = { condition: string; question: Question };
type SubQuestion = { id: string | number; question_text: string; type: string; };
type Question = {
  id: string | number;
  question_text: string;
  type: string;
  options?: Option[];
  follow_up?: FollowUp;
  sub_questions?: SubQuestion[];
};

const questionnaireData: Question[] = [
  { "id": 5, "question_text": "Do you have an existing website?", "type": "radio", "options": ["No, this is a brand new website.", "Yes, we are looking to redesign our current site."], "follow_up": { "condition": "Yes, we are looking to redesign our current site.", "question": { "id": "5a", "question_text": "Please provide the address of your current site:", "type": "url" } } },
  { "id": 6, "question_text": "What is the primary goal of this new website?", "type": "checkbox_with_other", "options": ["Generate leads and inquiries (e.g., through contact forms).", "Sell products or services directly online (E-commerce).", "Serve as a digital brochure to provide information about our business.", "Showcase our work or portfolio.", "Provide a booking or reservation system for appointments/events."] },
  { "id": 7, "question_text": "Roughly how many pages will the website have?", "type": "radio", "options": ["1-5 Pages (e.g., Home, About, Services, Contact)", "6-15 Pages (A standard business site)", "16-30 Pages (A larger site)", "30+ Pages (A content-heavy site)", "I'm not sure"] },
  { "id": 8, "question_text": "What key features are essential?", "type": "checkbox_with_other", "options": ["Informational Pages (About, Services, Team, etc.)", "Contact / Inquiry Forms", "Blog / News / Articles section", "Photo / Video Gallery", "E-commerce Store", "Membership System (User accounts)", "Booking / Appointments System", "Multilingual Support"] },
  { "id": 9, "question_text": "How will you provide the content (text, images)?", "type": "checkbox", "options": ["I will provide all final content.", "I need professional copywriting services.", "I need help sourcing professional photos.", "We need to discuss the content strategy."] },
  { "id": 10, "question_text": "Do you have an existing logo and brand guidelines?", "type": "radio", "options": ["Yes, I have a complete brand guide.", "I only have a logo file.", "No, I will need a new logo and brand identity designed."] },
  { "id": 11, "question_text": "What is your desired launch timeframe?", "type": "radio", "options": ["Urgent: Within 4 weeks", "Standard: 1 - 3 months", "Flexible: 3 - 6 months", "I'm just gathering information."] },
  { "id": 12, "question_text": "What is your estimated budget for this project?", "type": "radio", "options": [{ "range": "HK$20,000 - HK$40,000", "description": "For simple, professional brochure-style websites" }, { "range": "HK$40,000 - HK$80,000", "description": "For standard business sites with custom features" }, { "range": "HK$80,000 - HK$200,000", "description": "For advanced sites or e-commerce" }, { "range": "HK$200,000+", "description": "For large-scale, custom web applications" }, { "range": "I prefer to discuss this after receiving an initial proposal.", "description": "" }] },
  {
    "id": "contact_info",
    "question_text": "Your Quotation is Ready! Fill out the form below to receive it on your email",
    "type": "group",
    "sub_questions": [
      { "id": 1, "question_text": "What is your name?", "type": "text" },
      { "id": 2, "question_text": "What is your email address?", "type": "email" },
      { "id": 3, "question_text": "What is the name of your business?", "type": "text" }
    ]
  }
];


// --- 2. THE REACT COMPONENT ---
const MultiStepQuestionnaire: FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const allQuestions: Question[] = [];
  questionnaireData.forEach(q => {
    allQuestions.push(q);
    if (q.type !== 'group' && q.follow_up && formData[q.id] === q.follow_up.condition) {
      allQuestions.push(q.follow_up.question);
    }
  });

  const currentQuestion = allQuestions[currentStep];

  const handleValidation = () => {
    if (currentQuestion.type === 'group' && currentQuestion.sub_questions) {
      for (const subQ of currentQuestion.sub_questions) {
        if (!formData[subQ.id]) {
          setError(`Please fill out the "${subQ.question_text.replace('What is your ', '').replace('?', '')}" field.`);
          return false;
        }
      }
    } else {
      const currentAnswer = formData[currentQuestion.id];
      if (currentAnswer === undefined || currentAnswer === '' || (Array.isArray(currentAnswer) && currentAnswer.length === 0)) {
         setError('Please answer the question before proceeding.');
         return false;
      }
    }
    setError(null);
    return true;
  };

  const handleNext = () => {
    if (handleValidation()) {
      if (currentStep < allQuestions.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        handleSubmit(new Event('submit') as unknown as FormEvent);
      }
    }
  };

  const handleBack = () => {
    setError(null);
    setCurrentStep(prev => prev - 1);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setError(null);

    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const currentValues = formData[name] || [];
      if (checkbox.checked) {
        setFormData(prev => ({ ...prev, [name]: [...currentValues, value] }));
      } else {
        setFormData(prev => ({ ...prev, [name]: currentValues.filter((item: string) => item !== value) }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.tagName === 'TEXTAREA' && e.shiftKey) {
        return;
      }
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!handleValidation()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'An unknown error occurred.');
      }
      setIsSubmitted(true);
    } catch (err: any) {
      setError(`Submission failed: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = (question: Question) => {
    const commonInputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-[16px]";

    switch (question.type) {
      case 'group':
        return (
          <div className="space-y-4">
            {question.sub_questions?.map((subQ, index) => (
              <div key={subQ.id}>
                <label className="block text-[16px] font-medium text-gray-700">{subQ.question_text}</label>
                <input
                  type={subQ.type}
                  name={String(subQ.id)}
                  value={formData[subQ.id] || ''}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className={`${commonInputClasses} p-3`}
                  autoFocus={index === 0}
                />
              </div>
            ))}
          </div>
        );

      case 'text':
      case 'email':
      case 'url':
        return <input type={question.type} name={String(question.id)} value={formData[question.id] || ''} onChange={handleChange} onKeyDown={handleKeyDown} className={`${commonInputClasses} p-3`} autoFocus />;
      
      case 'textarea':
        return <textarea name={String(question.id)} value={formData[question.id] || ''} onChange={handleChange} onKeyDown={handleKeyDown} rows={4} className={`${commonInputClasses} p-3`} autoFocus />;
      
      case 'radio':
      case 'radio_with_other':
        return (
          <div className="mt-4 space-y-3">
            {question.options?.map((option, index) => {
              const optionValue = typeof option === 'string' ? option : option.range;
              const optionDesc = typeof option === 'string' ? '' : option.description;
              const isSelected = formData[question.id] === optionValue;
              return (
                <label key={index} className={`flex items-center rounded-lg p-4 border transition-all duration-200 cursor-pointer ${isSelected ? 'bg-primary-50 border-primary-500 ring-2 ring-primary-500' : 'bg-white border-gray-300 hover:bg-gray-50'}`}>
                  <input type="radio" name={String(question.id)} value={optionValue} checked={isSelected} onChange={handleChange} className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 mt-1" />
                  <div className="ml-4 flex-grow">
                    <span className="font-medium text-gray-900 text-[16px]">{optionValue}</span>
                    {optionDesc && <p className="text-gray-500 text-[16px]">{optionDesc}</p>}
                  </div>
                </label>
              );
            })}
            {question.type === 'radio_with_other' && (
              <div className="flex items-center mt-2">
                <input type="radio" name={String(question.id)} value="Other" checked={formData[question.id] === 'Other'} onChange={handleChange} className="h-4 w-4 text-primary-600 border-gray-300" />
                <span className="ml-2 text-[16px] font-medium text-gray-700">Other:</span>
                {formData[question.id] === 'Other' && (
                  <input type="text" name={`${question.id}-other-text`} onChange={handleChange} onKeyDown={handleKeyDown} className={`${commonInputClasses} ml-2 flex-grow p-2`} autoFocus />
                )}
              </div>
            )}
          </div>
        );

      case 'checkbox':
      case 'checkbox_with_other':
        return (
           <div className="mt-4 space-y-3">
            {question.options?.map((option, index) => {
              const isSelected = (formData[question.id] || []).includes(String(option));
              return (
                <label key={index} className={`flex items-center rounded-lg p-4 border transition-all duration-200 cursor-pointer ${isSelected ? 'bg-primary-50 border-primary-500 ring-2 ring-primary-500' : 'bg-white border-gray-300 hover:bg-gray-50'}`}>
                  <input type="checkbox" name={String(question.id)} value={String(option)} checked={isSelected} onChange={handleChange} className="h-4 w-4 rounded text-primary-600 border-gray-300 focus:ring-primary-500 mt-1" />
                  <div className="ml-4 flex-grow">
                     <span className="font-medium text-gray-900 text-[16px]">{String(option)}</span>
                  </div>
                </label>
              );
            })}
             {question.type === 'checkbox_with_other' && (
              <div className="flex items-center mt-2">
                 <input type="checkbox" name={String(question.id)} value="Other" checked={(formData[question.id] || []).includes('Other')} onChange={handleChange} className="h-4 w-4 rounded text-primary-600 border-gray-300" />
                 <span className="ml-2 text-[16px] font-medium text-gray-700">Other:</span>
                 {(formData[question.id] || []).includes('Other') && (
                    <input type="text" name={`${question.id}-other-text`} onChange={handleChange} onKeyDown={handleKeyDown} className={`${commonInputClasses} ml-2 flex-grow p-2`} autoFocus />
                 )}
              </div>
             )}
          </div>
        );

      default:
        return null;
    }
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-white p-10 rounded-xl text-center">
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, type: 'spring' }}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Thank You!</h2>
            <p className="mt-2 text-gray-600">Your quotation has been sent to your email. We will be in touch shortly.</p>
        </motion.div>
      </div>
    );
  }

  const progress = ((currentStep + 1) / allQuestions.length) * 100;

  return (
    <div className="w-full h-screen flex flex-col gap-8 items-center bg-white p-6 px-2 md:p-0 rounded-xl relative overflow-hidden">
      <div className="w-[140px] relative z-[1001]">
        <Link href="/" className='flex items-center justify-center'>
          <Image
            src="/enclave-logo-with-text.svg"
            width={106}
            height={24}
            alt="Enclave Studios"
            priority
          />
        </Link>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <motion.div
          className="bg-primary-600 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      <div className="relative flex-1 max-h-4/5 overflow-scroll w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full"
          >
            <h2 className="text-2xl font-bold text-gray-800">{currentQuestion.question_text}</h2>
            <div className="mt-4">
              {renderQuestion(currentQuestion)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-red-500 text-sm text-center mt-4 h-5"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <div className="w-full mt-8 pt-5 border-t border-gray-200 flex justify-between items-center">
        <button
          onClick={handleBack}
          disabled={currentStep === 0 || isSubmitting}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </button>
        
        {currentStep < allQuestions.length - 1 ? (
          <button
            onClick={handleNext}
            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit
                <Check className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepQuestionnaire;
