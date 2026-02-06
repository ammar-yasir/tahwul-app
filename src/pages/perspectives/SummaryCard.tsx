import Card from "../../components/Card/Card";
import type { SummaryCardData } from "./Perspectives.types";

const summaryCards: SummaryCardData[] = [
  {
    label: "Total Evidence",
    value: "4",
    icon: "/assets/icons/common/file-evidence.svg",
  },
  {
    label: "Under Review Evidence",
    value: "5",
    icon: "/assets/icons/common/file-search.svg",
  },
  {
    label: "In Progress Evidence",
    value: "2",
    icon: "/assets/icons/common/file-export.svg",
  },
  {
    label: "Completed Evidence",
    value: "1",
    icon: "/assets/icons/common/file-validation.svg",
  },
];

const SummaryCard = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-4">
      {summaryCards.map((item, index: number) => (
        <Card
          key={index}
          widthClass="min-w-68"
          heightClass="h-20"
          padding="p-4"
        >
          <div className="flex justify-between items-center gap-4 xl:justify-start">
            <img src={item.icon} alt={item.label} className="w-6 h-6" />
            <div className="flex flex-col items-center xl:items-start gap-4">
              <span className="text-primary text-2xl font-bold capitalize leading-4">
                {item.value}
              </span>
              <span className="text-secondary text-sm font-normal leading-4">
                {item.label}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SummaryCard;
