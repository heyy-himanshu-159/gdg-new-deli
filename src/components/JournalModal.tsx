import React from 'react';
import { JOURNAL_ARTICLE } from '../data/atelierData';
import { Product } from '../types';

interface JournalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  featuredProduct: Product;
}

export const JournalModal: React.FC<JournalModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  featuredProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#1a1c1a]/70 backdrop-blur-sm transition-opacity"
      />

      {/* Article Container */}
      <div className="relative w-full max-w-2xl bg-[#faf9f6] rounded-2xl shadow-2xl border border-[#1a1c1a]/10 overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1a1c1a] hover:bg-white shadow-md transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Hero Cover Header */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#1a1c1a] shrink-0">
          <img
            src={JOURNAL_ARTICLE.coverImage}
            alt="Artisan loom weaving raw wool"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1a] via-[#1a1c1a]/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <div className="flex items-center gap-3 text-[10px] font-sans uppercase tracking-widest text-[#feae90] font-semibold">
              <span>{JOURNAL_ARTICLE.volume}</span>
              <span>·</span>
              <span>{JOURNAL_ARTICLE.readTime}</span>
              <span>·</span>
              <span>{JOURNAL_ARTICLE.publishedDate}</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight">
              {JOURNAL_ARTICLE.title}
            </h1>
          </div>
        </div>

        {/* Reading Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white flex-1 font-sans">
          {/* Author Byline */}
          <div className="flex items-center justify-between pb-4 border-b border-[#1a1c1a]/10">
            <div>
              <p className="font-sans text-xs font-semibold text-[#1a1c1a]">
                Conversation: {JOURNAL_ARTICLE.author}
              </p>
              <p className="font-sans text-[11px] text-[#747878]">
                {JOURNAL_ARTICLE.authorRole}
              </p>
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8c4e36] font-semibold bg-[#f4f3f0] px-2.5 py-1 rounded-full">
              Editorial Feature
            </span>
          </div>

          {/* First Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-[#2f312f] leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-normal first-letter:mr-2 first-letter:float-left first-letter:text-[#1a1c1a]">
              {JOURNAL_ARTICLE.fullText[0]}
            </p>
            <p>{JOURNAL_ARTICLE.fullText[1]}</p>
          </div>

          {/* Blockquote */}
          <div className="p-6 bg-[#f4f3f0] rounded-xl border-l-2 border-[#8c4e36] my-6">
            <blockquote className="font-serif text-lg sm:text-xl text-[#1a1c1a] italic leading-snug">
              “{JOURNAL_ARTICLE.quote}”
            </blockquote>
            <p className="font-sans text-[11px] text-[#747878] mt-2 uppercase tracking-wider font-semibold">
              — Geneviève Roux, Rue Saint-Maur Atelier
            </p>
          </div>

          {/* Remaining Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-[#2f312f] leading-relaxed">
            <p>{JOURNAL_ARTICLE.fullText[2]}</p>
            <p>{JOURNAL_ARTICLE.fullText[3]}</p>
            <p>{JOURNAL_ARTICLE.fullText[4]}</p>
          </div>

          {/* Featured Garment Callout */}
          <div className="mt-8 p-4 bg-[#faf9f6] rounded-xl border border-[#1a1c1a]/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={featuredProduct.images[0]}
                alt={featuredProduct.name}
                className="w-14 h-16 object-cover rounded-lg bg-[#efeeeb]"
              />
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#8c4e36] font-semibold">
                  Featured in Story
                </span>
                <h4 className="font-serif text-sm text-[#1a1c1a] font-normal">
                  {featuredProduct.name}
                </h4>
                <p className="font-sans text-xs font-semibold text-[#1a1c1a]">
                  ${featuredProduct.price}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onSelectProduct(featuredProduct);
              }}
              className="px-4 py-2 rounded-full bg-[#1a1c1a] text-white hover:bg-[#8c4e36] font-sans text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
            >
              Inspect Coat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
