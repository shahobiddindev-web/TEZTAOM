import React from 'react';
import { ArrowUpDown, Star, Flame, Percent, ShieldCheck } from 'lucide-react';

export default function FilterBar({
  sortBy,
  setSortBy,
  onlyTopRated,
  setOnlyTopRated,
  onlyPopular,
  setOnlyPopular,
  onlyDiscounts,
  setOnlyDiscounts,
  onlyHalal,
  setOnlyHalal,
  totalResults,
}) {
  return (
    <div className="container">
      <div className="filter-bar">
        {/* Chap qism: Tezkor filter tugmalari */}
        <div className="filter-left-tags">
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#475569', marginRight: '4px' }}>
            Filtrlar ({totalResults} taom):
          </span>

          <button
            className={`filter-chip-btn ${onlyTopRated ? 'active' : ''}`}
            onClick={() => setOnlyTopRated(!onlyTopRated)}
          >
            <Star size={14} fill={onlyTopRated ? 'var(--primary)' : 'none'} />
            Reyting 4.8+
          </button>

          <button
            className={`filter-chip-btn ${onlyPopular ? 'active' : ''}`}
            onClick={() => setOnlyPopular(!onlyPopular)}
          >
            <Flame size={14} />
            Eng ommabop
          </button>

          <button
            className={`filter-chip-btn ${onlyDiscounts ? 'active' : ''}`}
            onClick={() => setOnlyDiscounts(!onlyDiscounts)}
          >
            <Percent size={14} />
            Chegirmalilar
          </button>

          <button
            className={`filter-chip-btn ${onlyHalal ? 'active' : ''}`}
            onClick={() => setOnlyHalal(!onlyHalal)}
          >
            <ShieldCheck size={14} />
            100% Halol
          </button>
        </div>

        {/* O'ng qism: Saralash (Sort) tanlagich */}
        <div className="sort-select-wrap">
          <label htmlFor="sort-select" className="sort-label">
            <ArrowUpDown size={15} />
            Saralash:
          </label>
          <select
            id="sort-select"
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Tavsiya etilgan</option>
            <option value="price-asc">Narx: Arzondan qimmatga</option>
            <option value="price-desc">Narx: Qimmatdan arzonga</option>
            <option value="rating-desc">Eng yuqori baholangan</option>
            <option value="time-asc">Tez tayyorlanadigan</option>
          </select>
        </div>
      </div>
    </div>
  );
}
