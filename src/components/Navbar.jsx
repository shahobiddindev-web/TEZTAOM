import React from 'react';

export default function Navbar({ cartCount = 0, onOpenCart, theme = 'light', onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-icon">🍲</span>
          <span className="logo-text">
            TEZ<span className="logo-highlight">TAOM</span>
          </span>
        </div>

        {/* O'ng qism: Rejim tugmasi va Savat */}
        <div className="navbar-actions">
          {/* Kunduzgi / Tungi rejim tugmasi */}
          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? "Kunduzgi rejimga o'tish" : "Tungi rejimga o'tish"}
            aria-label="Rejimni almashtirish"
          >
            <span className="theme-toggle-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span className="theme-toggle-label">
              {theme === 'dark' ? 'Kunduzgi' : 'Tungi'}
            </span>
          </button>

          {/* Savat tugmasi */}
          <button className="cart-btn" onClick={onOpenCart}>
            <span className="cart-icon">🛒</span>
            <span>Savat</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
