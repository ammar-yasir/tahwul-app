import { type FC } from 'react';
import type { TabsProps } from "./Tabs.types";

const Tabs: FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="w-fit bg-gray-100-transparent rounded-lg p-1.5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
              text-sm font-normal leading-5 transition-all duration-200 rounded-lg px-5.25 py-2 cursor-pointer
              ${
                activeTab === tab.id
                  ? "bg-white text-primary"
                  : "text-secondary"
              }
            `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;