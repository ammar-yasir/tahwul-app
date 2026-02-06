import PieChart from "../../components/Charts/PieChart"
import Card from "../../components/Card/Card"

const Strategy = () => {
  return (
    <Card widthClass="w-full" heightClass="min-h-[109px]" padding="p-4">
      <div className="flex flex-col xl:flex-row justify-between gap-4">
        <div className="flex flex-col gap-[8.42px]">
          <h4 className="w-30.5 h-7 rounded-30 border border-gray-100 font-medium text-xs text-secondary text-center leading-5.5 py-0.75">
            Strategy & Planning
          </h4>
          <p className="font-bold text-base text-primary leading-4 capitalize">
            Digital Transformation Strategic Planning
          </p>
          <p className="text-sm font-normal leading-4 text-secondary capitalize">
            Develop comprehensive strategic plans for digital transformation
            aligned with organizational goals
          </p>
        </div>
        <div className="w-20.5 h-20.5 flex items-center justify-center relative">
          <PieChart
            containerClassName="w-20.5 h-20.5"
            data={[{ name: "Completed", value: 100 }]}
            fillColor="#1EA54E"
            cx="50%"
            cy="50%"
            startAngle={0}
            endAngle={360}
          />
          {/* Centered Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-bold text-primary">100%</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Strategy;