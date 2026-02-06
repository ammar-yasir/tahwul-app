import BackButton from "../../components/BackButton/BackButton";
import OverviewAndEvidence from "./OverviewAndEvidence";
import Strategy from "./Strategy";
import SummaryCard from "./SummaryCard";

const Perspectives = () => {
  return (
    <div className="flex flex-col gap-4">
      <BackButton label="Digital Transformation Strategic Planning" />
      <Strategy />
      <SummaryCard />
      <OverviewAndEvidence />
    </div>
  );
};

export default Perspectives;
