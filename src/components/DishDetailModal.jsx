import React, { useState } from 'react';
import { X, Star, Clock, ShieldCheck, Plus, Minus, ShoppingBag, Check } from 'lucide-react';

export default function DishDetailModal({ dish, isOpen, onClose, onAddToCart }) {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !dish) return null;

  const toggleAddon = (addon) => {
    if (selectedAddons.find((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.price, 0);
  const singleUnitPrice = dish.price + addonsTotal;
  const totalPrice = singleUnitPrice * quantity;

  const handleAddToCart = () => {
    onAddToCart({
      ...dish,
      selectedAddons,
      cartItemId: `${dish.id}-${selectedAddons.map((a) => a.id).sort().join('_')}`,
      unitPrice: singleUnitPrice,
      quantity,
    });
    setSelectedAddons([]);
    setQuantity(1);
    onClose();
  };

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="dish-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-floating"
          onClick={onClose}
          aria-label="Yopish"
        >
          <X size={20} />
        </button>

        <div className="dish-modal-img-wrap">
          <img src={dish.image} alt={dish.name} className="dish-modal-img" />
        </div>

        <div className="dish-modal-body">
          <div className="dish-modal-header">
            <span className="dish-restaurant-name">{dish.restaurant}</span>
            <h2 className="dish-modal-title">{dish.name}</h2>

            <div className="dish-modal-tags">
              {dish.isHalal && (
                <span className="modal-badge halal">
                  <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  100% Halol
                </span>
              )}
              <span className="modal-badge">
                <Clock size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                {dish.prepTime}
              </span>
              <span className="modal-badge">
                <Star size={13} fill="#F59E0B" color="#F59E0B" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                {dish.rating} ({dish.reviewsCount} sharhlar)
              </span>
              <span className="modal-badge">{dish.calories}</span>
            </div>
          </div>

          <p className="dish-modal-desc">{dish.description}</p>

          {/* Qo'shimchalar bo'limi */}
          {dish.addons && dish.addons.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h4 className="addons-section-title">
                Qo'shimcha masalliq yoki sous qo'shish:
              </h4>

              {dish.addons.map((addon) => {
                const isChecked = selectedAddons.some((a) => a.id === addon.id);
                return (
                  <div
                    key={addon.id}
                    className={`addon-row-box ${isChecked ? 'checked' : ''}`}
                    onClick={() => toggleAddon(addon)}
                  >
                    <div className="addon-left">
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '4px',
                          border: isChecked ? '2px solid var(--primary)' : '2px solid #CBD5E1',
                          background: isChecked ? 'var(--primary)' : 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                        }}
                      >
                        {isChecked && <Check size={14} />}
                      </div>
                      <span>{addon.name}</span>
                    </div>

                    <span className="addon-price">
                      +{addon.price.toLocaleString('uz-UZ')} so'm
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pastki qism: Soni va Savatga qo'shish */}
          <div className="dish-modal-footer">
            <div className="quantity-stepper" style={{ border: '1.5px solid var(--border-color)', padding: '2px' }}>
              <button
                className="stepper-btn"
                style={{ width: '36px', height: '36px' }}
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus size={16} />
              </button>
              <span className="stepper-val" style={{ padding: '0 16px', fontSize: '1rem' }}>
                {quantity}
              </span>
              <button
                className="stepper-btn"
                style={{ width: '36px', height: '36px' }}
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus size={16} />
              </button>
            </div>

            <button className="modal-add-cart-btn" onClick={handleAddToCart}>
              <ShoppingBag size={20} />
              <span>Savatga qo'shish • {totalPrice.toLocaleString('uz-UZ')} so'm</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
