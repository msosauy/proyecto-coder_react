import { NavLink } from "react-router-dom";
import "./NavList.css";

function NavList() {
  return (
    <nav>
      <ul className="nav__list">
        <li>
          <NavLink to={`category/SOHO`} className={({isAcive}) => isAcive ? 'ActiveOption' : 'Option'} style={{textDecoration: "none"}}>SOHO</NavLink>
        </li>
        <li>
          <NavLink to={`category/Profesional`} className={({isAcive}) => isAcive ? 'ActiveOption' : 'Option'} style={{textDecoration: "none"}}>Profesional</NavLink>
        </li>
        <li>
          <NavLink to={`category/Enterprise`} className={({isAcive}) => isAcive ? 'ActiveOption' : 'Option'} style={{textDecoration: "none"}}>Enterprise</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
