import "./NavList.css";

function NavList() {
  return (
    <nav>
      <ul className="nav__list">
        <li>
          <a>Productos</a>
        </li>
        <li>
          <a>Noticias</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
