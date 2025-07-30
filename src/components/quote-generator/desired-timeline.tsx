const form = [
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

const DesiredTimeline = ({nextStep}) => {
    // What is your desired launch date for the website?
    // What is your estimated budget for this project?

    return (
        <div className="w-full flex flex-col gap-10 max-w-[800px] pt-4">
            <div className="flex-col">
                <p className="text-[16px] md:text-[16px] lg:text-[20px] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
                    Step 3/4
                </p>
                <p className="text-[20px] md:text-[20px] lg:text-[28px] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
                    Timeline & Budget
                </p>
            </div>
            <form className="grid grid-cols-1 gap-4 text-[16px]">
                {form.map((formItem, index) => <div key={index} className="flex flex-col">
                    <h4 className="text-[16px] md:text-[20px]">{formItem.sectionTitle}</h4>
                    <ul>
                        {formItem.options?.map((option, index2) => <li key={index2} className="flex flex-row gap-2">
                            <input type="checkbox" id={`${index}-${index2}`} name={`${option}`} value={`${option}`} />
                            <label htmlFor={`${option}`}>{option}</label>
                        </li>)}
                    </ul>
                </div>)}
                <button onClick={nextStep}>Generate Quotation</button>
            </form>
        </div>
    )
};

export default DesiredTimeline;