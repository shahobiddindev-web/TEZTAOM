import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">🍲</span>
            <span className="logo-text">
              TEZ<span className="logo-highlight">TAOM</span>
            </span>
          </div>
          <p className="footer-desc">
            Tez, issiq va mazali taomlar yetkazib berish xizmati.
          </p>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Biz bilan bog'lanish</h4>
          <p className="footer-item">
            <strong>📍 Manzil:</strong> Toshkent shahri, Chilonzor tumani, Bunyodkor ko'chasi, 15-uy
          </p>
          <p className="footer-item">
            <strong>📞 Telefon:</strong>{' '}
            <a href="tel:+998712000505" className="footer-link">
              +998 (71) 200-05-05
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>© {new Date().getFullYear()} TEZ TAOM. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
