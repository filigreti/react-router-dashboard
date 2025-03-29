import { TransactionCard } from "@/components/svg/TransactionCard";
import { TransactionMoney } from "@/components/svg/TransactionMoney";
import { TransactionPaypal } from "@/components/svg/TransactionPaypal";
import { motion, useDragControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import BalanceChart from "./BalanceChart";
import Card from "./Card";
import PieChart from "./ExpenseChart";
import QuickTransfer from "./QuickTransfer";
import WeeklyChart from "./WeeklyChart";

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const transactionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Dashboard = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // lg breakpoint
  const containerRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth, clientWidth } = containerRef.current;
      setDragConstraints({
        left: -(scrollWidth - clientWidth),
        right: 0,
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth } = containerRef.current;
        setDragConstraints({
          left: -(scrollWidth - clientWidth),
          right: 0,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleWheel = (e: React.WheelEvent) => {
    if (containerRef.current) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="xl:px-8 px-5 xl:py-7 py-3"
      >
        <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-x-8 gap-y-8">
          <div className="col-span-1 xl:col-span-8">
            <div className="flex items-center justify-between">
              <h1 className="text font-medium">My Cards</h1>
              <a href="#" className="text-sm text-primary font-medium">
                See All
              </a>
            </div>
            <div
              className="mt-5 overflow-x-auto overflow-y-hidden"
              onWheel={handleWheel}
            >
              <motion.div
                ref={containerRef}
                className="flex gap-6 cursor-grab active:cursor-grabbing pb-4"
                drag={isDesktop ? "x" : false}
                dragControls={dragControls}
                dragElastic={0.2}
                dragConstraints={dragConstraints}
                dragMomentum={false}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  overscrollBehavior: "none",
                  touchAction: "pan-x",
                }}
              >
                {[
                  {
                    rect: "url(#paint0_linear_14_1311)",
                    path: "white",
                    stroke: "#DFEAF2",
                  },
                  {
                    rect: "white",
                    path: "black",
                  },
                  {
                    rect: "blue",
                    path: "white",
                  },
                  {
                    rect: "green",
                    path: "white",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="select-none"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <Card {...item} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="col-span-1 xl:col-span-4 xl:mt-[-3px]">
            <h1 className="text-lg font-medium">Recent Transactions</h1>

            <div className="mt-4 h-auto bg-sidebar rounded-lg p-6 flex flex-col gap-y-3">
              <motion.div
                className="flex items-center justify-between"
                variants={transactionVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <div className="flex items-center gap-4">
                  <TransactionCard />
                  <div className="flex flex-col gap-y-1">
                    <div className="text-sm ">Deposit from my Card</div>
                    <div className="   dashboard:text-secondary  text-muted-foreground text-sm">
                      28 January 2021
                    </div>
                  </div>
                </div>
                <p className="text-sm text-destructive dark:text-red-400 ">
                  -$850
                </p>
              </motion.div>
              <motion.div
                className="flex items-center justify-between"
                variants={transactionVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <div className="flex items-center gap-4">
                  <TransactionPaypal />
                  <div className="flex flex-col gap-y-1">
                    <div className="text-sm ">Deposit Paypal</div>
                    <div className="   dashboard:text-secondary  text-muted-foreground text-sm">
                      25 January 2021
                    </div>
                  </div>
                </div>
                <p className="text-sm text-green-400 ">+$2,500</p>
              </motion.div>
              <motion.div
                className="flex items-center justify-between"
                variants={transactionVariants}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                <div className="flex items-center gap-4">
                  <TransactionMoney />
                  <div className="flex flex-col gap-y-1">
                    <div className="text-sm ">Jemi Wilson</div>
                    <div className="   dashboard:text-secondary  text-muted-foreground text-sm">
                      21 January 2021
                    </div>
                  </div>
                </div>
                <p className="text-sm text-green-400 ">+$5,400</p>
              </motion.div>
            </div>
          </div>
          <div className="col-span-1 xl:col-span-8">
            <h1 className="text-lg font-medium">Weekly Activity</h1>

            <div className="xl:mt-5 ">
              <WeeklyChart />
            </div>
          </div>
          <div className="col-span-1 xl:col-span-4">
            <h3 className="text-lg font-semibold  mb-4">Expense Statistics</h3>
            <div className="xl:mt-5">
              <PieChart />
            </div>
          </div>
          <div className="col-span-1 xl:col-span-4">
            <h3 className="text-lg font-semibold  mb-4">Quick Transfer</h3>
            <QuickTransfer />
          </div>
          <div className="col-span-1 xl:col-span-8">
            <h3 className="text-lg font-semibold  xl:mb-4">Balance History</h3>
            <BalanceChart />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
