import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
      <ToastContainer />
      <h1 className="text-danger">D🩸NATE BL🩸🩸D</h1>
      <button onClick={showToastMessage}>Notify</button>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={<ProtectedRoute>{<HomePage />}</ProtectedRoute>}
        />
        <Route path="/login" element={<PublicRoute>{<Login />}</PublicRoute>} />
        <Route
          path="/register"
          element={<PublicRoute>{<Register />}</PublicRoute>}
        />
      </Routes>
    </>
  );
}

export default App;
