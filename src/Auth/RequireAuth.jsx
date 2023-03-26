import { Navigate, useLocation } from "react-router";
import { Header } from "@/UI/Header";
import { Layout, Spin } from "antd";
import { useSelector } from "react-redux";

export function RequireAuth({ children }) {
  const isLoggedOut = !localStorage.getItem("login");
  let location = useLocation();
  console.log(location);
  if (isLoggedOut && location.pathname !== "/login") {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
