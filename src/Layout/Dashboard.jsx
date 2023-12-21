import { FaCube, FaHome, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const user= true
    return (
        <div>
            <div className="drawer lg:drawer-open">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex flex-col">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn bg-gradient-to-r from-[#22a6b3] to bg-[#538cb4] drawer-button lg:hidden text-white"> <FaList/> Menu</label>
                <div className="">
                <Outlet/>
            </div>
              </div> 
              <div className="drawer-side min-h-screen">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-gradient-to-r from-[#22a6b3] to bg-[#538cb4] text-white">
                  {/* Sidebar content here */}
                <div className="flex items-center mb-5">
                    <img className="w-9" src="https://i.ibb.co/QbJSZWG/TF-LOGO.png" alt="logo"/>
                    <h1 className="text-lg md:text-2xl font-bold ml-2">TaskFolio</h1>
                </div>
                  {
                    user && <>
                        <NavLink style={({ isActive })=> ({background: isActive ? "#0a3d62" : "transparent",})} to="/dashboard/dashboardHome" className="px-5 mb-1 py-2 rounded-md border-2 text-white flex items-center gap-2"><FaCube/>Dashboard Home</NavLink>
                    </>
                  }
                  
                  <hr className="my-5 mx-5" />
                  <NavLink style={({ isActive })=> ({background: isActive ? "#0a3d62" : "transparent",})} to="/" className="px-5 py-2 rounded-md border-2 my-2 text-white flex items-center gap-2"><FaHome/> Home</NavLink>
                </ul>
              </div>
            </div>
        </div>
    );
};

export default Dashboard;