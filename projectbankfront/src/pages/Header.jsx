import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoScrooge mcduckbank.png";
import "../styles/Header.css";

export default function Header() {
  const [userLogin, setUserLogin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:5286/api/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.ok && res.json())
        .then((data) => data && setUserLogin(data.login))
        .catch(console.error);
    }
  }, []);

  return (
    <header className="header">
      <div className="logo-block" onClick={() => navigate("/")}>
        <img src={logo} alt="Bank Logo" className="logo-img" />
        <span className="logo-text">ScroogeMCduckBANK</span>
      </div>
      <nav className="navigation">
        {userLogin ? (
          <button className="button" onClick={() => navigate("/profile")}>
            {userLogin}
          </button>
        ) : (
          <>
            <button className="button" onClick={() => navigate("/login")}>
              Вхід
            </button>
            <button className="button" onClick={() => navigate("/register")}>
              Реєстрація
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
