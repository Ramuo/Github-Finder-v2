import {FaFacebook,FaInstagram, FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    const footerYear= new Date().getFullYear();

    return (
        <footer className="bg-neutral">
        
            <div className="container py-5 mx-auto">
                
                <div className="flex flex-col items-center mb-4 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">

                    <div className="space-y-8 md:items-start md:space-y-5">
                        <p class="h-8">
                            Tous droits réservés &copy; {footerYear}
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-between space-y-4 text-white ">
                    
                        <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                        
                            <div>
                                <Link to='/#' className="hover:text-blue-500 text-3xl">
                                    <FaFacebook />
                                </Link>
                            </div>
                            <div>
                                <Link to='/#'>
                                    <FaInstagram className="hover:text-pink-500 text-3xl"/>
                                </Link>
                            </div>
                            <div>
                                <Link to='/#'>
                                    <FaLinkedin className="hover:text-blue-500 text-3xl"/>
                                </Link>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;