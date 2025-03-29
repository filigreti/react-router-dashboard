import { Scale } from "lucide-react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const options = {
    chart: {
      type: "pie" as const,
    },
    labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
    colors: ["#2C3456", "#E47934", "#3D5AFE", "#191919"],
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -30,
        },
        expandOnClick: false,
        startAngle: 0,
        endAngle: 360,
        offsetY: 0,
        donut: {
          size: "0%",
        },
      },
    },
    dataLabels: {
      style: {
        fontSize: "12px",
        fontWeight: "bold",
        colors: ["#ffffff"],
      },
      formatter: (val: number, opts: any) => {
        const label = opts.w.globals.labels[opts.seriesIndex];
        return [`${val}%`, label];
      },
      dropShadow: {
        enabled: true,
      },
      textAnchor: "middle" as const,
      distributed: true,
      position: "center" as const,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["#ffffff"],
    },
  };

  const series = [30, 15, 20, 35];

  return (
    <div className="flex justify-center items-center p-4 h-[380px] w-full bg-sidebar rounded-lg">
      <div className="">
        <Chart
          options={{
            ...options,
            states: {
              hover: { filter: { type: "none" } },
              active: { filter: { type: "none" } },
            },
          }}
          series={series}
          type="pie"
          width={400}
        />
      </div>
    </div>
  );
};

export default PieChart;
