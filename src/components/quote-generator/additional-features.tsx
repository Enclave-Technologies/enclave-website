const form = [
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
];

const AdditionalFeatures = ({nextStep}) => {
    // How will you be providing the content (text and images) for the website?
    // Do you have an existing logo and brand guidelines (colors, fonts)?

    return (
        <div className="w-full flex flex-col gap-10 max-w-[800px] pt-4">
            <div className="flex-col">
                <p className="text-[16px] md:text-[16px] lg:text-[20px] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
                    Step 2/4
                </p>
                <p className="text-[20px] md:text-[20px] lg:text-[28px] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
                    Design & Content
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
                <button onClick={nextStep}>Proceed</button>
            </form>
        </div>
    )
};

export default AdditionalFeatures;