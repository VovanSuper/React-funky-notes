import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">Notes App</div>

    <ul className="navbar-nav">
      <li className="navbar-item">
        <NavLink className="nav-link" to="/" exact>
          Главная
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink className="nav-link" to="/about">
          Информация
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
