import type { FC } from "react";
import Card from "../../components/Card/Card";
import type { Activity } from "./Dashboard.types";

const activities: Activity[] = [
  {
    title: "Document “Strategy_Review.pdf” was uploaded by Ahmed Khaled",
    time: "1 hour ago",
  },
  {
    title: "Task “Review Compliance Files” was assigned to Mona Hamed",
    time: "3 hours ago",
  },
  {
    title: "New criterion “5.3 Digital Identity” was created by Admin",
    time: "5 hours ago",
  },
];

const ActivityItem:FC<Activity> = ({ title, time }) => (
  <div className="flex gap-2 items-center border-t border-gray-100 py-3.5">
    <div className="min-w-1.5 min-h-1.5 bg-accent-red rounded-full" />
    <div className="text-base text-primary font-medium leading-5.5 letter-spacing-0 align-middle">
      {title}
    </div>
    <span className="min-w-15 text-xs font-normal leading-4 text-secondary capitalize">
      {time}
    </span>
  </div>
);      

const RecentActivites = () => {
  return (
    <Card
      cardTitle="Recent Activities"
      titleFontSizeClass="text-base mb-2.5"
      widthClass="w-full xl:max-w-[368px] "
      heightClass="h-full xl:max-h-[283px]"
      className="px-4 pt-3.5"
    >
      {activities.map((activity, index) => (
        <ActivityItem key={index} title={activity.title} time={activity.time} />
      ))}
    </Card>
  );
};

export default RecentActivites;