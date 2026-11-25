import React from 'react';
import { Star, Clock, Heart, Plus, Check } from 'lucide-react';

export default function DishCard({
  dish,
  onOpenDetail,
  onAddToCart,
  isInCart,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="dish-card">
      {/* Rasm va Vidjetlar */}
      <div className="dish-img-wrap" onClick={() => onOpenDetail(dish)}>
        <img src={dish.image} alt={dish.name} className="dish-img" loading="lazy" />

        {/* Tepagi nishonlar */}
        <div className="dish-badges-layer">
          <div style={{ display: 'flex', gap: '6px' }}>
            {dish.discount && (
              <span className="dish-badge-discount">{dish.discount}</span>
            )}
            {dish.isPopular && (
              <span className="dish-badge-popular">TOP</span>
            )}
          </div>

          <button
            className={`dish-like-btn ${isFavorite ? 'liked' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(dish.id);
            }}
            title={isFavorite ? "Sevimlilardan o'chirish" : "Sevimlilarga qo'shish"}
            aria-label="Sevimlilar"
          >
            <Heart size={16} fill={isFavorite ? '#EF4444' : 'none'} />
          </button>
        </div>

        {/* Tayyorlanish vaqti */}
        <div className="dish-prep-time">
          <Clock size={12} />
          <span>{dish.prepTime}</span>
        </div>
      </div>

      {/* Kontent */}
      <div className="dish-content">
        <span className="dish-restaurant-name">{dish.restaurant}</span>

        <h3 className="dish-title" onClick={() => onOpenDetail(dish)}>
          {dish.name}
        </h3>

        <p className="dish-desc-short">{dish.description}</p>

        {/* Reyting va kaloriya */}
        <div className="dish-meta-info">
          <div className="dish-rating">
            <Star size={14} fill="#F59E0B" />
            <span>{dish.rating}</span>
            <span style={{ color: '#94A3B8', fontWeight: 500 }}>({dish.reviewsCount})</span>
          </div>
          <span>•</span>
          <span>{dish.calories}</span>
        </div>

        {/* Pastki qism: Narx va Savatga qo'shish */}
        <div className="dish-footer-row">
          <div className="dish-price-box">
            <span className="dish-price">
              {dish.price.toLocaleString('uz-UZ')} so'm
            </span>
            {dish.oldPrice && (
              <span className="dish-old-price">
                {dish.oldPrice.toLocaleString('uz-UZ')} so'm
              </span>
            )}
          </div>

          <button
            className={`dish-add-btn ${isInCart ? 'in-cart' : ''}`}
            onClick={() => onAddToCart(dish)}
            title={isInCart ? "Savatga yana qo'shish" : "Savatga qo'shish"}
            aria-label="Savatga qo'shish"
          >
            {isInCart ? <Check size={20} /> : <Plus size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}
