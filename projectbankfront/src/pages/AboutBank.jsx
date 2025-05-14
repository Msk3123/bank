import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutBank.css"

export default function AboutBank() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="about-bank"
    >
      <div>
        <h2 className="about-bank__title">Оберіть наш банк</h2>
        <h3 className="about-bank__subtitle">ScroogeMcduck Bank</h3>
      </div>

      <p className="about-bank__description">
        ScroogeMcduck Bank — ваше вікно у світ фінансових висот. Ми поєднуємо
        класичну надійність зі сміливими інноваціями, щоб ви:
      </p>

      <ul className="about-bank__list">
        {[
          "Безпечно зберігати кошти завдяки найсучаснішим стандартам захисту",
          "Користуватися інтуїтивним онлайн-банкінгом — оплати та перекази за кілька секунд",
          "Отримувати вигідні кредити та інвестиційні продукти на індивідуальних умовах",
          "Користуватися карткою ScroogeCard із кешбеком до 5 % на щоденні покупки",
          "Отримувати підтримку 24/7 у чаті, телефоні чи месенджерах",
        ].map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>

      <motion.p
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="about-bank__closing"
      >
        Ми впевнені: справжня фінансова свобода — це впевненість у завтрашньому
        дні. <span className="about-bank__highlight">ScroogeMcduck Bank</span> —
        ваш партнер, який росте разом із вами.
      </motion.p>
    </motion.section>
  );
}
