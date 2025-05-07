import { FaFacebook, FaInstagram, FaLinkedin, FaClock, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4><FaPhone /> Контакти</h4>
          <p>+380 44 123 4567</p>
          <p><FaEnvelope /> support@scroogebank.ua</p>
        </div>

        <div className="footer-column">
          <h4><FaClock /> Час роботи</h4>
          <p>Пн-Пт: 09:00 - 18:00</p>
          <p>Сб: 10:00 - 15:00</p>
        </div>

        <div className="footer-column">
          <h4>Соцмережі</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook size={24} /></a>
            <a href="#"><FaInstagram size={24} /></a>
            <a href="#"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} ScroogeMcduck Bank. Всі права захищені.
      </div>
    </footer>
  );
}