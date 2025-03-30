"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Navbarr } from "../../components/Navbar/Navbarr";
import NewFooter from "../../components/NewFooter";

const services = [
  "Website Design",
  "Web Development",
  "Mobile Development",
  "E-Commerce Store Development",
  "Search Engine Optimization (SEO)",
  "Google Ads",
];

const budgets = ["2-10K", "10-20K", "20-50K", "50-100K", "100K+"];

export default function Contact() {
  const [state, handleSubmit, reset] = useForm("mvgpjgpy");
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-start text-black ">
      {/* <div id="cursor" /> */}
      <Navbarr />
      <div className="z-10 bg-[#FAFAFA]">
        <section className="w-full flex flex-col items-center">
          <div className="inner-container min-h-screen flex flex-col items-start justify-center gap-24 md:!pr-96">
            <h1 className="text-6xl font-bold pt-12">
              Hey! Tell us all the
              <br /> things 👋
            </h1>
            <form
              className="text-2xl"
              style={{ maxWidth: "100vw" }}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-8">
                  <p>I’m Interested in...</p>
                  <div className="flex flex-wrap gap-4">
                    {services.map((service, index) => {
                      return (
                        <OptionPill
                          key={index}
                          name="service"
                          label={service}
                          isSelected={selectedServices.includes(service)}
                          onClick={() => {
                            if (selectedServices.includes(service)) {
                              setSelectedServices(
                                selectedServices.filter(
                                  (selectedService) =>
                                    selectedService !== service
                                )
                              );
                            } else {
                              console.log(selectedServices);
                              setSelectedServices([
                                ...selectedServices,
                                service,
                              ]);
                            }
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
                <textarea
                  required
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  style={{ fontSize: 20 }}
                  className="bg-transparent border-b-2 max-w-2xl focus:outline-none resize-none"
                />
                <textarea
                  required
                  id="email"
                  name="email"
                  placeholder="Email"
                  style={{ fontSize: 20 }}
                  className="bg-transparent border-b-2 max-w-2xl focus:outline-none resize-none"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  required
                  id="message"
                  name="message"
                  placeholder="Please leave a brief overview of your requirements"
                  style={{ fontSize: 20 }}
                  className="bg-transparent border-b-2 max-w-2xl focus:outline-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <div>
                  <p className="pb-8">Your Budget (USD)</p>
                  <div className="flex flex-wrap gap-8">
                    {budgets.map((budget, index) => (
                      <OptionPill
                        key={index}
                        name="budget"
                        label={budget}
                        isSelected={selectedBudget == budget}
                        onClick={() => {
                          setSelectedBudget(budget);
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* <input type="file" /> */}
                {state.submitting ? (
                  <input
                    type="submit"
                    className="big-button !py-10 md:!py-24 !text-4xl !px-10 md:!px-40"
                    value="Submitting ..."
                    disabled
                  />
                ) : state.succeeded ? (
                  <input
                    type="button"
                    className="big-button !py-10 md:!py-24 !text-4xl !px-10 md:!px-40"
                    value="Submitted"
                    disabled
                  />
                ) : (
                  <input
                    type="submit"
                    className="big-button !py-10 md:!py-24 !text-4xl !px-10 md:!px-40"
                    value="Send Request"
                  />
                )}
                {state.succeeded && (
                  <p style={{ fontSize: 20 }}>
                    Thank you for reaching out to us. Our team will contact you
                    shortly via email
                  </p>
                )}
                <p className="text-sm">
                  This site is protected by reCAPTCHA and the Google 
                  <a
                    href="https://policies.google.com/privacy?hl=en-US"
                    className="underline hover:bg-slate-200"
                  >
                    Privacy Policy
                  </a>
                   and 
                  <a
                    href="https://policies.google.com/terms?hl=en-US"
                    className="underline hover:bg-slate-200"
                  >
                    Terms of Service
                  </a>
                   apply.
                </p>
              </div>
            </form>
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

const OptionPill = ({ index, label, isSelected, onClick, name }) => {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 border-black rounded-full hover:bg-black hover:text-white cursor-pointer ${
        isSelected && "bg-black text-white"
      }`}
      style={{ borderWidth: 1, fontWeight: "300", fontSize: 20 }}
    >
      {label}
      <input
        id={label}
        name={name}
        type="checkbox"
        className="hidden"
        value={label}
        checked={isSelected}
      />
    </div>
  );
};
