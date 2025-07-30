const industries = [
  "Architecture & Interior Design",
  "Asset & Wealth Management",
  "Creative, Arts & Media",
  "Education & Training",
  "Family Office & Private Investment",
  "FinTech & Web3",
  "Healthcare & Wellness",
  "Legal & Corporate Advisory",
  "Luxury, Hospitality & Lifestyle",
  "Non-Profit / NGO / Government",
  "Private Healthcare & Wellness",
  "Real Estate Development & Investment",
  "Retail & E-commerce",
  "Technology & SaaS",
  "Venture Capital & Private Equity",
  "Other (Please specify)",
];

const ContactForm = ({nextStep}) => {
    return (
    <div className="w-full">
        <div className="flex-col">
                <p className="text-[16px] md:text-[16px] lg:text-[20px] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
                    Your Quotation is Ready
                </p>
                <p className="text-[20px] md:text-[20px] lg:text-[28px] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
                    Fill out the form below to receive it on your email.
                </p>
            </div>
        <form className="grid grid-cols-2">
            <input placeholder="First Name"/>
            <input placeholder="Last Name"/>
            <input placeholder="Email"/>
            <input placeholder="Phone"/>
            <select className="col-span-2">
                {industries.map((industry, index) => <option key={index} value={industry}>{industry}</option>)}
            </select>
            <button onClick={nextStep}>Send the quote to my email</button>
        </form>
    </div>)
};

export default ContactForm;