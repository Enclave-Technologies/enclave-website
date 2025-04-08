import GradientMetric from "../GradientMetric";

const KPIs = () => {
  return (
    <section className="flex flex-col items-center px-8 w-full gap-12 bg-[#FAFAFA]">
      <div className="w-full max-w-7xl px-4 lg:px-0 flex flex-col items-center">
        <div className="flex flex-col items-center max-w-[782px]">
          <h4 className="text-[#FB4E29] text-[20px] md:text-[24px] lg:text-[28px] font-bold mb-3">
            Key Performance Indicators
          </h4>
          <div className="flex flex-col items-center gap-2">
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] font-bold capitalize max-w-4xl text-center"
              style={{
                lineHeight: "1.3",
              }}
            >
              Numbers That Just Make Sense{" "}
            </h2>
            <p className="text-[18px] md:text-[20px] leading-[150%] text-[#26120D] text-center">
              Relentlessly KPI-Driven, Driving Measurable Results
            </p>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-4 gap-8 my-14">
          <GradientMetric
            value="100%"
            description="ROI Generated"
            upto={false}
          />

          <GradientMetric
            value="4.8/5"
            description="Google Reviews"
            upto={false}
          />

          <GradientMetric
            value="100"
            description="Page Speed Scores"
            upto={false}
          />
          <GradientMetric
            value="10x"
            description="Awards and Nominations"
            upto={false}
          />
        </div>

        <div className="md:hidden flex flex-col space-y-12 mt-12">
          <GradientMetric
            value="100%"
            description="ROI Generated"
            upto={false}
          />

          <GradientMetric
            value="4.8/5"
            description="Google Reviews"
            upto={false}
          />

          <GradientMetric
            value="100"
            description="Page Speed Scores"
            upto={false}
          />
        </div>
      </div>
    </section>
  );
};

export default KPIs;
