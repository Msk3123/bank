import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profil from "./pages/Profil";
import PrivateRoute from "./PrivateRoute";
import Header from "./pages/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutBank from "./pages/AboutBank";
import BankBackground from "./pages/BankBackground";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Главная страница с фоном, AboutBank, Footer */}
        <Route
          path="/"
          element={
            <>
              <BankBackground />
              <AboutBank />
              <Footer />
            </>
          }
        />

        {/* Страницы аутентификации */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Профиль (защищённый маршрут) */}
        <Route
          path="/profil"
          element={
            <PrivateRoute>
              <Profil />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
