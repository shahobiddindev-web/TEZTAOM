import React from 'react';
import { Bike, ShieldCheck, MapPin, CreditCard } from 'lucide-react';
import { ADVANTAGES } from '../data/foodData';

const iconMap = {
  Bike: <Bike size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
  MapPin: <MapPin size={28} />,
  CreditCard: <CreditCard size={28} />,
};

export default function Features() {
  return (
    <section className="advantages-section">
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center', display: 'block', marginBottom: '36px' }}>
          <h2 className="section-title">Nega Aynan TEZ TAOM? 🌟</h2>
          <p className="section-desc">Biz sizga nafaqat mazali taom, balki eng sifatli xizmatni taqdim etamiz</p>
        </div>

        <div className="adv-grid">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="adv-card">
              <div className="adv-icon-wrap">
                {iconMap[adv.icon]}
              </div>
              <h3 className="adv-card-title">{adv.title}</h3>
              <p className="adv-card-desc">{adv.description}</p>
              <span className="adv-card-badge">{adv.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
