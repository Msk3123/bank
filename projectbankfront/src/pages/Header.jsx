import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoNaebbank.png";

export default function Header() {
    const [userLogin, setUserLogin] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetch("http://localhost:5286/api/auth/user", {
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            })
                .then(res => res.ok ? res.json() : null)
                .then(data => {
                    if (data) setUserLogin(data.login);
                });
        }
    }, []);

    return (
        <header className="header">
            <div className="logo-block" onClick={() => navigate("/")}>
                <img src={logo} alt="NaebBank Logo" className="logo-img" />
                <span className="logo-text">NaebBank</span>
            </div>
            <nav className="navigation">
                {userLogin ? (
                    <button className="button" onClick={() => navigate('/profil')}>
                        {userLogin}
                    </button>

                ) : (
                    <>
                        <button onClick={() => navigate('/login')}>Вхід</button>
                        <button onClick={() => navigate('/register')}>Реєстрація</button>
                    </>
                )}
            </nav>
        </header>
    );
}
