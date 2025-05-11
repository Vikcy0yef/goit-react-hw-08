import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./AuthNav.module.css"

const AuthNav = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) return null;

  return (
    <nav className={s.nav}>
      <NavLink className={s.but} to="/login">Login</NavLink>
      <NavLink className={s.but} to="/register">Register</NavLink>
    </nav>
  );
};

export default AuthNav;