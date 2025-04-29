import { useState } from "react";

export default function Register() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [surname, setSurname] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5286/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ login, password, email, name, surname }),
        });

        if (response.ok) {
            setMessage("✅ Реєстрація успішна!");
        } else {
            const errorText = await response.text(); 
            setMessage(`❌ ${errorText}`);
        }
    };

    return (
        <div className="auth-container">
            <h1>Реєстрація</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Логін"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Ім'я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Фамілія"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Зареєструватись</button>
                {message && <div className="message">{message}</div>}
            </form>
        </div>
    );
}
