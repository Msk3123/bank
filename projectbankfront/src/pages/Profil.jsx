import { useState, useEffect } from "react";
import '../styles/Profil.css'; 

export default function Profil() {
    const [userData, setUserData] = useState(null);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            setMessage("❌ Ви не авторизовані!");
            return;
        }

        const response = await fetch("http://localhost:5286/api/auth/user", {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` },
        });

        if (response.ok) {
            const data = await response.json();
            setUserData(data);
        } else {
            setMessage("❌ Помилка при отриманні даних користувача!");
        }
    };

    return (
        <div className="profile-container">
            <h1><b>Профіль</b></h1>

            {message && <div className="message">{message}</div>}

            {userData && (
                <div className="user-data">
                    <p>Ім'я: {userData.name}</p>
                    <p>Фамілія: {userData.surname}</p>
                    <p>Логін: {userData.login}</p>
                    <p>Email: {userData.email}</p>
                    <p>Баланс: 0</p>
                </div>
            )}
        </div>
    );
}
