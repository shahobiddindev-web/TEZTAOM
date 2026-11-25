import React from 'react';
import {
  UtensilsCrossed,
  Soup,
  Sandwich,
  Pizza,
  Flame,
  Salad,
  Cake,
  CupSoda,
} from 'lucide-react';
import { CATEGORIES } from '../data/foodData';

const iconMap = {
  UtensilsCrossed: <UtensilsCrossed size={18} />,
  Soup: <Soup size={18} />,
  Sandwich: <Sandwich size={18} />,
  Pizza: <Pizza size={18} />,
  Flame: <Flame size={18} />,
  Salad: <Salad size={18} />,
  Cake: <Cake size={18} />,
  CupSoda: <CupSoda size={18} />,
};

export default function CategoryFilter({ selectedCategory, onSelectCategory }) {
  return (
    <section className="category-section">
      <div className="container">
        <div className="section-head" style={{ marginBottom: '14px' }}>
          <div>
            <h2 className="section-title">Taomlar Menyusi</h2>
            <p className="section-desc">O'zingizga ma'qul toifani tanlang va sevimli taomingizga buyurtma bering</p>
          </div>
        </div>

        <div className="category-scroll-list">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`category-pill-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <span className="cat-icon-wrap">{iconMap[cat.icon]}</span>
                <span>{cat.name}</span>
                <span className="cat-count-badge">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
