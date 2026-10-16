import React from 'react';
import { LookbookItem, Product } from '../types';
import { PRODUCTS } from '../data/atelierData';

interface LookbookModalProps {
  look: LookbookItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  look,
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  if (!isOpen || !look) return null;

  // Find related product for this look
  const relatedProduct = PRODUCTS.find((p) => p.category === look.category) || PRODUCTS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1a1c1a]/65 backdrop-blur-sm transition-opacity"
      />

      {/* Surface */}
      <div className="relative w-full max-w-xl bg-[#faf9f6] rounded-2xl shadow-2xl border border-[#1a1c1a]/10 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1c1a] hover:bg-white shadow-md transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Look Image */}
        <div className="relative w-full aspect-[4/3] bg-[#efeeeb] overflow-hidden">
          <img
            src={look.image}
            alt={look.altText}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm font-sans text-[10px] font-semibold uppercase tracking-widest text-[#1a1c1a] shadow-sm">
              {look.lookNumber}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 bg-white space-y-4 font-sans flex-1 overflow-y-auto">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8c4e36] font-semibold">
              Curated Sequence · Edition 09
            </span>
            <h3 className="font-serif text-2xl text-[#1a1c1a] font-normal mt-0.5">
              {look.title}
            </h3>
            <p className="font-sans text-xs text-[#747878] mt-1">
              {look.subtitle}
            </p>
          </div>

          <p className="text-xs text-[#2f312f] leading-relaxed">
            {look.description}
          </p>

          <div className="p-4 bg-[#f4f3f0] rounded-xl border border-[#1a1c1a]/5 flex items-center justify-between gap-3">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#747878] font-semibold block">
                Related Atelier Piece
              </span>
              <p className="font-serif text-sm text-[#1a1c1a]">
                {relatedProduct.name}
              </p>
              <p className="font-sans text-xs font-semibold text-[#1a1c1a]">
                ${relatedProduct.price}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectProduct(relatedProduct);
              }}
              className="px-4 py-2 rounded-full bg-[#1a1c1a] text-white hover:bg-[#8c4e36] font-sans text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
            >
              Inspect Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
