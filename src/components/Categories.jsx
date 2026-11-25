import React from 'react';

export default function Categories({ categories, activeCategory, onSelectCategory }) {
  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-heading">Kategoriyalar</h2>
        <div className="categories-list">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`category-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <span className="category-emoji">{cat.emoji}</span>
                <span>{cat.nom}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
