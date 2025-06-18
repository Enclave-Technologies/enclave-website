"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Navbarr } from "../../components/Navbar/Navbarr";
import NewFooter from "../../components/NewFooter";
import Image from "next/image";

export default function Contact() {
  const [state, handleSubmit, reset] = useForm("mvgpjgpy");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e);
    if (result) {
      setFormData({
        fullName: "",
        email: "",
        message: "",
        subscribe: false,
      });
    }
  };

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-start text-black">
      <Navbarr />
      <div className="z-10 bg-[#FAFAFA] w-full flex flex-col items-center justify-center min-h-screen">
        <section className="flex flex-row justify-center items-center py-10 md:py-[64px] px-6 md:px-[60px] lg:px-[120px] gap-8 md:gap-[32px] w-full bg-white">
          <div className="flex flex-col items-center gap-6 flex-1">
            {/* Header */}
            <div className="flex flex-col items-start gap-1 w-full">
              <h2 className="font-onest font-medium lg:text-[96px] md:text-[64px] text-[42px] leading-[100%] text-black w-full capitalize">
                Contact Us
              </h2>
              <p className="font-albert font-normal text-[20px] leading-[120%] text-black w-full">
                Enabling businesses to establish bold digital identities, and
                create impactful digital solutions Enabling businesses to
                establish bold digital identities, and create impactful digital
                solutions Enabling businesses to establish bold digital
                identities,
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={onSubmit}
              className="flex flex-col items-start gap-3 w-full"
            >
              {/* Full Name Input */}
              <div className="flex flex-row items-center border-b border-black w-full h-[56px] gap-[10px]">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="font-albert font-light text-[16px] leading-[20px] text-black bg-transparent outline-none w-full h-full"
                />
              </div>
              <ValidationError
                prefix="Name"
                field="fullName"
                errors={state.errors}
              />

              {/* Email Input */}
              <div className="flex flex-row items-center border-b border-black w-full h-[56px] gap-[10px]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="font-albert font-light text-[16px] leading-[20px] text-black bg-transparent outline-none w-full h-full"
                />
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              {/* Message Input */}
              <div className="flex flex-row items-center border-b border-black w-full h-[56px] gap-[10px]">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="font-albert font-light text-[16px] leading-[20px] text-black bg-transparent outline-none resize-none w-full h-full"
                />
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* Checkbox */}
              <div className="flex flex-row items-start gap-3 w-full py-2">
                <div
                  className="w-[14px] h-[14px] border border-black flex items-center justify-center mt-1 cursor-pointer"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      subscribe: !prev.subscribe,
                    }))
                  }
                >
                  {formData.subscribe && (
                    <div className="w-[8px] h-[8px] bg-black"></div>
                  )}
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="hidden"
                  />
                </div>
                <label
                  htmlFor="subscribe"
                  className="font-albert font-light text-[14px] leading-[20px] text-black cursor-pointer flex-1"
                >
                  Sign-up to receive latest additions to our collection and our
                  thought leadership content
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="flex flex-col justify-center items-center py-[10px] px-[21px] w-full h-[52px] bg-black border border-black rounded-[5px] hover:bg-gray-800 transition-colors duration-300"
              >
                <span className="font-albert font-normal text-[14px] leading-[20px] text-white">
                  {state.submitting ? "SENDING..." : "SEND MESSAGE"}
                </span>
              </button>

              {state.succeeded && (
                <p className="font-albert text-[14px] text-green-600 mt-2">
                  Thank you for reaching out! We&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>

          <div className="flex-1 lg:h-[720px] h-[400px] lg:block hidden">
            <Image
              src="/contact-img.png"
              alt="Contact us"
              width={547}
              height={720}
              className="object-contain w-full h-full"
            />
          </div>
        </section>
      </div>
      <div className="hidden md:flex min-h-screen w-full bg-transparent"></div>
      <div className="w-full">
        <NewFooter id="footer" />
      </div>
    </main>
  );
}
