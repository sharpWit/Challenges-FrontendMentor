import { Outlet } from "react-router-dom";

const Features = () => {
  return (
    <div className="snap-y snap-mandatory">
      <Outlet />
    </div>
  );
};

export default Features;
