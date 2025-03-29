import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Menu, Monitor, Moon, SettingsIcon, Sun } from "lucide-react";
import { ComponentType, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import GetRouteName from "./GetRouteName";
import { Cog } from "./svg/Cog";
import {
  AccountsIcon,
  CreditCardIcon,
  HomeIcon,
  InvestmentIcon,
  LoansIcon,
  LogoIcon,
  PriviledgeIcon,
  ServicesIcon,
  TransactionsIcon,
} from "./svg/index";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

type MenuItem = {
  path: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
};

const menuItems: MenuItem[] = [
  { path: "/dashboard", label: "Dashboard", icon: HomeIcon },
  {
    path: "/dashboard/transactions",
    label: "Transactions",
    icon: TransactionsIcon,
  },
  { path: "/dashboard/accounts", label: "Accounts", icon: AccountsIcon },
  {
    path: "/dashboard/investments",
    label: "Investments",
    icon: InvestmentIcon,
  },
  {
    path: "/dashboard/credit-cards",
    label: "Credit Cards",
    icon: CreditCardIcon,
  },
  { path: "/dashboard/loans", label: "Loans", icon: LoansIcon },
  { path: "/dashboard/services", label: "Services", icon: ServicesIcon },
  {
    path: "/dashboard/privileges",
    label: "My Privileges",
    icon: PriviledgeIcon,
  },
  { path: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];

export default function DashboardLayout() {
  const location = useLocation();
  const [theme, setTheme] = useState("dashboard");
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={`flex min-h-screen ${theme} font-sans`}>
      <aside className="hidden w-[14rem] border-r bg-sidebar dark:bg-slate-950 dashboard:text-sidebar-foreground text-muted-foreground xl:block sticky top-0 h-screen overflow-y-auto">
        <nav className="flex flex-col gap-2 pt-5">
          <a className="flex items-center text-primary gap-2" href="#">
            <div className="-ml-[2px] pl-10 text-primary">
              <LogoIcon />
            </div>
            <span className="text-lg pl-1 font-semibold">Soar Task</span>
          </a>
          <div className="mt-7 flex flex-col gap-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium pl-10 flex items-center gap-4 py-3 transition-colors hover:text-sidebar-accent-foreground relative",
                  location.pathname === item.path &&
                    "text-sidebar-accent-foreground before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-sidebar-accent-foreground before:rounded-r-md"
                )}
              >
                {item.icon && (
                  <div className="!w-5 !h-5 flex items-center justify-center text-inherit">
                    <item.icon />
                  </div>
                )}
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col">
        <Sheet>
          <div className="xl:border-b bg-sidebar dark:bg-slate-950 h-16 flex justify-between items-center xl:px-7 px-5 py-4 sticky top-0 z-10">
            <SheetTrigger asChild>
              <button className="xl:hidden dark:text-white">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <GetRouteName />
            <div className="flex items-center gap-6">
              <div>
                <div className="w-full relative xl:flex hidden items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className=" absolute left-4"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M19.3359 18.2109L14.7344 13.6094C15.875 12.2188 16.5625 10.4375 16.5625 8.49609C16.5625 4.04297 12.9492 0.429688 8.49609 0.429688C4.03906 0.429688 0.429688 4.04297 0.429688 8.49609C0.429688 12.9492 4.03906 16.5625 8.49609 16.5625C10.4375 16.5625 12.2148 15.8789 13.6055 14.7383L18.207 19.3359C18.5195 19.6484 19.0234 19.6484 19.3359 19.3359C19.6484 19.0273 19.6484 18.5195 19.3359 18.2109ZM8.49609 14.957C4.92969 14.957 2.03125 12.0586 2.03125 8.49609C2.03125 4.93359 4.92969 2.03125 8.49609 2.03125C12.0586 2.03125 14.9609 4.93359 14.9609 8.49609C14.9609 12.0586 12.0586 14.957 8.49609 14.957Z"
                      fill="#718EBF"
                    />
                  </svg>
                  <Input
                    className="flex-1 rounded-full dashboard:bg-[#ecf1f8] bg-[#ecf1f8] dark:bg-slate-800 h-10 xl:w-[18rem] dashboard:text-secondary p-0 !pl-12 border-none text-sm"
                    placeholder="Search for something"
                  />
                </div>
              </div>
              <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogTrigger asChild>
                  <button className="xl:flex hidden hover:bg-sidebar-accent items-center gap-2 bg-[#f6f7fa] dark:bg-slate-800 rounded-full p-2">
                    <Cog />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] dark:bg-slate-950 dark:border-slate-800">
                  <DialogHeader>
                    <DialogTitle className="dark:text-white">
                      Theme Settings
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <button
                      onClick={() => {
                        setTheme("");
                        setOpenModal(false);
                      }}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                        theme === ""
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent"
                      }`}
                    >
                      <Monitor className="h-5 w-5" />
                      <span>System</span>
                    </button>
                    <button
                      onClick={() => {
                        setTheme("dashboard");
                        setOpenModal(false);
                      }}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                        theme === "dashboard"
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent"
                      }`}
                    >
                      <Sun className="h-5 w-5" />
                      <span>Dashboard</span>
                    </button>
                    <button
                      onClick={() => {
                        setTheme("dark");
                        setOpenModal(false);
                      }}
                      className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${
                        theme === "dark"
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "hover:bg-sidebar-accent"
                      }`}
                    >
                      <Moon className="h-5 w-5" />
                      <span>Dark</span>
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
              <div className="xl:flex hidden items-center gap-2 bg-[#f6f7fa] dark:bg-slate-800 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M11.442 25C9.289 25 7.53577 23.2479 7.53577 21.0938C7.53577 20.6625 7.88577 20.3125 8.31702 20.3125C8.74827 20.3125 9.09827 20.6625 9.09827 21.0938C9.09827 22.3866 10.1504 23.4375 11.442 23.4375C12.7337 23.4375 13.7858 22.3866 13.7858 21.0938C13.7858 20.6625 14.1358 20.3125 14.567 20.3125C14.9983 20.3125 15.3483 20.6625 15.3483 21.0938C15.3483 23.2479 13.5952 25 11.442 25Z"
                    fill="#396AFF"
                  />
                  <path
                    d="M20.0357 21.875H2.84824C1.84307 21.875 1.02539 21.0573 1.02539 20.0521C1.02539 19.5187 1.25771 19.0136 1.66283 18.6666C1.68896 18.6438 1.717 18.623 1.74618 18.6041C3.2753 17.2697 4.15039 15.35 4.15039 13.3228V10.4166C4.15039 6.39591 7.42226 3.125 11.442 3.125C11.6087 3.125 11.7889 3.12805 11.9556 3.15628C12.3816 3.22704 12.6692 3.63026 12.5982 4.05521C12.5275 4.48017 12.117 4.7678 11.6993 4.69685C11.6159 4.6833 11.5244 4.6875 11.442 4.6875C8.28381 4.6875 5.71289 7.25727 5.71289 10.4166V13.3228C5.71289 15.8396 4.60968 18.2209 2.68898 19.8551C2.67334 19.8677 2.6598 19.8792 2.64301 19.8906C2.61497 19.9261 2.58789 19.9802 2.58789 20.0521C2.58789 20.1937 2.70672 20.3125 2.84824 20.3125H20.0357C20.1775 20.3125 20.2963 20.1937 20.2963 20.0521C20.2963 19.9791 20.2692 19.9261 20.24 19.8906C20.2244 19.8792 20.2108 19.8677 20.1952 19.8551C18.2734 18.2198 17.1713 15.8396 17.1713 13.3228V12.1876C17.1713 11.7563 17.5213 11.4063 17.9525 11.4063C18.3838 11.4063 18.7338 11.7563 18.7338 12.1876V13.3228C18.7338 15.3511 19.6098 17.2718 21.1411 18.6073C21.1691 18.626 21.1962 18.6459 21.2212 18.6678C21.6265 19.0136 21.8588 19.5187 21.8588 20.0521C21.8588 21.0573 21.0411 21.875 20.0357 21.875Z"
                    fill="#396AFF"
                  />
                  <path
                    d="M18.7338 10.4166C15.8619 10.4166 13.5254 8.08029 13.5254 5.2084C13.5254 2.3365 15.8619 0 18.7338 0C21.6057 0 23.942 2.3365 23.942 5.2084C23.942 8.08029 21.6057 10.4166 18.7338 10.4166ZM18.7338 1.5625C16.7233 1.5625 15.0879 3.19786 15.0879 5.2084C15.0879 7.21874 16.7233 8.8541 18.7338 8.8541C20.7441 8.8541 22.3795 7.21874 22.3795 5.2084C22.3795 3.19786 20.7441 1.5625 18.7338 1.5625Z"
                    fill="#396AFF"
                  />
                </svg>
              </div>
              <Avatar className="xl:w-10 xl:h-10 w-9 h-9">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=cro"
                  alt="@shadcn"
                />
                <AvatarFallback className="dark:text-white">CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="xl:bg-background bg-background dashboard:bg-white dashboard:xl:bg-background dark:bg-slate-950 min-h-[calc(100dvh-64px)] text-foreground dark:text-white">
              <Outlet />
            </div>
          </div>
          <SheetContent
            side="left"
            className="w-64 bg-sidebar dark:bg-slate-950 p-0 fixed top-0 h-full z-50"
          >
            <nav className="flex flex-col gap-2 h-full overflow-y-auto">
              <a
                className="flex items-center text-primary pt-4 pl-9 mb-5 gap-2"
                href="#"
              >
                <div className="text-primary">
                  <LogoIcon />
                </div>
                <span className="text-lg font-semibold">Soar Task</span>
              </a>
              {menuItems.map((item) => (
                <SheetClose asChild key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "text-sm text-muted-foreground font-medium pl-10 flex items-center gap-4 py-3 transition-colors hover:text-sidebar-accent-foreground relative",
                      location.pathname === item.path &&
                        "text-sidebar-accent-foreground before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-sidebar-accent-foreground before:rounded-r-md"
                    )}
                  >
                    {item.icon && (
                      <div className="!w-5 !h-5 flex items-center justify-center text-inherit">
                        <item.icon />
                      </div>
                    )}
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </main>
    </div>
  );
}
