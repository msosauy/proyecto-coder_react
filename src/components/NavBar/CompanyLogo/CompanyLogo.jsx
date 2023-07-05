import { Link } from "react-router-dom";
import img from "./assets/logo.png"; 
import "./CompanyLogo.css"


function CompanyLogo() {
  return <Link to={"/"}><img className="nav__logo" src={img} alt="logo" /></Link>
}

export default CompanyLogo;
