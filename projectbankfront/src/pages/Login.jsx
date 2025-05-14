import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginRegisterBackground from "./LoginRegisterBackground";
import '../styles/Login.css'

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5286/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            setMessage("✅ Вхід успішний!");
            navigate("/Profil");
        } else {
            setMessage("❌ Невірний логін або пароль!");
        }
    };

    return (
        <LoginRegisterBackground>
         
        <div className="auth-container">
            
            <h1>Вхід</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Логін"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Увійти</button>
                {message && <div className="message">{message}</div>}
            </form>
            
        </div>
        </LoginRegisterBackground>
    );
}
