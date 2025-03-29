import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jul", value: 120 },
  { month: "Aug", value: 320 },
  { month: "Aug", value: 230 },
  { month: "Sep", value: 480 },
  { month: "Sep", value: 420 },
  { month: "Oct", value: 780 },
  { month: "Nov", value: 220 },
  { month: "Dec", value: 580 },
  { month: "Dec", value: 250 },
  { month: "Jan", value: 620 },
];

const BalanceChart = () => {
  return (
    <div className="w-full  xl:p-4 rounded-xl bg-sidebar">
      <ResponsiveContainer width="100%" height={235}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3f51b5" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#3f51b5" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF" }}
            className="text-[0.8rem]"
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF" }}
            domain={[0, "dataMax + 100"]}
            ticks={[0, 200, 400, 600, 800]}
            className="text-[0.8rem]"
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3f51b5"
            strokeWidth={3}
            fill="url(#colorValue)"
            fillOpacity={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;
