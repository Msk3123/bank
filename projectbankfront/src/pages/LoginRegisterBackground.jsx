// src/components/LoginRegisterBackground.jsx
import backgroundImage from '../assets/backgroundImage.png'; // заміни на свою назву
import '../styles/LoginRegisterBackground.css';

export default function LoginRegisterBackground({ children }) {
    return (
        <div className="login-register-background">
            <div className="background-animation" />
            <div className="content-wrapper">
                {children}
            </div>
        </div>
    );
}
