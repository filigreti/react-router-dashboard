import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Transfer {
  id: number;
  name: string;
  title: string;
  image: string;
}

const mockTransfers: Transfer[] = [
  {
    id: 1,
    name: "Sarah Kin",
    title: "CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    name: "Emma Davis",
    title: "Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "David Wilson",
    title: "Manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    title: "Developer",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
  },
  {
    id: 6,
    name: "James Taylor",
    title: "Analyst",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const QuickTransfer = () => {
  const [selectedTransfer, setSelectedTransfer] = useState<Transfer | null>({
    id: 1,
    name: "Sarah Johnson",
    title: "CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  });
  const [showSecondSet, setShowSecondSet] = useState(false);

  const displayedTransfers = showSecondSet
    ? mockTransfers.slice(3)
    : mockTransfers.slice(0, 3);

  return (
    <div className="bg-sidebar rounded-lg px-2 xl:px-6 py-10">
      <div className="flex items-center justify-between">
        <div className="relative w-[calc(100%-4rem)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={showSecondSet ? "second" : "first"}
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex items-center gap-x-4 xl:gap-x-8"
            >
              {displayedTransfers.map((transfer) => (
                <motion.div
                  variants={item}
                  onClick={() => setSelectedTransfer(transfer)}
                  key={transfer.id}
                  className="flex flex-col items-center gap-2 min-w-[80px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <motion.img
                      className="w-12 h-12 xl:w-16 xl:h-16 rounded-full object-cover"
                      src={transfer.image}
                      alt={transfer.name}
                      whileHover={{ scale: 1.1 }}
                    />
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-full",
                        selectedTransfer?.id === transfer.id
                          ? "bg-primary/20"
                          : "bg-transparent"
                      )}
                      initial={false}
                      animate={{
                        opacity: selectedTransfer?.id === transfer.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <motion.div
                    className="text-center gap-y-1 tracking-tight cursor-pointer"
                    animate={{
                      fontWeight:
                        selectedTransfer?.id === transfer.id ? 700 : 400,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xs">{transfer.name}</h3>
                    <p className="text-xs dashboard:text-secondary text-muted-foreground dark:text-muted-foreground">
                      {transfer.title}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.button
          onClick={() => setShowSecondSet(!showSecondSet)}
          className="flex items-center justify-center rounded-full dark:bg-secondary h-12 w-12 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="15"
            className="stroke-current dashboard:stroke-secondary"
            viewBox="0 0 9 15"
            fill="none"
            animate={{ rotate: showSecondSet ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M1 1L7.5 7.5L1 14" strokeWidth="2" />
          </motion.svg>
        </motion.button>
      </div>
      <div className="mt-9 flex items-center gap-8">
        <h3 className="text-sm dashboard:text-secondary whitespace-nowrap">
          Write Amount
        </h3>
        <div className="w-full relative">
          <Input
            className="flex-1 rounded-full dashboard:bg-[#ecf1f8] bg-[#ecf1f8] dark:bg-secondary h-12 dashboard:text-secondary p-0 !pl-6 border-none"
            placeholder="Enter amount"
            value={`525.20`}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <motion.button
              className="h-full rounded-full w-[8rem] dashboard:hover:bg-black/85 transition-all duration-300 m-0 bg-black text-white  flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm font-light">Send</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 26 23"
                fill="none"
                initial={{ x: -5 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  d="M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z"
                  fill="white"
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
