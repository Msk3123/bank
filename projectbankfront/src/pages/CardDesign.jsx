import React from "react";
import "../styles/CardDesign.css";

const CardDesign = ({
  cardNumber = "4111 1111 1111 1111",
  expiryDate = "12/26",
  cvv = "123",
}) => {
  const formattedCardNumber =
    cardNumber.replace(/\D/g, "").match(/.{1,4}/g)?.join(" ") || "0000 0000 0000 0000";

  return (
    <div className="card-wrapper">
      <div className="card-wrapper-inner">
        {/* Front */}
        <div className="card card-front">
          <div className="card-header">
            <div className="bank-logo">ScroogeMcDuck Bank</div>
            <div className="chip-icon"></div>
          </div>
          <div className="card-number">{formattedCardNumber}</div>
          <div className="card-footer">
            <div className="card-holder">
              <span>CARDHOLDER NAME</span>
              <div className="signature-strip"></div>
            </div>
            <div className="card-expiry">
              <span>VALID THRU</span>
              {expiryDate}
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="card card-back">
          <div className="magnetic-strip"></div>
          <div className="cvv-section">
            <div className="cvv-strip"></div>
            <div className="card-cvv">{cvv}</div>
          </div>
          <div className="contact-info">
            <div className="bank-url">www.scroogemcduckbank.com</div>
            <div className="customer-service">1-800-MC-DUCK</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;