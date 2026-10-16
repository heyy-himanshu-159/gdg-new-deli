import React, { useState } from 'react';
import { Product, ProductShade } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, shade: ProductShade, size: string) => void;
  onToggleFavorite: (productId: string, event: React.MouseEvent) => void;
  isFavorited: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleFavorite,
  isFavorited,
}) => {
  if (!isOpen || !product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedShade, setSelectedShade] = useState<ProductShade>(product.shades[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedShade, selectedSize);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1a1c1a]/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-3xl bg-[#faf9f6] rounded-2xl shadow-2xl border border-[#1a1c1a]/10 overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh]">
        {/* Close Button Floating */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1c1a] hover:bg-white shadow-sm transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Left Column: Visual Gallery */}
        <div className="md:w-1/2 bg-[#efeeeb] flex flex-col justify-between relative overflow-hidden">
          <div className="relative w-full aspect-[4/5] md:h-full overflow-hidden">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-500"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
              {product.editionBadge && (
                <span
                  className={`px-3 py-1 rounded-full backdrop-blur-sm font-sans text-[10px] font-semibold uppercase tracking-wider shadow-sm ${
                    product.badgeType === 'bestseller'
                      ? 'bg-[#feae90] text-[#6f3721]'
                      : 'bg-white/90 text-[#1a1c1a]'
                  }`}
                >
                  {product.editionBadge}
                </span>
              )}
              {product.lowStock && (
                <span className="px-3 py-1 rounded-full bg-[#8c4e36] text-white font-sans text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                  Low Stock
                </span>
              )}
            </div>
          </div>

          {/* Alternate Thumbnail Previews if multiple images exist */}
          {product.images.length > 1 && (
            <div className="p-3 bg-white/60 backdrop-blur-md flex items-center gap-2 overflow-x-auto no-scrollbar justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-12 h-14 rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#1a1c1a] scale-105 shadow-sm'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="md:w-1/2 p-5 sm:p-6 overflow-y-auto flex flex-col justify-between space-y-5 bg-white">
          <div>
            {/* Header info */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8c4e36] font-semibold">
                  Maison Atelier · Edition 09
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1c1a] font-normal leading-tight mt-1">
                  {product.name}
                </h2>
                <p className="font-sans text-xs text-[#747878] mt-1">
                  {product.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={(e) => onToggleFavorite(product.id, e)}
                className="w-10 h-10 rounded-full border border-[#1a1c1a]/15 flex items-center justify-center text-[#1a1c1a] hover:text-[#8c4e36] transition-colors shrink-0"
                aria-label="Wishlist"
              >
                <span
                  className={`material-symbols-outlined text-[20px] ${
                    isFavorited ? 'filled text-[#8c4e36]' : ''
                  }`}
                >
                  favorite
                </span>
              </button>
            </div>

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-sans text-2xl font-normal text-[#1a1c1a]">
                ${product.price}
              </span>
              <span className="font-sans text-[11px] text-[#747878]">
                Numbered run of {product.editionTotal} pieces
              </span>
            </div>

            {/* Shade Selection */}
            <div className="mt-5 space-y-2">
              <div className="flex justify-between text-xs font-sans">
                <span className="text-[#747878] uppercase text-[10px] font-semibold">
                  Shade
                </span>
                <span className="text-[#1a1c1a] font-medium">
                  {selectedShade.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {product.shades.map((shade, idx) => {
                  const isSelected = selectedShade.name === shade.name;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedShade(shade)}
                      className={`group p-1 rounded-full border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#1a1c1a] scale-110'
                          : 'border-transparent hover:scale-105'
                      }`}
                      title={shade.name}
                    >
                      <span
                        className="w-6 h-6 rounded-full block shadow-inner ring-1 ring-black/10"
                        style={{ backgroundColor: shade.hex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-5 space-y-2">
              <div className="flex justify-between text-xs font-sans">
                <span className="text-[#747878] uppercase text-[10px] font-semibold">
                  Size
                </span>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-[#8c4e36] underline hover:text-[#1a1c1a] text-[11px] transition-colors"
                >
                  {showSizeGuide ? 'Hide Fit Guide' : 'Fit & Measurements'}
                </button>
              </div>

              {showSizeGuide && (
                <div className="p-3 bg-[#f4f3f0] rounded-xl text-[11px] text-[#444748] space-y-1 font-sans border border-[#1a1c1a]/5">
                  <p><strong>Cut:</strong> Architectural relaxed silhouette with natural drape.</p>
                  <p><strong>Recommendation:</strong> Take your true size for intended drape, or size down for tailored fit.</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => {
                  const isSelected = selectedSize === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3.5 py-2 rounded-lg font-sans text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#1a1c1a] text-white shadow-sm'
                          : 'bg-[#efeeeb] text-[#1a1c1a] hover:bg-[#e9e8e5]'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Garment Description */}
            <div className="mt-6 pt-5 border-t border-[#1a1c1a]/10 space-y-3">
              <p className="font-sans text-xs text-[#444748] leading-relaxed">
                {product.description}
              </p>

              {/* Provenance Specifications */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-sans pt-2">
                <div className="p-2.5 bg-[#faf9f6] rounded-lg border border-[#1a1c1a]/5">
                  <span className="text-[#747878] block text-[10px] uppercase font-semibold">Composition</span>
                  <span className="text-[#1a1c1a] font-medium">{product.composition}</span>
                </div>
                <div className="p-2.5 bg-[#faf9f6] rounded-lg border border-[#1a1c1a]/5">
                  <span className="text-[#747878] block text-[10px] uppercase font-semibold">Origin &amp; Mill</span>
                  <span className="text-[#1a1c1a] font-medium">{product.origin}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#1a1c1a]/10">
            <button
              type="button"
              onClick={handleAdd}
              className={`w-full py-3.5 px-6 rounded-full font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                addedSuccess
                  ? 'bg-[#8c4e36] text-white'
                  : 'bg-[#1a1c1a] text-white hover:bg-[#2f312f] active:scale-98'
              }`}
            >
              {addedSuccess ? (
                <>
                  <span className="material-symbols-outlined text-[18px]">done</span>
                  <span>Added to Atelier Bag</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  <span>Add to Atelier Bag · ${product.price}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
