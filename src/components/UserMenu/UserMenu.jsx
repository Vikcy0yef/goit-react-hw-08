import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css"

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth.user);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isLoggedIn) return null;

  return (
    <div className={s.content}>
      <p className={s.desc}>Welcome, {name}!</p>
      <button className={s.button} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;