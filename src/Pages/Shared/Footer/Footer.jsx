import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-10 bg-[#34c1ce] text-white pb-3">
            <footer className="footer p-10 text-white">
              <aside>
                <img className="w-14" src="https://i.ibb.co/QbJSZWG/TF-LOGO.png" alt="logo"/>
                <p>TaskFolio<br/>Providing reliable tech since 2015</p>
              </aside> 
              <nav>
                <header className="footer-title">Social</header> 
                <div className="grid grid-flow-col gap-4">
                  <Link to="https://www.facebook.com/"><FaFacebook className="text-2xl"/></Link>
                  <Link to="https://twitter.com/?lang=en"><FaTwitter className="text-2xl"/></Link>
                  <Link to="https://www.instagram.com/"><FaInstagram className="text-2xl"/></Link>
                </div>
              </nav>
            </footer>
            <p className="text-center">Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;