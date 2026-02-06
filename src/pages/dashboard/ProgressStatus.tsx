import type { FC } from "react";
import Card from "../../components/Card/Card";
import type { CategoryCard, CategoryData, MileStone, Status } from "./Dashboard.types";

const statuses: Status[] = [
  {
    label: "Not Started",
    color: "bg-secondary",
    textColor: "text-secondary",
  },
  {
    label: "In Progress",
    color: "bg-warning",
    textColor: "text-warning",
  },
  {
    label: "Completed",
    color: "bg-success",
    textColor: "text-success",
  },
  {
    label: "Fully Uploaded",
    color: "bg-active",
    textColor: "text-active",
  },
  {
    label: "Partially Uploaded",
    color: "bg-pending",
    textColor: "text-pending",
  },
  {
    label: "Delayed",
    color: "bg-danger",
    textColor: "text-danger",
  },
];

const colorMapStyles: Record<string, string> = {
  "success": "bg-success",
  "warning": "bg-warning",
  "active": "bg-active",
  "pending": "bg-secondary",
  "error": "bg-danger"
}

const categoryData: CategoryData[] = [
  {
    id: 1,
    title: "Strategy And Planning",
    progress: "97.78%",
    cards: [
      { id: "sp-1", name: "Digital Transformation", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "success"}] },
      { id: "sp-2", name: "Digital Governance", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "warning"}] },
      { id: "sp-3", name: "Enterprise Architecture", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "success"}, {id: 4, status: "success"}] }
    ]
  },
  {
    id: 2,
    title: "Organization And Culture",
    progress: "70.83%",
    cards: [
      { id: "oc-1", name: "Digital Culture And Environment", milestones: [{id: 1, status: "success"}, {id: 2, status: "warning"}, {id: 3, status: "success"}] },
      { id: "oc-2", name: "Leadership Development", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "success"}, {id: 4, status: "success"}] },
      { id: "oc-3", name: "Skills & Capacity Building", milestones: [{id: 1, status: "warning"}, {id: 2, status: "warning"}, {id: 3, status: "warning"}] }
    ]
  },
  {
    id: 3,
    title: "Operations And Execution",
    progress: "%80.00",
    cards: [
      { id: "oe-1", name: "Business Processes", milestones: [{id: 1, status: "success"}, {id: 2, status: "warning"}, {id: 3, status: "warning"}, {id: 4, status: "success"}] }
    ]
  },
  {
    id: 4,
    title: "Business Continuity",
    progress: "90.80%",
    cards: [
      { id: "bc-1", name: "Risk Management", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "success"}, {id: 4, status: "success"}, {id: 5, status: "success"}] },
      { id: "bc-2", name: "Business Continuity", milestones: [{id: 1, status: "success"}, {id: 2, status: "pending"}, {id: 3, status: "pending"}, {id: 4, status: "success"}, {id: 5, status: "success"}, {id: 6, status: "pending"}, {id: 7, status: "success"}] }
    ]
  },
  {
    id: 5,
    title: "Information Technology",
    progress: "75.00%",
    cards: [
      { id: "it-1", name: "Support Systems", milestones: [{id: 1, status: "active"}, {id: 2, status: "success"}, {id: 3, status: "success"}, {id: 4, status: "success"}, {id: 5, status: "success"}] },
      { id: "it-2", name: "IT Infrastructure", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "success"}, {id: 4, status: "success"}, {id: 5, status: "active"}, {id: 6, status: "success"}, {id: 7, status: "success"}] },
      { id: "it-3", name: "Cloud Infrastructure", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "active"}] }
    ]
  },
  {
    id: 6,
    title: "Comprehensive Governance",
    progress: "75.00%",
    cards: [
      { id: "cg-1", name: "Governance Platforms", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "success"}, {id: 4, status: "pending"}, {id: 5, status: "success"}, {id: 6, status: "success"}, {id: 7, status: "success"}, {id: 8, status: "success"}, {id: 9, status: "success"}] }
    ]
  },
  {
    id: 7,
    title: "Channels And Services",
    progress: "100%",
    cards: [
      { id: "cs-1", name: "Service Quality", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "success"}] },
      { id: "cs-2", name: "Digital Channels", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "success"}, {id: 4, status: "success"}] }
    ]
  },
  {
    id: 8,
    title: "Beneficiary Centralization",
    progress: "60.00%",
    cards: [
      { id: "ben-1", name: "User Engagement", milestones: [{id: 1, status: "success"}, {id: 2, status: "warning"}, {id: 3, status: "warning"}, {id: 4, status: "warning"}] },
      { id: "ben-2", name: "User Relationship", milestones: [{id: 1, status: "success"}, {id: 2, status: "warning"}, {id: 3, status: "warning"}] },
      { id: "ben-3", name: "User Experience", milestones: [{id: 1, status: "success"}, {id: 2, status: "warning"}, {id: 3, status: "success"}, {id: 4, status: "warning"}, {id: 5, status: "success"}] }
    ]
  },
  {
    id: 9,
    title: "Government Data",
    progress: "87.50%",
    cards: [
      { id: "gd-1", name: "Data Governance", milestones: [{id: 1, status: "success"}, {id: 2, status: "warning"}, {id: 3, status: "warning"}] },
      { id: "gd-2", name: "Data Usage & Availability", milestones: [{id: 1, status: "success"}, {id: 2, status: "warning"}, {id: 3, status: "warning"}] },
      { id: "gd-3", name: "Open Data", milestones: [{id: 1, status: "success"}, {id: 2, status: "success"}, {id: 3, status: "warning"}] }
    ]
  },
  {
    id: 10,
    title: "Research And Innovation",
    progress: "17.60%",
    cards: [
      { id: "ri-1", name: "Innovation", milestones: [{id: 1, status: "error"}, {id: 2, status: "error"}, {id: 3, status: "error"}, {id: 4, status: "error"}] }, // Red circles
      { id: "ri-2", name: "Creative Solutions", milestones: [{id: 1, status: "warning"}, {id: 2, status: "error"}] }
    ]
  }
];

const StatusItem: FC<{ status: Status }> = ({ status }) => (
  <div className="flex items-center gap-2">
    <span className={`min-w-2 min-h-2 rounded-full ${status.color}`} />
    <span className={`text-sm font-normal ${status.textColor} capitalize leading-4 letter-spacing-0`}>{status.label}</span>
  </div>
);

const ProgressStatus = () => {
  return (
    <Card
      className="flex flex-col gap-6"
      widthClass="w-full"
      heightClass="h-auto"
    >
      <div className="flex justify-between">
        <div className="text-lg text-primary font-bold leading-4 capitalize">
          Progress Status
        </div>
        <div className="flex flex-col xl:flex-row gap-4.5">
          {statuses.map((status: Status, index: number) => (
            <StatusItem key={index} status={status} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-row items-start gap-3.75">
        {categoryData.map((category: CategoryData, index: number) => (
          <div className="flex flex-col gap-2">
            <Card
              key={index}
              cardBgColorClass="bg-primary"
              widthClass="max-w-24 w-full"
              heightClass="h-22.5"
              className="flex flex-col justify-center items-center gap-2"
            >
              <span className="font-bold text-xs text-white text-center leading-4 align-middle letter-spacing-0">
                {category.title}
              </span>
              <div className="w-15.75 h-5.5 flex justify-center items-center bg-white-100 rounded-10">
                <span className="text-xs text-white font-bold">
                  {category.progress}
                </span>
              </div>
            </Card>
            {category?.cards?.map((card: CategoryCard, index: number) => (
              <Card
                key={index}
                cardBgColorClass="bg-muted"
                widthClass="max-w-24 w-full"
                heightClass="min-h-22.5"
                className="flex flex-col items-center gap-2"
                padding="p-0"
              >
                <h5 className="text-10 text-center font-normal leading-4 align-middle letter-spacing-0 p-1">
                  {card.name}
                </h5>
                {/* Milestone based small colored circles */}
                <div className="flex flex-wrap justify-center gap-1.25 p-4">
                  {card?.milestones?.map(
                    (milestone: MileStone, index: number) => (
                      <div
                        key={index}
                        className={`w-6 h-6 flex justify-center items-center ${colorMapStyles[milestone.status]} text-10 font-normal text-white rounded-full`}
                      >
                        {milestone.id}
                      </div>
                    ),
                  )}
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProgressStatus;
