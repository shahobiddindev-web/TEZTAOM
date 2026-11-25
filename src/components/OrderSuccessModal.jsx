import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, MapPin, Bike, Phone, X, Sparkles } from 'lucide-react';

export default function OrderSuccessModal({ isOpen, onClose, orderDetails, onNewOrder }) {
  const [currentStep, setCurrentStep] = useState(1);

  // Simulyatsiya qilingan buyurtma jarayoni qadamlari
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(1);
      return;
    }

    const timer1 = setTimeout(() => setCurrentStep(2), 2500);
    const timer2 = setTimeout(() => setCurrentStep(3), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const steps = [
    { id: 1, title: 'Buyurtma qabul qilindi', desc: 'Restoranga yuborildi' },
    { id: 2, title: 'Oshxonada tayyorlanmoqda', desc: 'Oshpazlar yangi mahsulotlardan pishirmoqda' },
    { id: 3, title: 'Kuryer yo\'lda', desc: 'Termoboksda issiqligicha olib kelinmoqda' },
    { id: 4, title: 'Yetkazib berildi', desc: 'Yoqimli ishtaha!' },
  ];

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="order-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-floating" onClick={onClose} aria-label="Yopish">
          <X size={18} />
        </button>

        <div className="order-success-icon-wrap">
          <CheckCircle2 size={42} />
        </div>

        <h2 className="order-modal-title">Buyurtmangiz qabul qilindi! 🎉</h2>
        <p className="order-modal-sub">
          Buyurtma raqami: <b>#TT-{Math.floor(10000 + Math.random() * 90000)}</b>
        </p>

        <div className="order-tracking-card">
          <div className="tracking-eta-box">
            <div>
              <span className="eta-label">Kutilayotgan yetkazish vaqti</span>
              <div className="eta-time">25-30 daqiqa ichida</div>
            </div>
            <div
              style={{
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                padding: '8px 12px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              <Clock size={16} />
              <span>Tezkor</span>
            </div>
          </div>

          {/* Jonli Treking Qadamlari */}
          <div className="tracking-steps">
            {steps.map((st) => {
              const isDone = currentStep > st.id;
              const isActive = currentStep === st.id;
              const isInactive = currentStep < st.id;

              return (
                <div
                  key={st.id}
                  className={`tracking-step-item ${isDone ? 'done' : isActive ? 'active' : 'inactive'}`}
                >
                  <div className="step-marker">
                    {isDone ? '✓' : st.id}
                  </div>
                  <div>
                    <div className="step-name">{st.title}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{st.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Kuryer ma'lumotlari */}
          <div
            style={{
              marginTop: '20px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                }}
              >
                <Bike size={22} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 800 }}>Sardor Rahimov</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Tez Taom Kuryeri (Honda Dio)</div>
              </div>
            </div>

            <a
              href="tel:+998901234567"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#10B981',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Kuryerga qo'ng'iroq qilish"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <button
          className="hero-search-btn"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => {
            onNewOrder();
            onClose();
          }}
        >
          Yana yangi taom tanlash
        </button>
      </div>
    </div>
  );
}
