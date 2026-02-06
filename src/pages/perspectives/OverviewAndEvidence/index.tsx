import { useState } from "react";
import Tabs from "../../../components/Tabs/Tabs";
import OverviewTab from "./Overview";
import EvidenceTab from "./Evidence";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "evidence", label: "Evidence" },
];

const Overview = () => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className="flex flex-col gap-4">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "overview" ? (
        <OverviewTab />
      ) : (
        <EvidenceTab />
      )}
    </div>
  );
};

export default Overview;
