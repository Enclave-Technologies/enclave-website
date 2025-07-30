"use client";

import WebsiteFeatures from "../../components/quote-generator/website-features";
import ContactForm from "../../components/quote-generator/contact-form";
import WebsitePreferences from "../../components/quote-generator/website-preferences";
import AdditionalFeatures from "../../components/quote-generator/additional-features";
import DesiredTimeline from "../../components/quote-generator/desired-timeline";
import { useState } from "react";
import WebsiteQuestionnaire from "../../components/quote-generator/website-questionnaire";

const form = [
    {
        sectionTitle: 'Primary Goal(s)', 
        type: "checkbox",
        options: [
            "Generate leads and inquiries (e.g., through contact forms).",
            "Sell products or services directly online (E-commerce).",
            "Serve as a digital brochure to provide information about our business.",
            "Showcase our work or portfolio.",
            "Provide a booking or reservation system for appointments/events."
        ]
    },
    {
        sectionTitle: 'Roughly how many unique pages do you estimate the website will have?', 
        type: "radio",
        options: [
            "1-5 Pages (e.g., Home, About, Services, Contact)",
            "6-15 Pages (A standard business site with individual service pages)",
            "16-30 Pages (A larger site with more in-depth content)",
            "30+ Pages (A large, content-heavy site)",
            "I'm not sure"
        ]
    },
    {
        sectionTitle: 'What key features are essential for your website? (Please check all that apply)', 
        type: "checkbox_with_other",
        options: [
            "Informational Pages (About, Services, Team, etc.)",
            "Contact / Inquiry Forms",
            "Blog / News / Articles section",
            "Photo / Video Gallery",
            "E-commerce Store (Shopping cart, checkout, payment processing)",
            "Membership System (User accounts, login/logout, profiles)",
            "Booking / Appointments System (for services, rooms, or events)",
            "Multilingual Support (e.g., English and Traditional Chinese)",
            "Customer Testimonials / Reviews section"
        ]
    },
    {
        sectionTitle: 'How will you be providing the content (text, images, videos) for the website? (Please check all that apply)', 
        type: "checkbox",
        options: [
            "I will provide all final text and images before development begins.",
            "I need professional copywriting services to write the website's text.",
            "I need help sourcing professional stock photos or arranging a photoshoot.",
            "We need to discuss the content strategy."
        ]
    },
    {
        sectionTitle: 'Do you have an existing logo and brand guidelines?', 
        type: "radio",
        options: [
            "Yes, I have a complete brand guide (logo, specific colours, fonts).",
            "I only have a logo file.",
            "No, I will need a new logo and brand identity designed."
        ]
    },
    {
        sectionTitle: 'What is your desired timeframe for launching the website?', 
        type: "radio",
        options: [
            "Urgent: Within the next 4 weeks",
            "Standard: 1 - 3 months",
            "Flexible: 3 - 6 months",
            "I'm just gathering information for now and have no fixed timeline."
        ]
    },
    {
        sectionTitle: 'Roughly how many unique pages do you estimate the website will have?', 
        type: "radio",
        options: [
            "HK$20,000 - HK$40,000 (For simple, professional brochure-style websites)",
            "HK$40,000 - HK$80,000 (For standard business sites with custom features like a blog or portfolio)",
            "HK$80,000 - HK$200,000 (For advanced sites, e-commerce, or booking systems)",
            "HK$200,000+ (For large-scale, fully custom web applications)",
            "I prefer to discuss this after receiving an initial proposal.",
        ]
    },
];

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between text-black relative home-font gap-32 bg-[#FFF] px-[120px]">
        {/* <WebsiteDevelopmentQG /> */}
        <WebsiteQuestionnaire />
    </main>
  );
}

const WebsiteDevelopmentQG = () => {
    const [step, setStep] = useState(0);
    return (
        <div className="w-full flex flex-col items-center py-20 px-[120px] h-screen">
            {/* Insert Enclave Studios logo */}
            {/* Insert Progress Bar */}
            <div className="bg-gray-200 w-1/2 h-2 rounded-full">
                <div style={{width:`${(step+1)/(form.length)*100}%`}} className="bg-black rounded-full h-2"></div>
            </div>
            <div className="w-full flex flex-col gap-10 max-w-[800px] pt-4">
            <div className="flex-col">
                <p className="text-[16px] md:text-[16px] lg:text-[16px] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
                    Question {step+1}/{form.length}
                </p>
            </div>
            <form className="grid grid-cols-1 gap-4 text-[20px]">
                <h4 className="text-[16px] md:text-[24px]">{form[step].sectionTitle}</h4>
                <div className="flex flex-col">
                    <ul className="flex flex-col gap-2">
                        {form[step].options?.map((option, index2) => <li key={index2} className="flex flex-row gap-2">
                            <input type={form[step].type} id={`${form[step].sectionTitle}-${index2}`} name={`${option}`} value={`${option}`} />
                            <label htmlFor={`${option}`}>{option}</label>
                        </li>)}
                    </ul>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    setStep(step+1)
                }}>Proceed</button>
            </form>
        </div>
        </div>
    )
};