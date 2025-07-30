'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Button } from "../Button";
import Image from "next/image";

const QuoteGenerator = () => {
    const [selectedService, setSelectedService] = useState('new-website');
    const router = useRouter();

    const handleGenerateQuote = () => {
        // Redirects to the questionnaire page with the selected service as a query parameter
        router.push(`/quote-generator?service=${selectedService}`);
    };
    return (
    <div className="w-full flex flex-col flex-wrap gap-2 md:gap-4 items-center justify-center mx-auto mt-2">
        <div className="flex flex-col md:flex-row gap-2 items-center">
            <Image src="/images/icons/icon-rocket.svg" alt="icon-rocket" width={24} height={24}/>
            <p className="pt-0 md:pt-2 text-[16px] md:text-[16px] lg:text-[18px] text-[#323232] font-normal text-center w-full lg:max-w-3xl mx-auto capitalize">
                Get your quotation in minutes
            </p>
        </div>
         <p className="text-[20px] md:text-[20px] lg:text-[24px] text-[#717171] font-medium normal-case text-center w-full lg:max-w-3xl mx-auto">
            Step 1: Tell Us Your Requirements
        </p>
        <div className="w-full md:w-auto p-2 rounded-full md:border-2 focus-within:border-[#e2806a]">
            <form className="flex flex-row md:flex-row gap-4">
            <div className="overflow-hidden rounded-full border-[1px] md:border-none border-black px-0 md:px-4 text-[14px]">
                <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)} 
                    className="w-full capitalize md:outline-none rounded-full px-2 bg-transparent min-h-[48px] md:border-none"
                >
                    <option value="new-website">I want to launch a new website</option>
                    <option value="ecommerce">I want to launch an e-commerce store</option>
                    <option value="redesign">I want to re-design my current website</option>
                    <option value="webapp">I want to build a full-scale web application</option>
                </select>
            </div>
            <div onClick={handleGenerateQuote}><Button variant="primary" rounded title={"Generate Quote"}/></div>
            </form>
        </div>
    </div>
    )
};

export default QuoteGenerator;