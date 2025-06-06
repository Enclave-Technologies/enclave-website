import { FaWhatsapp } from "react-icons/fa"

export const FloatingWA = () => {
    return (
        <a href="https://wa.me/85297740379?text=Hey%2C%20I%27d%20like%20to%20enquire%20about%20your%20services%21" target={"_blank"}>
            <div className="z-50 fixed h-16 w-16 md:h-20 md:w-20 bg-[#25D366] bottom-8 right-8 md:bottom-16 md:right-16 rounded-full flex items-center justify-center hover:scale-105 cursor-pointer ease-in-out duration-100">
            <FaWhatsapp className="h-8 w-8 md:h-10 md:w-10" color="white"/>
            </div>
        </a>
    )
}