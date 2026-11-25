import React from 'react';
import {
  Search,
  Sparkles,
  Zap,
  Star,
  Clock,
  Store,
  Users,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export default function HeroBanner({ searchTerm, setSearchTerm, onSelectQuickTag }) {
  const quickTags = ['Palov', 'Lavash', 'Pitsa', 'Shashlik', 'Manti', 'Chizkeyk'];

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          <div className="hero-glow-blob"></div>

          {/* Chap Qism: Matn va Qidiruv */}
          <div className="hero-content">
            <div className="hero-tag">
              <Sparkles size={16} />
              <span>O'zbekistondagi №1 Tezkor Yetkazish Xizmati</span>
            </div>

            <h1 className="hero-title">
              Sevimli taomlaringiz <span className="highlight-orange">30 daqiqada</span> eshagingiz oldida! 🚀
            </h1>

            <p className="hero-desc">
              Toshkentning 150+ dan ortiq eng sara milliy oshxonalari, xushbo'y go'shtli shashliklari va zamonaviy restoranlaridan issiq taomlarni uyingizga buyurtma bering.
            </p>

            {/* Tezkor qidiruv */}
            <div className="hero-quick-search">
              <Search size={20} color="var(--text-light)" style={{ marginRight: '10px' }} />
              <input
                type="text"
                placeholder="Bugun nima yegingiz kelyapti? (masalan, Choyxona Palov)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="hero-search-btn">
                <span>Topish</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Ommabop teglari */}
            <div className="hero-popular-tags">
              <span className="hero-popular-label">Ko'p qidiriladigan:</span>
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  className="hero-chip"
                  onClick={() => onSelectQuickTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* O'ng Qism: Vizual Rasm va Suzuvchi Vidjetlar */}
          <div className="hero-visual-wrap">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80"
              alt="Tez Taom Lazzatli Taomlar"
              className="hero-food-main-img"
            />

            {/* Suzuvchi Tezkorlik belgisi */}
            <div className="floating-badge badge-top">
              <div className="floating-icon-box orange">
                <Zap size={20} />
              </div>
              <div>
                <div className="floating-badge-title">30 Daqiqada</div>
                <div className="floating-badge-sub">Kafolatlangan yetkazish</div>
              </div>
            </div>

            {/* Suzuvchi Reyting belgisi */}
            <div className="floating-badge badge-bottom">
              <div className="floating-icon-box green">
                <Star size={20} fill="#059669" />
              </div>
              <div>
                <div className="floating-badge-title">4.9 / 5.0 Reyting</div>
                <div className="floating-badge-sub">10,000+ Mamnun mijozlar</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 ta Asosiy Ko'rsatkichlar Chizig'i */}
        <div className="stats-strip">
          <div className="stat-item-box">
            <div className="stat-icon">
              <Clock size={22} />
            </div>
            <div>
              <div className="stat-number">25-30 daqiqa</div>
              <div className="stat-title">O'rtacha yetkazish vaqti</div>
            </div>
          </div>

          <div className="stat-item-box">
            <div className="stat-icon">
              <Store size={22} />
            </div>
            <div>
              <div className="stat-number">150+ Oshxona</div>
              <div className="stat-title">Eng sara restoranlar</div>
            </div>
          </div>

          <div className="stat-item-box">
            <div className="stat-icon">
              <Users size={22} />
            </div>
            <div>
              <div className="stat-number">10 000+</div>
              <div className="stat-title">Kunlik baxtli mijozlar</div>
            </div>
          </div>

          <div className="stat-item-box">
            <div className="stat-icon">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="stat-number">100% Halol</div>
              <div className="stat-title">Sertifikatlangan sifat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
