import React, { useState } from 'react';

export default function FoodDetailModal({ food, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [animations, setAnimations] = useState([]);

  if (!food) return null;

  const formattedPrice = (food.narx * quantity).toLocaleString('en-US');
  const unitPrice = food.narx.toLocaleString('en-US');

  const handleAdd = () => {
    const id = Date.now() + Math.random();
    setAnimations((prev) => [...prev, id]);

    setTimeout(() => {
      setAnimations((prev) => prev.filter((item) => item !== id));
    }, 900);

    // Bir nechta soni bilan qo'shish
    onAddToCart(food, quantity);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="food-detail-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Yopish tugmasi */}
        <button className="detail-modal-close" onClick={onClose} aria-label="Yopish">
          ✕
        </button>

        {/* Yuqori rasm qismi */}
        <div className="detail-img-wrap">
          {food.rasm ? (
            <img
              src={food.rasm}
              alt={food.nom}
              className="detail-food-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            className="detail-emoji-fallback"
            style={{ display: food.rasm ? 'none' : 'flex' }}
          >
            {food.emoji}
          </div>
        </div>

        {/* Tafsilotlar */}
        <div className="detail-body">
          <div className="detail-header">
            <div>
              <span className="detail-badge-halal">100% Halol</span>
              <h2 className="detail-title">{food.nom}</h2>
            </div>
            <div className="detail-unit-price">{unitPrice} so'm</div>
          </div>

          {/* Tavsif */}
          <p className="detail-description">{food.tavsif}</p>

          {/* Asosiy ko'rsatkichlar (vaqt, kaloriya, vazn) */}
          <div className="detail-specs-grid">
            <div className="spec-card">
              <span className="spec-icon">⏱️</span>
              <div>
                <div className="spec-label">Tayyorlanishi</div>
                <div className="spec-value">{food.vaqti || '20-25 daqiqa'}</div>
              </div>
            </div>

            <div className="spec-card">
              <span className="spec-icon">🔥</span>
              <div>
                <div className="spec-label">Energiya</div>
                <div className="spec-value">{food.kaloriya || '520 kkal'}</div>
              </div>
            </div>

            <div className="spec-card">
              <span className="spec-icon">⚖️</span>
              <div>
                <div className="spec-label">Porsiya</div>
                <div className="spec-value">{food.vazn || '350 gr'}</div>
              </div>
            </div>
          </div>

          {/* Masalliqlar tarkibi */}
          {food.tarkibi && (
            <div className="detail-ingredients-box">
              <div className="ingredients-heading">🥗 Masalliqlar tarkibi:</div>
              <p className="ingredients-text">{food.tarkibi}</p>
            </div>
          )}

          {/* Pastki qism: sonini tanlash va savatga qo'shish */}
          <div className="detail-footer">
            <div className="detail-stepper">
              <button
                className="detail-step-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Kamaytirish"
              >
                -
              </button>
              <span className="detail-quantity">{quantity}</span>
              <button
                className="detail-step-btn"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Ko'paytirish"
              >
                +
              </button>
            </div>

            <div className="detail-add-btn-wrapper">
              {animations.map((animId) => (
                <span key={animId} className="plus-one-float" style={{ top: '-24px' }}>
                  +{quantity}
                </span>
              ))}

              <button className="detail-add-cart-btn" onClick={handleAdd}>
                <span>Savatga qo'shish</span>
                <span className="detail-total-pill">{formattedPrice} so'm</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
