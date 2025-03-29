import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useEffect, useState } from "react";

const data = [
  { name: "Sat", withdraw: 450, deposit: 230 },
  { name: "Sun", withdraw: 340, deposit: 130 },
  { name: "Mon", withdraw: 310, deposit: 240 },
  { name: "Tue", withdraw: 460, deposit: 350 },
  { name: "Wed", withdraw: 150, deposit: 230 },
  { name: "Thu", withdraw: 370, deposit: 230 },
  { name: "Fri", withdraw: 380, deposit: 320 },
];

const useResponsiveBarGap = () => {
  const [barGap, setBarGap] = useState(-40);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // sm
        setBarGap(-6);
      } else if (width < 768) {
        // md
        setBarGap(-35);
      } else if (width < 1024) {
        // lg
        setBarGap(-40);
      } else {
        // xl
        setBarGap(-45);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return barGap;
};

const useResponsiveBarSize = () => {
  const [maxBarSize, setMaxBarSize] = useState(15);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // sm
        setMaxBarSize(8);
      } else if (width < 768) {
        // md
        setMaxBarSize(12);
      } else if (width < 1024) {
        // lg
        setMaxBarSize(12);
      } else {
        // xl
        setMaxBarSize(12);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return maxBarSize;
};

const CustomLegend = () => {
  return (
    <div className="flex items-center gap-2 justify-end mt-3 mb-5 mr-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-primary rounded-full" />
        <span className="text-sm dashboard:text-[#718EBF] text-muted-foreground capitalize">
          Deposit
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-[#396AFF] rounded-full" />
        <span className="text-sm dashboard:text-[#718EBF] text-muted-foreground capitalize">
          Withdraw
        </span>
      </div>
    </div>
  );
};

const WeeklyChart = () => {
  const barGap = useResponsiveBarGap();
  const maxBarSize = useResponsiveBarSize();

  return (
    <div className="h-[380px] w-full bg-sidebar rounded-lg xl:px-5 pb-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
          barGap={barGap}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            // stroke="#f0f0f0"
            className="dashboard:stroke-sidebar-border dark:stroke-muted"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF" }}
            dy={10}
            className="text-[0.8rem]"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF" }}
            domain={[0, 500]}
            ticks={[0, 100, 200, 300, 400, 500]}
            className="text-[0.8rem]"
          />
          <Legend content={CustomLegend} verticalAlign="top" align="left" />
          <Bar
            dataKey="withdraw"
            className=" !fill-primary"
            radius={[10, 10, 10, 10]}
            maxBarSize={maxBarSize}
            name="Withdraw"
          />
          <Bar
            dataKey="deposit"
            fill="#396AFF"
            radius={[10, 10, 10, 10]}
            maxBarSize={maxBarSize}
            name="Deposit"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;
