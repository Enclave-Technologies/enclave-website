import GradientMetric from "../GradientMetric";

const KPIs = () => {
  return (
    <section className="flex flex-col items-center py-16 md:py-0 px-8 w-full gap-12 bg-[#FAFAFA]">
      <div className="w-full max-w-7xl">
        <div className="text-center">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold">
            Key Performance Indicators
          </h4>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-2 capitalize">
            Numbers That Just Make Sense
          </h2>
          <p className="text-[#26120D] text-[18px] md:text-[20px] leading-[150%]">
            Relentlessly KPI-Driven, Driving Measurable Results
          </p>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8 my-20">
          <GradientMetric
            value="20M"
            description="dollars in client revenue driven by our tailored solutions and strategies."
          />

          <GradientMetric
            value="80K"
            description="unique visitors engaging with the websites we build every month."
          />

          <GradientMetric
            value="50+"
            description="projects successfully delivered across multiple industries."
          />
        </div>

        <div className="md:hidden flex flex-col space-y-12 mt-12">
          <GradientMetric
            value="20M"
            description="dollars in client revenue driven by our tailored solutions and strategies."
            maxWidth="max-w-[250px]"
          />

          <GradientMetric
            value="80K"
            description="unique visitors engaging with the websites we build every month."
            maxWidth="max-w-[250px]"
          />

          <GradientMetric
            value="50+"
            description="projects successfully delivered across multiple industries."
            maxWidth="max-w-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default KPIs;
