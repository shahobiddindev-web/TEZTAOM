import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Tag,
  AlertCircle,
} from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  promoCode,
  setPromoCode,
  appliedPromo,
  setAppliedPromo,
  deliveryFee = 12000,
  freeDeliveryThreshold = 75000,
}) {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  // Jami hisob-kitob
  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.type === 'percent') {
      discountAmount = Math.round((subtotal * appliedPromo.value) / 100);
    } else if (appliedPromo.type === 'fixed') {
      discountAmount = appliedPromo.value;
    }
  }

  const effectiveDeliveryFee = subtotal >= freeDeliveryThreshold || subtotal === 0 ? 0 : deliveryFee;
  const grandTotal = Math.max(0, subtotal - discountAmount + effectiveDeliveryFee);

  const handleApplyPromo = (codeToApply) => {
    const code = (codeToApply || promoInput).trim().toUpperCase();
    if (!code) return;

    if (code === 'TEZTAOM') {
      setAppliedPromo({ code: 'TEZTAOM', value: 15, type: 'percent', label: '15% Chegirma' });
      setPromoError('');
    } else if (code === 'PITSA25') {
      setAppliedPromo({ code: 'PITSA25', value: 25, type: 'percent', label: 'Pitsalarga 25% chegirma' });
      setPromoError('');
    } else if (code === 'YANGI20') {
      setAppliedPromo({ code: 'YANGI20', value: 20000, type: 'fixed', label: '20 000 so\'m chegirma' });
      setPromoError('');
    } else if (code === 'BEPULYETKAZISH') {
      setAppliedPromo({ code: 'BEPULYETKAZISH', value: 0, type: 'free_delivery', label: 'Bepul yetkazish' });
      setPromoError('');
    } else {
      setPromoError('Bunday promokod mavjud emas yoki muddati o\'tgan');
    }
    setPromoInput('');
  };

  return (
    <>
      <div
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />

      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        {/* Sarlavha */}
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <ShoppingBag size={22} color="var(--primary)" />
            <span>Savatingiz ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})</span>
          </div>
          <button className="cart-drawer-close" onClick={onClose} aria-label="Yopish">
            <X size={18} />
          </button>
        </div>

        {/* Savat Tanasi */}
        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="cart-empty-icon">
                <ShoppingBag size={38} />
              </div>
              <h3 className="cart-empty-title">Savatingiz hozircha bo'sh</h3>
              <p style={{ fontSize: '0.85rem', marginBottom: '20px' }}>
                Menyudan sevimli milliy va zamonaviy taomlaringizni tanlang va rohatlaning!
              </p>
              <button
                className="hero-search-btn"
                style={{ padding: '10px 24px' }}
                onClick={onClose}
              >
                Menyuga o'tish
              </button>
            </div>
          ) : (
            <>
              {/* Bepul yetkazish progressi */}
              {subtotal < freeDeliveryThreshold && (
                <div
                  style={{
                    background: '#FEF3C7',
                    border: '1px solid #FDE68A',
                    borderRadius: '12px',
                    padding: '10px 14px',
                    fontSize: '0.82rem',
                    color: '#92400E',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Sparkles size={16} />
                  <span>
                    Yana <b>{(freeDeliveryThreshold - subtotal).toLocaleString('uz-UZ')} so'm</b>lik taom qo'shing va <b>bepul yetkazish</b>ga ega bo'ling!
                  </span>
                </div>
              )}

              {/* Mahsulotlar ro'yxati */}
              {cartItems.map((item) => (
                <div key={item.cartItemId} className="cart-item-card">
                  <img src={item.image} alt={item.name} className="cart-item-img" />

                  <div className="cart-item-info">
                    <div>
                      <h4 className="cart-item-name">{item.name}</h4>
                      {item.selectedAddons && item.selectedAddons.length > 0 && (
                        <p className="cart-item-addon-tag">
                          + {item.selectedAddons.map((a) => a.name).join(', ')}
                        </p>
                      )}
                    </div>

                    <div className="cart-item-bottom">
                      <span className="cart-item-price">
                        {(item.unitPrice * item.quantity).toLocaleString('uz-UZ')} so'm
                      </span>

                      <div className="quantity-stepper">
                        <button
                          className="stepper-btn"
                          onClick={() => {
                            if (item.quantity === 1) {
                              onRemoveItem(item.cartItemId);
                            } else {
                              onUpdateQuantity(item.cartItemId, item.quantity - 1);
                            }
                          }}
                          aria-label="Kamaytirish"
                        >
                          {item.quantity === 1 ? <Trash2 size={13} color="#EF4444" /> : <Minus size={13} />}
                        </button>

                        <span className="stepper-val">{item.quantity}</span>

                        <button
                          className="stepper-btn"
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          aria-label="Ko'paytirish"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Savat Pastki Qismi (Hisob-kitob va Buyurtma tugmasi) */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            {/* Promokod kiritish */}
            <div className="promo-input-row">
              <input
                type="text"
                className="promo-input"
                placeholder="Promokod (masalan: TEZTAOM)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
              />
              <button className="promo-apply-btn" onClick={() => handleApplyPromo()}>
                Qo'llash
              </button>
            </div>

            {promoError && (
              <p style={{ color: '#EF4444', fontSize: '0.75rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <AlertCircle size={12} />
                {promoError}
              </p>
            )}

            {appliedPromo && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#ECFDF5',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  marginBottom: '12px',
                  fontSize: '0.8rem',
                  color: '#065F46',
                  fontWeight: 600,
                }}
              >
                <span>🏷️ Kod faol: {appliedPromo.code} ({appliedPromo.label})</span>
                <button
                  onClick={() => setAppliedPromo(null)}
                  style={{ color: '#EF4444', fontWeight: 700 }}
                >
                  Bekor qilish
                </button>
              </div>
            )}

            {/* Hisob yig'indisi */}
            <div className="cart-summary-line">
              <span>Taomlar narxi:</span>
              <span>{subtotal.toLocaleString('uz-UZ')} so'm</span>
            </div>

            {discountAmount > 0 && (
              <div className="cart-summary-line discount">
                <span>Chegirma:</span>
                <span>-{discountAmount.toLocaleString('uz-UZ')} so'm</span>
              </div>
            )}

            <div className="cart-summary-line">
              <span>Yetkazib berish xizmati:</span>
              <span>
                {effectiveDeliveryFee === 0 ? (
                  <b style={{ color: '#059669' }}>BEPUL</b>
                ) : (
                  `${effectiveDeliveryFee.toLocaleString('uz-UZ')} so'm`
                )}
              </span>
            </div>

            <div className="cart-summary-total">
              <span>Jami to'lov:</span>
              <span style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>
                {grandTotal.toLocaleString('uz-UZ')} so'm
              </span>
            </div>

            <button className="checkout-btn" onClick={onCheckout}>
              <span>Buyurtmani Rasmiylashtirish</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
