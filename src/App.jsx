import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { DevicePage } from "./pages/DevicePage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/login-account" element={<LoginPage />} />
      <Route path="/register-account" element={<RegisterPage />} />
      <Route element={ProtectedRoutes}>
        <Route path="/" element={<Home />} />
        <Route path={`/device-${"idDevice"}`} element={<DevicePage />} />
      </Route>
    </Routes>
  );
}

export default App;
