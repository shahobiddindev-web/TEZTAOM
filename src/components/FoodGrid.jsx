import React from 'react';
import FoodCard from './FoodCard';

export default function FoodGrid({ taomlar, onAddToCart, onSelectFood, cartMap = {} }) {
  return (
    <section className="food-grid-section" id="menu-section">
      <div className="container">
        <div className="grid-header-row">
          <div>
            <h2 className="section-heading" style={{ marginBottom: '4px' }}>Barcha Taomlar</h2>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '20px' }}>
              Batafsil ma'lumot olish uchun istalgan taom ustiga bosing 💡
            </p>
          </div>
        </div>

        {taomlar.length === 0 ? (
          <p className="no-food-text">Ushbu toifada hozircha taomlar mavjud emas.</p>
        ) : (
          <div className="food-grid">
            {taomlar.map((taom) => (
              <FoodCard
                key={taom.id}
                food={taom}
                onAddToCart={onAddToCart}
                onSelectFood={onSelectFood}
                cartCount={cartMap[taom.id] || 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
