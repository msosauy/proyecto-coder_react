import CompanyLogo from "./CompanyLogo/CompanyLogo";
import NavList from "./NavList/NavList";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <CompanyLogo />
      <div className="nav__end">
        <NavList />
        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
