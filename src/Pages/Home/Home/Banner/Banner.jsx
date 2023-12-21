import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero h-[300px] md:h-[400px] lg:h-[600px] rounded-b-lg bg-gradient-to-r from-[#22a6b3] to bg-[#538cb4]" >
            <div className="w-full px-4 md:px-10 text-white text-center mb-5">
                  <h1 className="mb-5 text-2xl md:text-4xl lg:text-6xl font-bold"><i>Find Your Focus, Fuel<span><br /> Your Progress.</span></i></h1>
                  <p className="mb-2 md:mb-10">Supercharge your productivity with TaskFolio. Effortlessly manage tasks, collaborate seamlessly,<br /> and conquer your goals.</p>
                  <Link to="/dashboard/taskManagementDashboard"><button className="btn w-24 md:w-auto bg-[#2b2a29] border-none rounded-tr-3xl rounded-bl-3xl text-white">Lets Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;