import React, { useState } from 'react';

export default function FoodCard({ food, onAddToCart, onSelectFood, cartCount = 0 }) {
  // Narxni skrinshotdagi kabi vergul bilan formatlash (masalan 12,000 so'm)
  const formattedPrice = food.narx.toLocaleString('en-US');

  // Tugma bosilganda +1 animatsiyalari
  const [animations, setAnimations] = useState([]);

  const handleButtonClick = (e) => {
    // Karta bosilishi (modal ochilishi) hodisasini to'xtatish
    e.stopPropagation();

    const id = Date.now() + Math.random();
    setAnimations((prev) => [...prev, id]);

    setTimeout(() => {
      setAnimations((prev) => prev.filter((item) => item !== id));
    }, 900);

    onAddToCart(food);
  };

  return (
    <div
      className="food-card"
      onClick={() => onSelectFood(food)}
      title="Batafsil ma'lumotni ko'rish uchun bosing"
    >
      {/* Dumaloq fonli haqiqiy taom rasmi (skrinshotdagi kabi) */}
      <div className="food-img-circle">
        {food.rasm ? (
          <>
            <img
              src={food.rasm}
              alt={food.nom}
              className="food-img"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="food-emoji-fallback" style={{ display: 'none' }}>
              {food.emoji}
            </div>
          </>
        ) : (
          <span className="food-emoji">{food.emoji}</span>
        )}
      </div>

      {/* Taom ma'lumotlari */}
      <div className="food-info">
        <h3 className="food-name">{food.nom}</h3>
        <p className="food-price">{formattedPrice} so'm</p>

        {/* Savatga tugmasi va +1 animatsiyasi */}
        <div className="btn-wrapper" onClick={(e) => e.stopPropagation()}>
          {animations.map((animId) => (
            <span key={animId} className="plus-one-float">
              +1
            </span>
          ))}

          <button
            className="add-to-cart-btn"
            onClick={handleButtonClick}
            aria-label={`${food.nom} savatga qo'shish`}
          >
            Savatga {cartCount > 0 && <span className="in-card-count">({cartCount})</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
