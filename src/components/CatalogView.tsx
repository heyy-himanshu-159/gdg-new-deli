import React, { useState } from 'react';
import { PRODUCTS } from '../data/atelierData';
import { Category, Product } from '../types';

interface CatalogViewProps {
  initialCategory?: Category;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, event: React.MouseEvent) => void;
  onToggleFavorite: (productId: string, event: React.MouseEvent) => void;
  isFavorited: (productId: string) => boolean;
  recentAddedId: string | null;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  initialCategory = 'all',
  onSelectProduct,
  onQuickAdd,
  onToggleFavorite,
  isFavorited,
  recentAddedId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');
  const [gridColumns, setGridColumns] = useState<1 | 2>(2);

  const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'All Works' },
    { key: 'outerwear', label: 'Outerwear' },
    { key: 'knitwear', label: 'Knitwear' },
    { key: 'trousers', label: 'Trousers' },
    { key: 'accessories', label: 'Accessories' },
  ];

  // Filtering
  let items =
    selectedCategory === 'all'
      ? [...PRODUCTS]
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  // Sorting
  if (sortBy === 'price-low') {
    items.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    items.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="w-full px-4 md:px-6 py-6 pb-20 max-w-4xl mx-auto">
      {/* Title & Index Header */}
      <div className="flex flex-col space-y-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8c4e36]" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#8c4e36] font-semibold">
            Atelier Permanent &amp; Capsule Registry
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1a1c1a] font-normal">
            Garment Index
          </h1>
          <span className="font-sans text-xs text-[#747878]">
            {items.length} Works currently accessible
          </span>
        </div>
        <p className="font-sans text-xs text-[#747878] max-w-lg">
          Filtered by uncompromised fiber density, natural drape, and limited artisan production lots.
        </p>
      </div>

      {/* Control Bar: Categories & Sorting */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-y border-[#1a1c1a]/10 mb-6">
        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full font-sans text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-[#1a1c1a] text-white shadow-sm'
                  : 'bg-[#efeeeb] text-[#1a1c1a] hover:bg-[#e9e8e5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* View Layout & Sort Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="font-sans text-[10px] uppercase text-[#747878] font-semibold">
              Sort:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#efeeeb] border-0 rounded-md px-2.5 py-1 text-xs font-sans text-[#1a1c1a] focus:ring-1 focus:ring-[#1a1c1a] cursor-pointer"
            >
              <option value="featured">Featured Sequence</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          {/* Grid Toggle */}
          <div className="hidden sm:flex items-center bg-[#efeeeb] rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => setGridColumns(1)}
              title="Editorial Single Column"
              className={`p-1.5 rounded ${gridColumns === 1 ? 'bg-white shadow-sm text-[#1a1c1a]' : 'text-[#747878]'}`}
            >
              <span className="material-symbols-outlined text-[18px]">view_agenda</span>
            </button>
            <button
              type="button"
              onClick={() => setGridColumns(2)}
              title="Two Column Grid"
              className={`p-1.5 rounded ${gridColumns === 2 ? 'bg-white shadow-sm text-[#1a1c1a]' : 'text-[#747878]'}`}
            >
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div
        className={`grid gap-6 ${
          gridColumns === 1
            ? 'grid-cols-1 max-w-xl mx-auto'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}
      >
        {items.map((product) => {
          const favorited = isFavorited(product.id);
          const isJustAdded = recentAddedId === product.id;

          return (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-[#1a1c1a]/5 group cursor-pointer transition-all duration-300 hover:shadow-md"
            >
              <div className="relative w-full aspect-[4/5] bg-[#efeeeb] overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
                  {product.editionBadge && (
                    <span
                      className={`px-2.5 py-1 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider shadow-sm ${
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

                {/* Bookmark Button */}
                <button
                  aria-label="Save to Wishlist"
                  onClick={(e) => onToggleFavorite(product.id, e)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1c1a] hover:text-[#8c4e36] transition-transform active:scale-75 shadow-sm z-10 cursor-pointer"
                  type="button"
                >
                  <span
                    className={`material-symbols-outlined text-[19px] ${
                      favorited ? 'filled text-[#8c4e36]' : ''
                    }`}
                  >
                    favorite
                  </span>
                </button>

                {/* Quick Add Feedback Toast */}
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

              {/* Product Info */}
              <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-serif text-lg text-[#1a1c1a] font-normal leading-snug group-hover:text-[#8c4e36] transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-sans text-sm font-semibold text-[#1a1c1a] whitespace-nowrap">
                      ${product.price}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#747878] mt-1 line-clamp-1">
                    {product.subtitle}
                  </p>
                </div>

                {/* Shades & Quick Add */}
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
                    className={`px-3.5 py-1.5 rounded-full font-sans text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
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
    </div>
  );
};
