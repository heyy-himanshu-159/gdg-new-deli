import React from 'react';
import { ATELIER_LOGO_URL, PROFILE_AVATAR_URL } from '../data/atelierData';

interface HeaderProps {
  cartCount: number;
  savedCount: number;
  onOpenSearch: () => void;
  onOpenBag: () => void;
  onOpenSaved: () => void;
  onOpenProfile: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  savedCount,
  onOpenSearch,
  onOpenBag,
  onOpenSaved,
  onOpenProfile,
  onGoHome,
}) => {
  return (
    <header className="fixed top-0 w-full z-40 pt-safe bg-[#faf9f6]/90 backdrop-blur-xl border-b border-[#1a1c1a]/5 transition-all">
      <div className="max-w-md md:max-w-4xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">
        {/* Brand Lockup */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2 group text-left focus:outline-none"
          aria-label="Atelier Home"
        >
          <img
            src={ATELIER_LOGO_URL}
            alt="ATELIER Logo Mark"
            className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Resilient fallback if CDN encounters network hiccup
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="font-serif text-[19px] md:text-xl font-normal tracking-[0.2em] uppercase text-[#1a1c1a]">
            ATELIER
          </span>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search Collections"
            className="w-10 h-10 flex items-center justify-center text-[#1a1c1a] hover:text-[#8c4e36] transition-colors rounded-full hover:bg-[#efeeeb]"
            type="button"
          >
            <span className="material-symbols-outlined text-[21px]">search</span>
          </button>

          {/* Saved / Wishlist Button */}
          <button
            onClick={onOpenSaved}
            aria-label="Saved Works"
            className="w-10 h-10 relative flex items-center justify-center text-[#1a1c1a] hover:text-[#8c4e36] transition-colors rounded-full hover:bg-[#efeeeb]"
            type="button"
          >
            <span
              className={`material-symbols-outlined text-[21px] ${
                savedCount > 0 ? 'text-[#8c4e36] filled' : ''
              }`}
            >
              favorite
            </span>
            {savedCount > 0 && (
              <span className="absolute top-2 right-2 min-w-[14px] h-[14px] px-1 rounded-full bg-[#8c4e36] text-[#ffffff] font-sans text-[9px] font-semibold flex items-center justify-center leading-none">
                {savedCount}
              </span>
            )}
          </button>

          {/* Bag Button with Dynamic Counter */}
          <button
            onClick={onOpenBag}
            aria-label="Shopping Bag"
            className="w-10 h-10 relative flex items-center justify-center text-[#1a1c1a] hover:text-[#8c4e36] transition-colors rounded-full hover:bg-[#efeeeb]"
            type="button"
          >
            <span className="material-symbols-outlined text-[21px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute top-2 right-2 min-w-[15px] h-[15px] px-1 rounded-full bg-[#1a1c1a] text-[#ffffff] font-sans text-[9px] font-semibold flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </button>

          {/* Client Dossier Avatar */}
          <button
            onClick={onOpenProfile}
            aria-label="Client Profile"
            className="ml-1 focus:outline-none rounded-full ring-1 ring-[#1a1c1a]/15 hover:ring-[#8c4e36] transition-all"
            type="button"
          >
            <img
              src={PROFILE_AVATAR_URL}
              alt="Client Profile"
              className="w-8 h-8 rounded-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23e9e8e5"/><text x="16" y="20" font-family="sans-serif" font-size="12" fill="%23444748" text-anchor="middle">AT</text></svg>';
              }}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
