import { useState, useEffect } from "react";
import "../styles/Profil.css";
import CardDesign from "./CardDesign";

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
            <div className="profile-header">
                <h1 className="profile-title">🦆 Мій Профіль</h1>
                <div className="decorative-line"></div>
            </div>

            {message && <div className="message-bubble">{message}</div>}

            {userData && (
                <div className="profile-content">
                    {/* Лівий блок - Інформація */}
                    <div className="user-info-card">
                        <div className="user-avatar">
                            {userData.name[0]}
                            {userData.surname[0]}
                        </div>

                        <div className="info-grid">
                            <div className="info-item">
                                <span className="info-icon">👤</span>
                                <div>
                                    <p className="info-label">Ім'я</p>
                                    <p className="info-value">{userData.name}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">📜</span>
                                <div>
                                    <p className="info-label">Фамілія</p>
                                    <p className="info-value">{userData.surname}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">🔐</span>
                                <div>
                                    <p className="info-label">Логін</p>
                                    <p className="info-value">{userData.login}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <div>
                                    <p className="info-label">Email</p>
                                    <p className="info-value">{userData.email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="balance-card">
                            <div className="balance-content">
                                <span className="wallet-icon">💰</span>
                                <div>
                                    <p className="balance-label">Поточний баланс</p>
                                    <p className="balance-amount">0 ₴</p>
                                </div>
                            </div>
                        </div>
                    </div>

                                      {/* Правий блок - Картка */}
                    <div className="card-section">
  <h2>💳 Моя Картка</h2>

  {/* Картка переміщена над кнопками */}
  <div className="card-container">
    <CardDesign
      cardNumber="4111 1111 1111 1111"
      expiryDate="12/26"
      cvv="123"
    />
  </div>

  {/* Кнопки під карткою */}
  <button className="action-button">
    🏦 Поповнити рахунок
  </button>

  <button className="action-button">
    📤 Надіслати кошти
  </button>
</div>
                </div>
            )}
        </div>
    );
}
