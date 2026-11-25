import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/foodData';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title">Mijozlarimiz Nima Deyishadi? 💬</h2>
            <p className="section-desc">Biz har kuni minglab mijozlarga unutilmas ta'mni ulashamiz</p>
          </div>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div>
                <div className="testimonial-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="testimonial-text">"{item.comment}"</p>
              </div>

              <div className="testimonial-author">
                <img src={item.avatar} alt={item.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
