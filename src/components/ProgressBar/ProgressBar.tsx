import type { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar = ({ milestones }: ProgressBarProps) => {
  const totalMilestones = milestones.length;
  return (
    <div className="relative rotate-90 xl:mx-0 mt-95 xl:mt-0 xl:rotate-0 w-170 xl:w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Background Track */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gray-100 rounded-full"></div>

      {/* Progress Fill (Green) */}
      <div
        className="absolute top-0 left-0 h-3 bg-green-500 rounded-full transition-all duration-700 ease-in-out"
        style={{ width: `${150/totalMilestones}%` }}
      ></div>

      {/* Milestone Markers */}
      {milestones.map((step, index) => {
        return (
          <div
            key={index}
            className="absolute top-1/2 rotate-270 xl:rotate-0 flex flex-col items-center"
            style={{ left: `${(index / (totalMilestones - 0.5)) * 100}%` }}
          >
            {/* The Circle */}
            <div
              className={`w-3 h-3 rounded-full transition-colors duration-500 z-10 
                ${step.isCompleted ? "bg-white shadow-sm" : "bg-red-500"}`}
            ></div>

            {/* Labels - Positioned below the bar */}
            <div className="flex flex-col text-center gap-1.5 mt-4">
              <span className="text-secondary font-normal text-sm leading-4">
                {step.date}
              </span>
              <span className="text-primary font-medium text-sm leading-4">
                {step.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;