/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, NavTab } from './components/BottomNav';
import { DiscoverView } from './components/DiscoverView';
import { CatalogView } from './components/CatalogView';
import { SavedView } from './components/SavedView';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { JournalModal } from './components/JournalModal';
import { LookbookModal } from './components/LookbookModal';
import { ProfileModal } from './components/ProfileModal';

import { INITIAL_CART_ITEMS, PRODUCTS } from './data/atelierData';
import { Product, ProductShade, CartItem, LookbookItem, Category } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('discover');
  const [catalogCategory, setCatalogCategory] = useState<Category>('all');

  // Cart state initialized with 2 items (matching the "2" badge in the design)
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Wishlist state
  const [savedIds, setSavedIds] = useState<string[]>(['prod-cocoon-coat']);

  // Modals state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLook, setSelectedLook] = useState<LookbookItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Micro-interaction feedback for quick add
  const [recentAddedId, setRecentAddedId] = useState<string | null>(null);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Toggle favorite / wishlist
  const handleToggleFavorite = (productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isFavorited = (productId: string) => savedIds.includes(productId);

  // Add to cart from PDP
  const handleAddToCart = (product: Product, shade: ProductShade, size: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id &&
          item.selectedShade.name === shade.name &&
          item.selectedSize === size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          product,
          selectedShade: shade,
          selectedSize: size,
          quantity: 1,
        },
      ];
    });

    setRecentAddedId(product.id);
    setTimeout(() => {
      setRecentAddedId(null);
    }, 2200);
  };

  // Quick add from card (uses first shade and default size)
  const handleQuickAdd = (product: Product, event: React.MouseEvent) => {
    event.stopPropagation();
    handleAddToCart(product, product.shades[0], product.sizes[0]);
  };

  const handleUpdateQuantity = (cartItemId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleOpenCatalogWithFilter = (filterCategory: Category = 'all') => {
    setCatalogCategory(filterCategory);
    setCurrentTab('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#faf9f6] text-[#1a1c1a] min-h-screen flex flex-col antialiased selection:bg-[#e9e8e5]">
      {/* Top Fixed Header */}
      <Header
        cartCount={cartCount}
        savedCount={savedIds.length}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBag={() => setIsCartOpen(true)}
        onOpenSaved={() => setCurrentTab('saved')}
        onOpenProfile={() => setIsProfileOpen(true)}
        onGoHome={() => {
          setCurrentTab('discover');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full pt-16 pb-20 bg-[#faf9f6]">
        {currentTab === 'discover' && (
          <div className="max-w-md md:max-w-4xl mx-auto">
            <DiscoverView
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickAdd={handleQuickAdd}
              onToggleFavorite={handleToggleFavorite}
              isFavorited={isFavorited}
              onOpenJournal={() => setIsJournalOpen(true)}
              onOpenCatalog={handleOpenCatalogWithFilter}
              onSelectLook={(look) => setSelectedLook(look)}
              recentAddedId={recentAddedId}
            />
          </div>
        )}

        {currentTab === 'catalog' && (
          <CatalogView
            initialCategory={catalogCategory}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onQuickAdd={handleQuickAdd}
            onToggleFavorite={handleToggleFavorite}
            isFavorited={isFavorited}
            recentAddedId={recentAddedId}
          />
        )}

        {currentTab === 'saved' && (
          <SavedView
            savedIds={savedIds}
            onRemoveFavorite={(id) =>
              setSavedIds((prev) => prev.filter((item) => item !== id))
            }
            onSelectProduct={(p) => setSelectedProduct(p)}
            onMoveToBag={(p) => {
              handleQuickAdd(p, { stopPropagation: () => {} } as any);
              setIsCartOpen(true);
            }}
            onExplore={() => setCurrentTab('discover')}
          />
        )}

        {currentTab === 'bag' && (
          <div className="max-w-3xl mx-auto px-4 py-6">
            <SavedView
              savedIds={savedIds}
              onRemoveFavorite={(id) =>
                setSavedIds((prev) => prev.filter((item) => item !== id))
              }
              onSelectProduct={(p) => setSelectedProduct(p)}
              onMoveToBag={(p) => {
                handleQuickAdd(p, { stopPropagation: () => {} } as any);
              }}
              onExplore={() => setCurrentTab('discover')}
            />
          </div>
        )}
      </main>

      {/* Bottom Sticky Navigation */}
      <BottomNav
        currentTab={currentTab}
        onChangeTab={(tab) => {
          if (tab === 'bag') {
            setIsCartOpen(true);
          } else {
            setCurrentTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        hasBagItems={cartItems.length > 0}
      />

      {/* Slide-Over Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleFavorite={handleToggleFavorite}
        isFavorited={selectedProduct ? isFavorited(selectedProduct.id) : false}
      />

      {/* Lookbook Viewer Modal */}
      <LookbookModal
        look={selectedLook}
        isOpen={Boolean(selectedLook)}
        onClose={() => setSelectedLook(null)}
        onSelectProduct={(p) => {
          setSelectedLook(null);
          setSelectedProduct(p);
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onQuickAdd={handleQuickAdd}
      />

      {/* Journal Modal */}
      <JournalModal
        isOpen={isJournalOpen}
        onClose={() => setIsJournalOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        featuredProduct={PRODUCTS[0]}
      />

      {/* Client Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onOrderCompleted={() => setCartItems([])}
      />
    </div>
  );
}
