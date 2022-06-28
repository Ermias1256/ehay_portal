import { useLocation, Navigate, useNavigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  //   const { auth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const urlTo = location.pathname || "/";

  const user = JSON.parse(localStorage.getItem("profile"));

  return user?.result?.allowedRoles?.find((role) =>
    allowedRoles?.includes(role)
  ) ? (
    <Outlet />
  ) : user?.result?.name ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
