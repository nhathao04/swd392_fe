import { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const { isFetchData } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenAdmin = localStorage.getItem("tokenAdmin");

    if (!location.pathname.startsWith("/admin") && tokenAdmin) {
      localStorage.removeItem("tokenAdmin");
      toast("Admin automatically logged out!");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
