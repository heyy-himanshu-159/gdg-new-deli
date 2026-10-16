import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const freeShippingThreshold = 500;
  const qualifiesForFreeShipping = subtotal >= freeShippingThreshold;
  const shippingAmount = cartItems.length === 0 ? 0 : qualifiesForFreeShipping ? 0 : 35;
  const grandTotal = subtotal + shippingAmount;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1a1c1a]/50 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Drawer Surface */}
      <div className="relative w-full max-w-md bg-[#faf9f6] h-full shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#1a1c1a]/10 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#1a1c1a]">
              shopping_bag
            </span>
            <h2 className="font-serif text-xl text-[#1a1c1a] font-normal">
              Atelier Bag
            </h2>
            <span className="font-sans text-xs text-[#747878] ml-1">
              ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-[#efeeeb] flex items-center justify-center text-[#747878] hover:text-[#1a1c1a] transition-colors"
            aria-label="Close Bag"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="px-6 py-3 bg-[#f4f3f0] border-b border-[#1a1c1a]/5 text-xs">
          {qualifiesForFreeShipping ? (
            <div className="flex items-center gap-2 text-[#6f3721] font-sans font-medium">
              <span className="material-symbols-outlined text-[16px] text-[#8c4e36]">
                verified
              </span>
              <span>Complimentary insured courier delivery unlocked.</span>
            </div>
          ) : (
            <div className="flex flex-col space-y-1">
              <span className="text-[#444748] font-sans">
                Add <strong className="text-[#1a1c1a] font-semibold">${freeShippingThreshold - subtotal}</strong> for complimentary courier delivery
              </span>
              <div className="w-full bg-[#e3e2df] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#8c4e36] h-full transition-all duration-300 rounded-full"
                  style={{
                    width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <span className="material-symbols-outlined text-[36px] text-[#747878] mb-3">
                shopping_bag
              </span>
              <p className="font-serif text-lg text-[#1a1c1a] mb-1">
                Your Atelier Bag is Empty
              </p>
              <p className="font-sans text-xs text-[#747878] max-w-xs mb-6">
                Discover pieces cut with intention from raw merino wool, mulberry silk, and vegetable-tanned leathers.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-[#1a1c1a] text-white hover:bg-[#8c4e36] transition-colors font-sans text-xs uppercase tracking-wider font-semibold"
              >
                Browse Edition 09
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-white rounded-xl border border-[#1a1c1a]/5 shadow-sm"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 rounded-lg bg-[#efeeeb] overflow-hidden shrink-0">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-1">
                    <div>
                      <h4 className="font-serif text-[15px] text-[#1a1c1a] leading-tight font-normal">
                        {item.product.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full ring-1 ring-black/10 inline-block"
                          style={{ backgroundColor: item.selectedShade.hex }}
                        />
                        <span className="font-sans text-[11px] text-[#747878]">
                          {item.selectedShade.name} · {item.selectedSize}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#747878] hover:text-[#ba1a1a] p-0.5 transition-colors"
                      title="Remove piece"
                    >
                      <span className="material-symbols-outlined text-[16px]">close</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Stepper */}
                    <div className="flex items-center bg-[#efeeeb] rounded-full px-2 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-[#1a1c1a] hover:opacity-60"
                        title="Decrease"
                      >
                        -
                      </button>
                      <span className="px-2 font-sans text-xs font-semibold text-[#1a1c1a]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-[#1a1c1a] hover:opacity-60"
                        title="Increase"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-sans text-sm font-semibold text-[#1a1c1a]">
                      ${item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-6 bg-white border-t border-[#1a1c1a]/10 space-y-3">
            <div className="space-y-1.5 text-xs font-sans">
              <div className="flex justify-between text-[#747878]">
                <span>Atelier Subtotal</span>
                <span className="text-[#1a1c1a] font-medium">${subtotal}</span>
              </div>
              <div className="flex justify-between text-[#747878]">
                <span>Insured Express Courier</span>
                <span className="text-[#1a1c1a] font-medium">
                  {shippingAmount === 0 ? 'Complimentary' : `$${shippingAmount}`}
                </span>
              </div>
              <div className="flex justify-between text-[#747878]">
                <span>Taxes &amp; Carbon Neutral Offset</span>
                <span className="text-[#1a1c1a] font-medium">Included</span>
              </div>
              <div className="flex justify-between text-sm font-serif text-[#1a1c1a] pt-2 border-t border-[#1a1c1a]/5">
                <span className="font-normal">Estimated Total</span>
                <span className="font-sans font-semibold">${grandTotal}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onProceedToCheckout}
              className="w-full py-3.5 px-4 rounded-full bg-[#1a1c1a] text-white hover:bg-[#8c4e36] transition-colors font-sans text-xs uppercase tracking-wider font-semibold shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Atelier Checkout</span>
              <span className="material-symbols-outlined text-[16px]">lock</span>
            </button>

            <p className="text-center font-sans text-[10px] text-[#747878] leading-tight">
              Delivered in signature unbleached organic cotton garment bag and cedar preservation box.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
