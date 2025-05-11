import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RestrictedRoute = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  if (isRefreshing) {
    return null; 
  }

  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
};

export default RestrictedRoute;