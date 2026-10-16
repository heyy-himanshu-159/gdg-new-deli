import React from 'react';
import { PRODUCTS } from '../data/atelierData';
import { Product } from '../types';

interface SavedViewProps {
  savedIds: string[];
  onRemoveFavorite: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onMoveToBag: (product: Product) => void;
  onExplore: () => void;
}

export const SavedView: React.FC<SavedViewProps> = ({
  savedIds,
  onRemoveFavorite,
  onSelectProduct,
  onMoveToBag,
  onExplore,
}) => {
  const savedProducts = PRODUCTS.filter((p) => savedIds.includes(p.id));

  return (
    <div className="w-full px-4 md:px-6 py-6 pb-24 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col space-y-1 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8c4e36]" />
          <span className="font-sans text-[10px] uppercase tracking-widest text-[#8c4e36] font-semibold">
            Private Atelier Curation
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1a1c1a] font-normal">
            Saved Works
          </h1>
          <span className="font-sans text-xs text-[#747878]">
            {savedProducts.length} {savedProducts.length === 1 ? 'Piece' : 'Pieces'}
          </span>
        </div>
        <p className="font-sans text-xs text-[#747878]">
          Curated selection reserved for your consideration before lot allocation closes.
        </p>
      </div>

      {savedProducts.length === 0 ? (
        /* Empty State */
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white rounded-2xl border border-[#1a1c1a]/5">
          <div className="w-16 h-16 rounded-full bg-[#f4f3f0] flex items-center justify-center text-[#747878] mb-4">
            <span className="material-symbols-outlined text-[32px]">favorite</span>
          </div>
          <h2 className="font-serif text-2xl text-[#1a1c1a] font-normal mb-2">
            Your Private Salon is Quiet
          </h2>
          <p className="font-sans text-xs text-[#747878] max-w-sm mb-6 leading-relaxed">
            As you explore our editions, select the bookmark heart on any coat, silk trouser, or leather object to reserve its details here.
          </p>
          <button
            type="button"
            onClick={onExplore}
            className="px-6 py-3 rounded-full bg-[#1a1c1a] text-white hover:bg-[#8c4e36] transition-colors font-sans text-xs uppercase tracking-wider font-semibold shadow-sm cursor-pointer"
          >
            Explore Edition 09
          </button>
        </div>
      ) : (
        /* Saved List */
        <div className="flex flex-col space-y-4">
          {savedProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#1a1c1a]/5 shadow-sm transition-all hover:border-[#1a1c1a]/15"
            >
              {/* Product Thumbnail */}
              <div
                onClick={() => onSelectProduct(product)}
                className="w-24 h-28 sm:w-28 sm:h-32 rounded-lg overflow-hidden bg-[#efeeeb] shrink-0 cursor-pointer"
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-lg text-[#1a1c1a] font-normal truncate hover:text-[#8c4e36] cursor-pointer"
                    >
                      {product.name}
                    </h3>
                    <button
                      type="button"
                      onClick={() => onRemoveFavorite(product.id)}
                      title="Remove from saved"
                      className="text-[#747878] hover:text-[#ba1a1a] p-1 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  </div>
                  <p className="font-sans text-xs text-[#747878] mt-0.5 line-clamp-1">
                    {product.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-sans text-sm font-semibold text-[#1a1c1a]">
                      ${product.price}
                    </span>
                    {product.lowStock && (
                      <span className="font-sans text-[10px] text-[#8c4e36] font-semibold uppercase tracking-wider">
                        · Low Stock
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onMoveToBag(product)}
                    className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-[#1a1c1a] text-white hover:bg-[#8c4e36] transition-colors font-sans text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    Move to Bag
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="px-3 py-2 rounded-full bg-[#efeeeb] text-[#1a1c1a] hover:bg-[#e9e8e5] transition-colors font-sans text-[11px] font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
