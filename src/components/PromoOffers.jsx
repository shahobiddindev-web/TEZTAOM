import React, { useState } from 'react';
import { Tag, Check } from 'lucide-react';
import { PROMOTIONS } from '../data/foodData';

export default function PromoOffers({ onApplyPromo }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (code) => {
    onApplyPromo(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section className="promo-section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title">Katta Chegirmalar & Maxsus Takliflar 🔥</h2>
            <p className="section-desc">Bugun uchun amal qiluvchi eksklyuziv vaucherlar va chegirma kodlari</p>
          </div>
        </div>

        <div className="promo-grid">
          {PROMOTIONS.map((promo) => (
            <div
              key={promo.id}
              className="promo-card"
              style={{ background: promo.bgGradient }}
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="promo-card-bg-img"
              />

              <div>
                <span className="promo-badge">{promo.badge}</span>
                <h3 className="promo-card-title">{promo.title}</h3>
                <p className="promo-card-sub">{promo.subtitle}</p>
              </div>

              <button
                className="promo-code-btn"
                onClick={() => handleCopyCode(promo.code)}
                title="Kodni qo'llash"
              >
                {copiedCode === promo.code ? (
                  <>
                    <Check size={16} color="#059669" />
                    <span style={{ color: '#059669' }}>Qo'llandi!</span>
                  </>
                ) : (
                  <>
                    <Tag size={16} color="var(--primary)" />
                    <span>Kod: <b>{promo.code}</b></span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
