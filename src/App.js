import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";
import { RequireAuth } from "@/Auth/RequireAuth";
import NotFound from "@/UI/NotFound";
import NotReady from "@/UI/NotReady";
import AuthPage from "./Auth/AuthPage";
import AppLayout from "./Layout/layout";
import RiscFormPage from "./RiscFormPage/RiscFormPage";

function App() {
  const isLoggedOut = !localStorage.getItem("login");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <AppLayout />
          </RequireAuth>
        }
      >
        <Route path="createRisk" element={<RiscFormPage />} />
        <Route path="audit" element={<NotReady />} />
        <Route path="custom-links" element={<NotReady />} />
        <Route path="settings" element={<NotReady />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
