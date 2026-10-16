import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderCompleted,
}) => {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    fullName: 'Himanshu Keshari',
    email: 'himanshukeshari935@gmail.com',
    address: '14 Boulevard Saint-Germain',
    city: 'Paris',
    postalCode: '75005',
    country: 'France',
    deliveryNote: 'Leave with concierge or ring bell directly.',
    paymentMethod: 'apple_pay',
  });

  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const qualifiesForFreeShipping = subtotal >= 500;
  const shipping = qualifiesForFreeShipping ? 0 : 35;
  const grandTotal = subtotal + shipping;

  const handleSubmitOrder = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      const generatedOrder = `ATL-09-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderNumber(generatedOrder);
      setIsSubmitting(false);
      setStep('confirmed');
      onOrderCompleted();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={step === 'confirmed' ? onClose : undefined}
        className="fixed inset-0 bg-[#1a1c1a]/60 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#faf9f6] rounded-2xl shadow-2xl border border-[#1a1c1a]/10 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#1a1c1a]/10 flex items-center justify-between bg-white">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8c4e36] font-semibold">
              Maison Atelier Checkout
            </span>
            <h3 className="font-serif text-xl text-[#1a1c1a] font-normal">
              {step === 'details' && 'Client & Delivery Dossier'}
              {step === 'payment' && 'Payment & Authentication'}
              {step === 'confirmed' && 'Order Authenticated & Registered'}
            </h3>
          </div>
          {step !== 'confirmed' && (
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#efeeeb] flex items-center justify-center text-[#747878] hover:text-[#1a1c1a]"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
          {step === 'details' && (
            <div className="space-y-4 text-xs font-sans">
              <div className="p-3 bg-[#f4f3f0] rounded-xl flex items-center gap-2 border border-[#1a1c1a]/5 text-[#444748]">
                <span className="material-symbols-outlined text-[#8c4e36] text-[18px]">
                  security
                </span>
                <span>
                  Insured express delivery with numbered tamper-evident seal and certificate of authenticity.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                    Client Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-[#1a1c1a]/15 rounded-lg px-3 py-2 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#1a1c1a] outline-none"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                    Client Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#1a1c1a]/15 rounded-lg px-3 py-2 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#1a1c1a] outline-none"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                  Destination Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-white border border-[#1a1c1a]/15 rounded-lg px-3 py-2 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#1a1c1a] outline-none"
                  placeholder="Street and house number"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white border border-[#1a1c1a]/15 rounded-lg px-3 py-2 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#1a1c1a] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full bg-white border border-[#1a1c1a]/15 rounded-lg px-3 py-2 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#1a1c1a] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-white border border-[#1a1c1a]/15 rounded-lg px-3 py-2 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#1a1c1a] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#747878] uppercase text-[10px] font-semibold mb-1">
                  Private Concierge Delivery Instructions
                </label>
                <input
                  type="text"
                  value={formData.deliveryNote}
                  onChange={(e) => setFormData({ ...formData, deliveryNote: e.target.value })}
                  className="w-full bg-white border border-[#1a1c1a]/15 rounded-lg px-3 py-2 text-xs text-[#1a1c1a] focus:ring-1 focus:ring-[#1a1c1a] outline-none"
                  placeholder="Specific instructions for private courier..."
                />
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-4 text-xs font-sans">
              <div className="border border-[#1a1c1a]/10 rounded-xl divide-y divide-[#1a1c1a]/5 bg-white">
                <label className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-[#faf9f6]">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'apple_pay'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'apple_pay' })}
                      className="accent-[#1a1c1a]"
                    />
                    <div>
                      <p className="font-semibold text-[#1a1c1a]">Apple Pay / Google Pay</p>
                      <p className="text-[#747878] text-[11px]">Instant biometric authorization</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-[#1a1c1a]">
                    contactless
                  </span>
                </label>

                <label className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-[#faf9f6]">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className="accent-[#1a1c1a]"
                    />
                    <div>
                      <p className="font-semibold text-[#1a1c1a]">Encrypted Card Checkout</p>
                      <p className="text-[#747878] text-[11px]">Visa, Mastercard, American Express</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-[#1a1c1a]">
                    credit_card
                  </span>
                </label>

                <label className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-[#faf9f6]">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'invoice'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'invoice' })}
                      className="accent-[#1a1c1a]"
                    />
                    <div>
                      <p className="font-semibold text-[#1a1c1a]">Private Atelier Client Invoice</p>
                      <p className="text-[#747878] text-[11px]">Payment upon delivery inspection (Net 14)</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[20px] text-[#8c4e36]">
                    receipt_long
                  </span>
                </label>
              </div>

              {/* Order total recap */}
              <div className="p-3.5 bg-[#f4f3f0] rounded-xl border border-[#1a1c1a]/5 space-y-1">
                <div className="flex justify-between text-[#747878]">
                  <span>Items ({cartItems.length})</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-[#747878]">
                  <span>Insured Express Courier</span>
                  <span>{shipping === 0 ? 'Complimentary' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between font-serif text-sm text-[#1a1c1a] pt-1 border-t border-[#1a1c1a]/5">
                  <span>Grand Total</span>
                  <span className="font-sans font-semibold">${grandTotal}</span>
                </div>
              </div>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#feae90] text-[#6f3721] mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">check</span>
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#8c4e36] font-semibold">
                  Official Allotment Confirmed
                </span>
                <h4 className="font-serif text-2xl text-[#1a1c1a] mt-0.5">
                  Registration {orderNumber}
                </h4>
              </div>
              <p className="font-sans text-xs text-[#747878] max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Your pieces from Curated Capsule 04 have been allocated from the limited lot in Paris and will ship in custom cedar storage within 24 hours.
              </p>

              {/* Receipt Summary */}
              <div className="p-4 bg-white rounded-xl border border-[#1a1c1a]/10 text-left space-y-2 text-xs">
                <div className="flex justify-between text-[#747878]">
                  <span>Destination:</span>
                  <span className="text-[#1a1c1a] font-medium text-right">
                    {formData.address}, {formData.city}
                  </span>
                </div>
                <div className="flex justify-between text-[#747878]">
                  <span>Tracking:</span>
                  <span className="text-[#8c4e36] font-mono font-medium">
                    DHL-EXPRESS-FR-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                </div>
                <div className="flex justify-between text-[#747878] pt-1 border-t border-[#1a1c1a]/5">
                  <span>Total Settled:</span>
                  <span className="text-[#1a1c1a] font-semibold">${grandTotal}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#1a1c1a]/10 flex items-center justify-between">
          {step === 'details' && (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 font-sans text-xs text-[#747878] hover:text-[#1a1c1a] uppercase tracking-wider"
              >
                Back to Bag
              </button>
              <button
                type="button"
                onClick={() => setStep('payment')}
                className="px-6 py-2.5 rounded-full bg-[#1a1c1a] text-white hover:bg-[#8c4e36] font-sans text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                Continue to Payment
              </button>
            </>
          )}

          {step === 'payment' && (
            <>
              <button
                type="button"
                onClick={() => setStep('details')}
                className="px-4 py-2 font-sans text-xs text-[#747878] hover:text-[#1a1c1a] uppercase tracking-wider"
              >
                Back to Details
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleSubmitOrder}
                className="px-6 py-2.5 rounded-full bg-[#1a1c1a] text-white hover:bg-[#8c4e36] font-sans text-xs uppercase tracking-wider font-semibold flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-[16px] animate-spin">
                      progress_activity
                    </span>
                    <span>Securing Allotment...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Order (${grandTotal})</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </>
                )}
              </button>
            </>
          )}

          {step === 'confirmed' && (
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[#1a1c1a] text-white hover:bg-[#8c4e36] font-sans text-xs uppercase tracking-wider font-semibold"
            >
              Return to Atelier
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
