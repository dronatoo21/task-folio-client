import { useContext } from "react";
import { FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const links = <>
        <li><NavLink className="rounded-none text-white font-semibold" style={({ isActive })=> ({borderBottom: isActive ? "2px solid #2b2a29" : " ", background: "transparent", color: "white"})} to="/">Home</NavLink></li>
        <li><NavLink className="rounded-none text-white font-semibold" style={({ isActive })=> ({borderBottom: isActive ? "2px solid #2b2a29" : " ", background: "transparent", color: "white"})} to="/dashboard/taskManagementDashboard">Dashboard</NavLink></li>
        <li><NavLink className="rounded-none text-white font-semibold" style={({ isActive })=> ({borderBottom: isActive ? "2px solid #2b2a29" : " ", background: "transparent", color: "white"})} to="/allTasks">All Tasks</NavLink></li>
    </>
    const handleLogout = () => {
        logout()
        .then(res => {
          console.log(res.user);
        })
        .catch(error => console.log(error));
        toast('successfully logged out')
      };
    return (
        <div>
            <div className="navbar bg-[#34c1ce] text-white py-8 md:px-10 ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <FaList className="text-2xl"/>
                  </div>
                  <ul className="menu menu-sm space-y-3 dropdown-content mt-3 z-[1] p-2 bg-[#2b2a29] shadow rounded-box w-52">
                    {links}
                  </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-14" src="https://i.ibb.co/QbJSZWG/TF-LOGO.png" alt="logo"/>
                    <h1 className="text-lg md:text-3xl font-bold ml-2">TaskFolio</h1>
                </div>
              </div>
              <div className="navbar-end">
              <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {links}
                </ul>
              </div>
                {
                  user ? <>
                  <label tabIndex={0} className="btn w-20 mx-3 btn-ghost btn-circle avatar">
                      <img className="mx-16 rounded-full" src={user?.photoURL} alt="img" />
                      <p>{user?.displayName}</p>
                  </label>  
                  <NavLink><button onClick={handleLogout} className="btn bg-[#2b2a29] border-none text-white mr-2">Logout</button></NavLink>               
                  </> : <NavLink to="/login"><button className="btn bg-[#2b2a29] border-none text-white mr-2">Login</button></NavLink>
                }
              </div>
            </div>
        </div>
    );
};

export default Navbar;