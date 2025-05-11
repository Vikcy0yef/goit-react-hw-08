import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css"
const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.home} to="/">Home</NavLink>
      <NavLink className={s.home} to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;