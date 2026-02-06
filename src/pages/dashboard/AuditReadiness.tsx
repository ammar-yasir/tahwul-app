import PieChart from "../../components/Charts/PieChart";
import Card from "../../components/Card/Card";

const data = [
  { name: 'Completed', value: 80 },
  { name: 'Remaining', value: 20 },
];

const AuditReadiness = () => {
  return (
    <Card
      cardTitle="Audit Readiness"
      widthClass="w-full xl:max-w-[368px]"
      heightClass="h-full xl:max-h-[322.5px]"
      className="flex flex-col py-6 px-4"
    >
      <div className="flex flex-col items-center text-center w-64.5 h-64.5 mx-auto">
        <PieChart
          containerClassName="min-w-64.5 min-h-64.5 -mt-24"
          data={data}
          fillColor="#1EA54E"
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={0}
        />
        <div className="text-center -mt-23 z-20">
          <div className="text-[44px] font-bold text-primary">
            {data[0].value}%
          </div>
          <div className="text-secondary font-normal text-sm mt-1">
            Readiness Level
          </div>
        </div>
        {/* Stats underneath Chart */}
        <div className="flex justify-between w-full border-t border-gray-100 mt-4 pt-6">
          <div className="flex flex-col">
            <span className="text-primary text-2xl font-bold">12</span>
            <span className="text-secondary text-sm font-normal">
              Overdue Stds
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary text-2xl font-bold">5</span>
            <span className="text-secondary text-sm font-normal">
              Missing Evidence
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default AuditReadiness;