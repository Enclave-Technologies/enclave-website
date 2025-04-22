import GradientMetric from "../GradientMetric";
import SectionHeader from "../SectionHeader";

const KPIs = () => {
  return (
    <section className="flex flex-col items-center px-8 w-full gap-12">
      <div className="w-full max-w-7xl px-8 lg:px-0 flex flex-col items-center">
        <SectionHeader
          tag={"Performance"}
          title={"We Build Solutions That Perform & Engage"}
          description={
            "At Enclave Studios, we specialise in turning your vision into reality through cutting-edge technology. Our expertise spans app development, AI Solutions & Web3 Integration."
          }
        />

        <div className="w-full hidden md:grid grid-cols-4 gap-8 my-14">
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

        <div className="w-full md:hidden flex flex-col space-y-12 mt-12">
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
