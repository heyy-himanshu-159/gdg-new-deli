import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/atelierData';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, event: React.MouseEvent) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onQuickAdd,
}) => {
  const [query, setQuery] = useState('');

  const suggestedTerms = [
    'Cocoon Coat',
    'Double-Faced Wool',
    'Silk Voile',
    'Mongolian Cashmere',
    'Calfskin',
    'Basalt Charcoal',
  ];

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1a1c1a]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Search Container */}
      <div className="relative w-full max-w-xl bg-[#faf9f6] rounded-2xl shadow-2xl border border-[#1a1c1a]/10 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-[#1a1c1a]/10 flex items-center gap-3 bg-white">
          <span className="material-symbols-outlined text-[22px] text-[#747878]">
            search
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search garments, raw fibers, silhouettes..."
            autoFocus
            className="flex-1 bg-transparent border-0 outline-none font-serif text-lg text-[#1a1c1a] placeholder:font-sans placeholder:text-sm placeholder:text-[#747878]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#747878] hover:text-[#1a1c1a] p-1 text-xs"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#efeeeb] flex items-center justify-center text-[#747878] hover:text-[#1a1c1a]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Quick Query Pills */}
        <div className="px-5 py-3 bg-[#f4f3f0] border-b border-[#1a1c1a]/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="font-sans text-[10px] uppercase text-[#747878] font-semibold shrink-0">
            Suggestions:
          </span>
          {suggestedTerms.map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 rounded-full bg-white text-[#1a1c1a] hover:bg-[#1a1c1a] hover:text-white transition-colors font-sans text-[10px] tracking-wide shrink-0 border border-[#1a1c1a]/5 cursor-pointer"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3 flex-1">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-[#747878]">
              <p className="font-serif text-base text-[#1a1c1a] mb-1">
                Explore Atelier Materiality
              </p>
              <p className="font-sans text-xs max-w-xs mx-auto">
                Type keywords like "wool", "silk", "coat", or "trousers" to inspect cuts and yardage.
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-8 text-center text-[#747878]">
              <p className="font-serif text-base text-[#1a1c1a] mb-1">
                No matching archival pieces found
              </p>
              <p className="font-sans text-xs">
                Try searching for broader terms like "outerwear", "cashmere", or "leather".
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#747878] font-semibold block px-1">
                {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'} Found
              </span>
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#1a1c1a]/5 hover:border-[#1a1c1a]/20 transition-all cursor-pointer group"
                >
                  <div className="w-14 h-16 rounded-md bg-[#efeeeb] overflow-hidden shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm text-[#1a1c1a] group-hover:text-[#8c4e36] transition-colors truncate">
                      {product.name}
                    </h4>
                    <p className="font-sans text-[11px] text-[#747878] truncate">
                      {product.subtitle}
                    </p>
                    <span className="font-sans text-xs font-semibold text-[#1a1c1a]">
                      ${product.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickAdd(product, e);
                    }}
                    className="px-3 py-1.5 rounded-full bg-[#efeeeb] text-[#1a1c1a] hover:bg-[#1a1c1a] hover:text-white font-sans text-[10px] font-semibold uppercase tracking-wider shrink-0 transition-colors"
                  >
                    + Add
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
