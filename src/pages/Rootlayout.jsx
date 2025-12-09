
import Nav from '../pages/Nav'
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      
      <Nav />
      <div className="page-content">
        <Outlet />
      </div>
    </>
  );
};

export default Rootlayout;
