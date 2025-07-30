const websites = [
    {title: "Atelier Shan", link: "https://atelier-shan.com"},
    {title: "Sid Thailand", link: "https://sidthailand.com/"},
    {title: "Palmer Dinnerware", link: "https://palmer-dinnerware.com/"},
];

const WebsitePreferences = ({nextStep}) => {
    // Primary purpose of the website + Any website references
    return (
    <div className="w-full">
        <div className="flex-col">
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#717171] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
                Step 1/5: Identify Your Dream Website
            </p>
            <p className="text-[14px] md:text-[14px] lg:text-[16px] text-[#717171] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
                Which website most closely resembles your desired end product.
            </p>
        </div>
        <form className="grid grid-cols-2">
            <input placeholder="First Name"/>
            <input placeholder="Last Name"/>
            <input placeholder="Email"/>
            <input placeholder="Phone"/>
            {websites.map((website, index) => <option key={index} value={website.title}>{website.link}</option>)}
            <button onClick={nextStep}>Send the quote to my email</button>
        </form>
    </div>)
};

export default WebsitePreferences;