import Card from "../../../components/Card/Card";
import Leaders from "./Leaders";

const overviewData = [
  {
    title: "Objective",
    description:
      "Develop a digital transformation strategy aligned with the organization’s strategy and the objectives of Saudi Vision 2030.",
  },
  {
    title: "Implementation Requirements",
    description:
      "1. Conduct a comprehensive assessment of the current digital maturity level of the organization.\n2. Identify key areas for digital transformation and prioritize initiatives based on impact and feasibility.\n3. Develop a roadmap for digital transformation with clear milestones and timelines.\n4. Ensure alignment of the digital transformation strategy with the overall organizational strategy and Saudi Vision 2030 objectives.",
  },
  {
    title: "Evidence Documents",
    description:
      "Submit the approved digital transformation strategy that includes all the requirements of this standard, provided that it has been approved within a period not exceeding 36 months.",
  },
  {
    title: "Related Regulations",
    description:
      "Council of Ministers Resolution No. (40) dated 27/2/1427H, Clause (16).",
  },
  {
    title: "Scope",
    description: "All government entities.",
  },
];

const OverviewTab = () => {
  return (
    <>
      <Card
        className="relative flex flex-col gap-4"
        widthClass="w-full"
        heightClass="min-h-134.5"
        padding="py-4"
      >
        {/* Vertical Line */}
        <div
          className="absolute left-[181.71px] top-0 bottom-0 w-px bg-gray-100 hidden xl:block"
          aria-hidden="true"
        />
        {overviewData.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 xl:flex-row xl:gap-0">
            {/* Left side */}
            <div className="w-1/4 min-w-full xl:min-w-[181.71px] xl:max-w-[181.71px] pl-6 pr-2">
              <div className="h-full min-h-10 bg-gray-300 rounded-10 flex justify-start p-4">
                <span className="text-base font-normal text-primary capitalize leading-4 align-middle">
                  {item.title}
                </span>
              </div>
            </div>
            {/* Right side */}
            <div className="w-full pl-2 pr-4">
              <div className="h-full min-h-10 bg-background rounded-10 flex justify-start p-4">
                <span className="text-base font-normal text-primary capitalize leading-6 align-middle">
                  {item.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Card>
      <Leaders />
    </>
  );
};

export default OverviewTab;