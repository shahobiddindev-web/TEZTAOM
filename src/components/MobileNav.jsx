import React from 'react';
import { Home, UtensilsCrossed, Heart, ShoppingBag, MapPin } from 'lucide-react';

export default function MobileNav({
  activeTab,
  setActiveTab,
  cartCount,
  favoritesCount,
  onOpenCart,
  onOpenFavorites,
  onOpenLocationModal,
}) {
  return (
    <div className="mobile-bottom-nav">
      <button
        className={`mobile-nav-btn ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => {
          setActiveTab('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <Home size={20} />
        <span>Bosh sahifa</span>
      </button>

      <button
        className="mobile-nav-btn"
        onClick={() => {
          const el = document.querySelector('.category-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <UtensilsCrossed size={20} />
        <span>Menyu</span>
      </button>

      <button
        className="mobile-nav-btn"
        onClick={onOpenFavorites}
      >
        <Heart size={20} />
        <span>Sevimlilar</span>
        {favoritesCount > 0 && <span className="badge-count" style={{ top: '-2px', right: '12px' }}>{favoritesCount}</span>}
      </button>

      <button
        className="mobile-nav-btn"
        onClick={onOpenCart}
      >
        <ShoppingBag size={20} />
        <span>Savat</span>
        {cartCount > 0 && <span className="badge-count" style={{ top: '-2px', right: '12px' }}>{cartCount}</span>}
      </button>

      <button
        className="mobile-nav-btn"
        onClick={onOpenLocationModal}
      >
        <MapPin size={20} />
        <span>Manzil</span>
      </button>
    </div>
  );
}
