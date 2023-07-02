import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router";
import { RequireAuth } from "@/Auth/RequireAuth";
import NotFound from "@/UI/NotFound";
import NotReady from "@/UI/NotReady";
import AuthPage from "./Auth/AuthPage";
import AppLayout from "./Layout/layout";
import RiscFormPage from "./RiscFormPage/RiscFormPage";
import RisksData from './RisksData/RisksData'
import CalculatedRisk from './CalculatedRisk/CalculatedRisk'
import ResultsRiskManagement from './ResultsRiskManagement/ResultsRiskManagement'

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
        }calculatedRisk
      >
        <Route path="createRisk" element={<RiscFormPage />} />
        <Route path="risks" element={<RisksData />} />
        <Route path="calculatedRisk" element={<CalculatedRisk />} />
        <Route path="/resultsRiskManagement" element={<ResultsRiskManagement />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
