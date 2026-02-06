import Card from "../../components/Card/Card";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const milestones = [
  { label: "Kickoff Workshop", date: "Mar 17", isCompleted: true },
  { label: "Data Collection", date: "March 18", isCompleted: true },
  { label: "Initial Phase", date: "May 8", isCompleted: false },
  { label: "Verification", date: "May 9–July 12", isCompleted: false },
  { label: "Completion Reviews", date: "July 13", isCompleted: false },
  { label: "Conclusion", date: "August 21", isCompleted: false },
];

const ProjectTimeline = () => {
  return (
    <Card widthClass="w-full" heightClass="h-220 xl:h-[159px]">
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h3 className="text-primary font-bold capitalize">
            Project Timeline
          </h3>
          <select
            className="w-22.5 h-8.5 border border-gray-100 rounded-10 bg-white text-sm text-primary font-medium focus:outline-none text-center appearance-none bg-no-repeat bg-position-[right_10px_center] bg-[url('/assets/icons/header/caret-down.svg')] pr-3"
            name="year"
            defaultValue="2026"
          >
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
        <ProgressBar milestones={milestones} />
      </div>
    </Card>
  );
}

export default ProjectTimeline;