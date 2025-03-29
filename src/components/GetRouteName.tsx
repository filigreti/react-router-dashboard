// Get the current route name
import { useLocation } from "react-router-dom";

const GetRouteName = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const routeName = pathname.split("/").pop()?.replace(/-/g, " ");

  return (
    <div className="text-lg text-pretty text-primary font-medium xl:text-left text-center w-full  capitalize">
      {routeName === "dashboard" ? "Overview" : routeName}
    </div>
  );
};

export default GetRouteName;
