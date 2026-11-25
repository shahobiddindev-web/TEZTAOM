import React from 'react';
import { MapPin, X, Check } from 'lucide-react';

const LOCATIONS = [
  'Toshkent, Chilonzor 9-mavze',
  'Toshkent, Yunusobod 4-mavze',
  'Toshkent, Mirzo Ulug\'bek, Buyuk Ipak Yo\'li',
  'Toshkent, Mirobod tumani, Oybek',
  'Toshkent, Shayxontohur, Chorsu',
  'Toshkent, Yakkasaroy, Shota Rustaveli',
  'Toshkent, Sergeli 7-mavze',
];

export default function LocationModal({ isOpen, onClose, currentLocation, onSelectLocation }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  if (!isOpen) return null;

  const filteredLocations = LOCATIONS.filter((loc) =>
    loc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div
        className="dish-modal-content"
        style={{ maxWidth: '480px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-drawer-header">
          <div className="cart-drawer-title">
            <MapPin size={22} className="location-icon" />
            Yetkazib berish manzilini tanlang
          </div>
          <button className="cart-drawer-close" onClick={onClose} aria-label="Yopish">
            <X size={18} />
          </button>
        </div>

        <div className="location-modal-body">
          <input
            type="text"
            className="location-input-field"
            placeholder="Ko'cha yoki xonadon raqamini kiriting..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />

          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748B', marginBottom: '10px' }}>
            Ommabop manzillar:
          </div>

          <div className="popular-locations-list">
            {filteredLocations.map((loc) => {
              const isSelected = loc === currentLocation;
              return (
                <button
                  key={loc}
                  className="location-option-btn"
                  onClick={() => {
                    onSelectLocation(loc);
                    onClose();
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color={isSelected ? 'var(--primary)' : '#94A3B8'} />
                    {loc}
                  </span>
                  {isSelected && <Check size={16} color="var(--primary)" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
