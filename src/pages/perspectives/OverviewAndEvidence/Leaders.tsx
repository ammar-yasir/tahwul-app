import type { FC } from "react";
import Card from "../../../components/Card/Card";
import type { LeaderProfileItemProps } from "../Perspectives.types";

const leaders: LeaderProfileItemProps[] = [
  {
    name: "Ahmad Al-Ali",
    designation: "Strategy Perspective",
  },
  {
    name: "Ammar Yasir",
    designation: "Senior Frontend Engineer",
  },
];

const LeaderProfileItem: FC<LeaderProfileItemProps> = ({
  name,
  designation,
}) => (
  <div className="min-w-56.25 min-h-15.75 bg-background flex gap-3 rounded-10 p-4">
    <img
      className="w-[47.1px] h-[47.1px]"
      src="/assets/images/common/profile-pic.svg"
      alt="Leader Pic"
    />
    <div className="flex flex-col gap-2">
      <h4 className="text-primary text-base font-medium leading-5.5">{name}</h4>
      <h4 className="text-secondary text-base font-medium leading-5.5">{designation}</h4>
    </div>
  </div>
);

const Leaders = () => {
  return (
    <Card widthClass="w-full" heightClass="min-h-32.5" padding="p-4">
      <div className="flex flex-col gap-4">
        <h3 className="text-primary text-base font-bold leading-4">Leaders</h3>
        <div className="flex flex-col lg:flex-row gap-4">
          {leaders?.map((leader, index) => (
            <LeaderProfileItem
              key={index}
              name={leader?.name}
              designation={leader?.designation}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Leaders;
