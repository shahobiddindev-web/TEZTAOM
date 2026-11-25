import React from 'react';
import { Star, Clock, Bike, ShieldCheck } from 'lucide-react';
import { RESTAURANTS } from '../data/foodData';

export default function RestaurantList({ onSelectRestaurant }) {
  return (
    <section className="restaurants-section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title">Eng Mashhur Restoran & Oshxonalar 🏆</h2>
            <p className="section-desc">Mijozlarimiz tomonidan eng yuqori baholangan ishonchli hamkorlarimiz</p>
          </div>
        </div>

        <div className="restaurants-grid">
          {RESTAURANTS.map((rest) => (
            <div
              key={rest.id}
              className="restaurant-card"
              onClick={() => onSelectRestaurant(rest.name)}
              title={`${rest.name} taomlarini ko'rish`}
            >
              <div className="rest-img-wrap">
                <img src={rest.image} alt={rest.name} className="rest-img" loading="lazy" />
                <span className="rest-tag">{rest.tag}</span>
              </div>

              <div className="rest-body">
                <h3 className="rest-name">{rest.name}</h3>
                <p className="rest-category">{rest.category}</p>

                <div className="rest-meta">
                  <div className="rest-rating-badge">
                    <Star size={13} fill="#B45309" color="#B45309" />
                    <span>{rest.rating}</span>
                    <span style={{ color: '#78350F', fontWeight: 500 }}>({rest.reviews})</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748B' }}>
                    <Clock size={13} />
                    <span>{rest.deliveryTime}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--primary)', fontWeight: 700 }}>
                    <Bike size={13} />
                    <span>{rest.deliveryFee.toLocaleString('uz-UZ')} so'm</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
