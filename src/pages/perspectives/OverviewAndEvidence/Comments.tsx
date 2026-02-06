import type { FC } from "react";
import Card from "../../../components/Card/Card";
import type { Comment } from "./types";

const commentsData = [
  {
    name: "Sara Ibrahim",
    desc: "Ensure the plan includes a clear governance model.",
    date: "2025-08-05"
  },
  {
    name: "Mona Hamed",
    desc: "Ensure the plan includes a clear governance model.",
    date: "2025-08-05"
  },
];

const CommentItem: FC<Comment> = ({ name, desc, date }) => (
  <Card
    className="flex flex-col gap-3"
    widthClass="w-full"
    heightClass="h-full"
    padding="p-6"
  >
    <div className="flex justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 bg-gray-100 rounded-full text-center">
          <span className="text-secondary text-center text-xl">
            {name?.split("")?.[0]}
          </span>
        </div>
        <h4 className="text-primary text-sm leading-4 font-bold capitalize">{name}</h4>
      </div>
      <p className="text-secondary text-sm leading-4 font-normal">{date}</p>
    </div>
    <p className="text-primary text-sm leading-5 font-normal capitalize">{desc}</p>
  </Card>
);

const Comments = () => {
  return (
    <Card
      cardTitle="Comments"
      titleClass="leading-4"
      widthClass="w-full"
      heightClass="h-full"
      padding="p-6"
      className="flex flex-col gap-4"
    >
      {commentsData?.map((comment, index) => (
        <CommentItem key={index} name={comment?.name} desc={comment?.desc} date={comment?.date} />
      ))}
      <textarea className="border border-gray-100 rounded-10 p-4" rows={5} />
      <button
        type="submit"
        className="h-8.5 w-fit flex items-center gap-2.5 bg-primary rounded-lg px-6 py-3.5 cursor-pointer"
      >
        <img
          className="w-4 h-4"
          src="/assets/icons/common/send.svg"
          alt="Send icon"
        />
        <span className="text-white text-base font-normal leading-4">Post Comment</span>
      </button>
    </Card>
  );
};

export default Comments;
