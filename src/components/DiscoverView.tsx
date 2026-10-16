import React, { useState } from 'react';
import {
  HERO_BANNER_IMAGE,
  LOOKBOOK_LOOKS,
  PRODUCTS,
} from '../data/atelierData';
import { Category, Product, LookbookItem } from '../types';

interface DiscoverViewProps {
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, event: React.MouseEvent) => void;
  onToggleFavorite: (productId: string, event: React.MouseEvent) => void;
  isFavorited: (productId: string) => boolean;
  onOpenJournal: () => void;
  onOpenCatalog: (filterCategory?: Category) => void;
  onSelectLook: (look: LookbookItem) => void;
  recentAddedId: string | null;
}

export const DiscoverView: React.FC<DiscoverViewProps> = ({
  onSelectProduct,
  onQuickAdd,
  onToggleFavorite,
  isFavorited,
  onOpenJournal,
  onOpenCatalog,
  onSelectLook,
  recentAddedId,
}) => {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filterTabs: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Pieces' },
    { key: 'outerwear', label: 'Outerwear' },
    { key: 'knitwear', label: 'Knitwear' },
    { key: 'trousers', label: 'Trousers' },
    { key: 'accessories', label: 'Accessories' },
  ];

  // Filter products based on active category
  const filteredProducts =
    activeFilter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category === activeFilter);

  const scrollToCapsule = () => {
    const el = document.getElementById('capsule-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full selection:bg-[#e9e8e5]">
      {/* 1. Seasonal Editorial Hero Banner */}
      <section className="relative w-full overflow-hidden bg-[#efeeeb]">
        <div className="relative w-full aspect-[4/5] max-h-[580px] overflow-hidden">
          <img
            src={HERO_BANNER_IMAGE}
            alt="Editorial portrait of model in oversized charcoal coat and raw ecru wool scarf"
            className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
            loading="eager"
            onError={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#2f312f';
            }}
          />
          {/* Ambient Scrim Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1a]/85 via-[#1a1c1a]/25 to-transparent" />

          {/* Editorial Overlay */}
          <div className="absolute inset-0 p-5 flex flex-col justify-between z-10 pointer-events-none">
            {/* Top row */}
            <div className="flex items-center justify-between pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#1a1c1a] font-sans text-[10px] font-semibold uppercase tracking-widest shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8c4e36] animate-pulse" />
                Edition 09 / Autumn
              </span>
              <span className="font-sans text-[10px] text-white/80 tracking-widest uppercase">
                Maison Atelier
              </span>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col space-y-2 pb-1 pointer-events-auto">
              <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#faf9f6]/90">
                Preview Collection
              </p>
              <h1 className="font-serif text-[28px] sm:text-3xl md:text-4xl text-white font-normal leading-[1.15]">
                Quiet Forms &amp;
                <br />
                <span className="italic font-normal">Raw Wool</span>
              </h1>
              <p className="font-sans text-xs text-[#e9e8e5]/90 max-w-[280px] pt-0.5 leading-relaxed">
                Structural purity meets untreated alpine yarns in an architectural study of drape.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToCapsule}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1a1c1a] hover:bg-[#f4f3f0] active:scale-95 transition-all duration-300 shadow-md cursor-pointer group"
                >
                  <span className="font-sans text-[12px] font-semibold tracking-wider uppercase">
                    Explore Collection
                  </span>
                  <span className="material-symbols-outlined text-[17px] transition-transform duration-200 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Pills Interactive Bar */}
      <section className="w-full py-4 px-4 md:px-6 bg-[#faf9f6] sticky top-16 z-30 backdrop-blur-md border-b border-[#1a1c1a]/5">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-sans text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1a1c1a] text-white shadow-sm'
                    : 'bg-[#efeeeb] text-[#1a1c1a] hover:bg-[#e9e8e5]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Editorial Curated Horizontal Gallery Modules */}
      <section className="w-full pt-6 pb-6 flex flex-col space-y-4">
        <div className="px-4 md:px-6 flex items-baseline justify-between">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#747878] font-semibold">
              Curated Sequences
            </p>
            <h2 className="font-serif text-[22px] md:text-2xl text-[#1a1c1a] font-normal mt-0.5">
              Editions &amp; Lines
            </h2>
          </div>
          <button
            onClick={() => onOpenCatalog(activeFilter)}
            type="button"
            className="font-sans text-[11px] font-medium uppercase tracking-wider text-[#8c4e36] hover:text-[#1a1c1a] flex items-center gap-0.5 transition-colors cursor-pointer"
          >
            Index <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        {/* Horizontal Scroll Story Series */}
        <div className="w-full overflow-x-auto no-scrollbar scroll-smooth px-4 md:px-6 flex gap-4">
          {LOOKBOOK_LOOKS.map((look) => (
            <article
              key={look.id}
              onClick={() => onSelectLook(look)}
              className="flex-none w-64 flex flex-col group cursor-pointer focus:outline-none"
              tabIndex={0}
              role="button"
            >
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-[#efeeeb] shadow-sm">
                <img
                  src={look.image}
                  alt={look.altText}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1a1c1a]/10 transition-opacity group-hover:opacity-0" />
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm font-sans text-[10px] font-semibold uppercase tracking-widest text-[#1a1c1a] shadow-sm">
                    {look.lookNumber}
                  </span>
                </div>
              </div>
              <div className="pt-3 flex flex-col">
                <h3 className="font-serif text-[17px] text-[#1a1c1a] font-normal group-hover:text-[#8c4e36] transition-colors">
                  {look.title}
                </h3>
                <p className="font-sans text-[12px] text-[#747878] mt-0.5">
                  {look.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Curated Capsule 04 Section with Subtle Interactions */}
      <section className="w-full px-4 md:px-6 py-8 bg-[#f4f3f0]" id="capsule-section">
        <div className="flex flex-col space-y-1 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8c4e36]" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8c4e36] font-semibold">
              Featured Drop
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif text-[26px] md:text-3xl text-[#1a1c1a] font-normal">
              Curated Capsule 04
            </h2>
            <span className="font-sans text-[10px] text-[#747878] tracking-wider uppercase font-medium">
              {filteredProducts.length} / {PRODUCTS.length} Works
            </span>
          </div>
          <p className="font-sans text-xs text-[#747878]">
            Deliberate materiality built for trans-seasonal longevity.
          </p>
        </div>

        {/* Capsule Product Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const favorited = isFavorited(product.id);
            const isJustAdded = recentAddedId === product.id;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#1a1c1a]/5 group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full aspect-[4/5] bg-[#efeeeb] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Status micro-badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                    {product.editionBadge && (
                      <span
                        className={`px-2.5 py-1 rounded-full backdrop-blur-sm font-sans text-[10px] font-semibold uppercase tracking-wider shadow-sm ${
                          product.badgeType === 'bestseller'
                            ? 'bg-[#feae90] text-[#6f3721]'
                            : 'bg-white/90 text-[#1a1c1a]'
                        }`}
                      >
                        {product.editionBadge}
                      </span>
                    )}
                    {product.lowStock && (
                      <span className="px-2.5 py-1 rounded-full bg-[#8c4e36] text-white font-sans text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                        Low Stock
                      </span>
                    )}
                  </div>

                  {/* Quick Bookmark Favorite Button */}
                  <button
                    aria-label="Save to Wishlist"
                    onClick={(e) => onToggleFavorite(product.id, e)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1c1a] hover:text-[#8c4e36] transition-transform active:scale-75 shadow-sm z-10 cursor-pointer"
                    type="button"
                  >
                    <span
                      className={`material-symbols-outlined text-[19px] transition-colors ${
                        favorited ? 'filled text-[#8c4e36]' : ''
                      }`}
                    >
                      favorite
                    </span>
                  </button>

                  {/* Floating Quick Add Feedback Toast */}
                  <div
                    className={`absolute inset-x-3 bottom-3 py-2 px-3 bg-[#1a1c1a]/95 backdrop-blur-md rounded-lg text-white flex items-center justify-between transition-all duration-300 pointer-events-none z-20 ${
                      isJustAdded
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}
                  >
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-wider">
                      Added to Atelier Bag
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-[#feae90]">
                      check_circle
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-4 flex flex-col justify-between space-y-3 flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="font-serif text-lg text-[#1a1c1a] font-normal leading-snug group-hover:text-[#8c4e36] transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-sans text-[12px] text-[#747878] mt-0.5 line-clamp-1">
                        {product.subtitle}
                      </p>
                    </div>
                    <span className="font-sans text-sm font-medium text-[#1a1c1a] whitespace-nowrap">
                      ${product.price}
                    </span>
                  </div>

                  {/* Footer actions row */}
                  <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#1a1c1a]/5">
                    <div className="flex items-center gap-1.5">
                      {product.shades.map((shade, idx) => (
                        <span
                          key={idx}
                          style={{ backgroundColor: shade.hex }}
                          title={shade.name}
                          className="w-3.5 h-3.5 rounded-full inline-block shadow-inner ring-1 ring-black/10"
                        />
                      ))}
                      <span className="font-sans text-[10px] text-[#747878] ml-1">
                        {product.shadesLabel}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => onQuickAdd(product, e)}
                      className={`px-4 py-2 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                        isJustAdded
                          ? 'bg-[#1a1c1a] text-white'
                          : 'bg-[#efeeeb] text-[#1a1c1a] hover:bg-[#1a1c1a] hover:text-white'
                      }`}
                    >
                      {isJustAdded ? 'Added ✓' : '+ Quick Add'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Atelier Philosophy & Craft Manifest Module */}
      <section className="w-full px-4 md:px-6 py-12 bg-[#faf9f6] flex flex-col items-center text-center border-t border-[#1a1c1a]/5">
        <div className="w-10 h-0.5 bg-[#8c4e36] mb-6" />
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#747878] font-semibold mb-3">
          Our Manifest
        </span>
        <blockquote className="font-serif text-xl sm:text-2xl font-normal text-[#1a1c1a] max-w-md italic leading-relaxed">
          “Garments cut with intention, crafted from uncompromised raw fibers.”
        </blockquote>
        <p className="font-sans text-xs text-[#747878] max-w-xs mt-4 leading-relaxed">
          Conceived between Paris and Milan. We work directly with family-owned heritage mills to reject synthetic acceleration.
        </p>

        {/* Atelier Transparency Grid */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-8">
          <div className="p-4 rounded-xl bg-[#f4f3f0] text-left border border-[#1a1c1a]/5">
            <span className="material-symbols-outlined text-[#8c4e36] text-[24px] mb-1">
              eco
            </span>
            <h4 className="font-sans text-[12px] font-semibold text-[#1a1c1a] uppercase tracking-wide">
              100% Traceable
            </h4>
            <p className="font-sans text-[11px] text-[#747878] mt-1 leading-tight">
              Every fleece accounted from source farm.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f4f3f0] text-left border border-[#1a1c1a]/5">
            <span className="material-symbols-outlined text-[#8c4e36] text-[24px] mb-1">
              precision_manufacturing
            </span>
            <h4 className="font-sans text-[12px] font-semibold text-[#1a1c1a] uppercase tracking-wide">
              Numbered Run
            </h4>
            <p className="font-sans text-[11px] text-[#747878] mt-1 leading-tight">
              Strict runs under 120 units per piece.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Designer Journal / Editorial Story Card */}
      <section className="w-full px-4 md:px-6 pb-12">
        <div
          onClick={onOpenJournal}
          className="relative w-full rounded-2xl overflow-hidden bg-[#1a1c1a] text-white shadow-lg p-6 sm:p-8 flex flex-col justify-between min-h-[320px] cursor-pointer group transition-transform duration-300 hover:scale-[1.01]"
        >
          {/* Background image with subtle zoom */}
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7O8-sI_yCxfjmXUsUJIqPoLRexWFBav0TADViMvtCFlP5gowMDmBZeBeOF0oBzptpql__7O2w1WXdlgTnuifTLs9jR9w_jh22BmC0jXvK0HkyyKz6XcsHv8sJCfAmMl4NObpMMCkyCWhWFzJ1qk7D35XxyTVl6ZVLmFKrDexvR0Vq1NPYpOpqnPKyKiKEB1AtpNw9i5dyjIvowgmcpJ8lY2MtQYGeczYy_-a356LZ-fqA2e7dY2nU"
              alt="Macro view of loom weaving raw wool fabric"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1a] via-[#1a1c1a]/75 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex justify-between items-center">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#feae90]">
              Atelier Gazette · Vol. 14
            </span>
            <span className="font-sans text-[10px] text-[#e5e2e1] uppercase tracking-wider">
              6 Min Read
            </span>
          </div>

          <div className="relative z-10 pt-16 flex flex-col space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight group-hover:text-[#feae90] transition-colors">
              The Geometry of Warmth: Building Coats Without Seams
            </h3>
            <p className="font-sans text-xs text-[#c8c6c5] line-clamp-2 leading-relaxed">
              An inside interview with Head Patternmaker Geneviève Roux on the structural engineering behind the Autumn release.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-white font-sans text-[11px] font-semibold uppercase tracking-wider underline underline-offset-4 decoration-[#8c4e36] group-hover:text-[#feae90] transition-colors">
                Read Journal Entry <span className="material-symbols-outlined text-[16px]">north_east</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
