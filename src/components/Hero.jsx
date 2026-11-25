import React, { useState } from 'react';

export default function Hero({ onOrderClick }) {
  const [animations, setAnimations] = useState([]);

  const handleOrderClick = () => {
    const id = Date.now() + Math.random();
    setAnimations((prev) => [...prev, id]);

    setTimeout(() => {
      setAnimations((prev) => prev.filter((item) => item !== id));
    }, 900);

    onOrderClick();
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">🚀 Tezkor va ishonchli yetkazib berish</span>
          <h1 className="hero-title">
            Sevimli taomlaringizni <span className="hero-highlight">issiq va tez</span> yetkazib beramiz!
          </h1>
          <p className="hero-subtitle">
            Eng mazali milliy taomlar, tandir somsa, shashlik va pitsalarni 30 daqiqa ichida yetkazib beramiz.
          </p>

          <div className="hero-btn-wrapper">
            {animations.map((animId) => (
              <span key={animId} className="plus-one-float hero-plus-one">
                +1
              </span>
            ))}
            <button className="order-btn" onClick={handleOrderClick}>
              Buyurtma berish
            </button>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-emoji-circle">
            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80"
              alt="Tandir Somsa va Milliy Taomlar"
              className="hero-dish-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
