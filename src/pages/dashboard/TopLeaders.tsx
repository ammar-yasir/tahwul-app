import type { FC } from "react";
import Card from "../../components/Card/Card";
import type { LeaderProfileItemProps } from "../perspectives/Perspectives.types";

const leaders: LeaderProfileItemProps[] = [
  {
    name: "Ahmad Al-Ali",
    designation: "Strategy Perspective",
    proficiency: "96%",
  },
  {
    name: "Ammar Yasir",
    designation: "Senior Frontend Engineer",
    proficiency: "96%",
  },
  {
    name: "Ahmad Al-Ali",
    designation: "Strategy Perspective",
    proficiency: "96%",
  },
];

const LeaderProfileItem: FC<LeaderProfileItemProps> = ({
  name,
  designation,
  proficiency,
}) => (
  <div className="flex gap-2 items-center border-t first:border-t-0 border-gray-100 pt-4">
    <img
      className="w-[47.1px] h-[47.1px]"
      src="/assets/images/common/profile-pic.svg"
      alt="Leader Pic"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col gap-0.5">
        <h4 className="text-primary text-base font-medium">{name}</h4>
        <h4 className="text-secondary text-base font-medium">{designation}</h4>
      </div>
      <span className="text-base text-primary font-bold">{proficiency}</span>
    </div>
  </div>
);

export const TopLeaders = () => {
  return (
    <Card
      cardTitle="Top Performing Perspective Leaders"
      titleFontSizeClass="text-base"
      widthClass="w-full xl:max-w-[368px] "
      heightClass="h-full xl:max-h-[283px]"
      className="px-4 pt-3.5"
    >
      <div className="flex flex-col gap-4">
        {leaders?.map((leader, index) => (
          <LeaderProfileItem
            key={index}
            name={leader?.name}
            designation={leader?.designation}
            proficiency={leader?.proficiency}
          />
        ))}
      </div>
    </Card>
  );
};
