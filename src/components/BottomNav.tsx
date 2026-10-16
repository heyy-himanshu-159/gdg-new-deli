import React from 'react';

export type NavTab = 'discover' | 'catalog' | 'saved' | 'bag';

interface BottomNavProps {
  currentTab: NavTab;
  onChangeTab: (tab: NavTab) => void;
  hasBagItems: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentTab,
  onChangeTab,
  hasBagItems,
}) => {
  const navItems: { tab: NavTab; label: string; icon: string }[] = [
    { tab: 'discover', label: 'Discover', icon: 'home' },
    { tab: 'catalog', label: 'Catalog', icon: 'grid_view' },
    { tab: 'saved', label: 'Saved', icon: 'favorite' },
    { tab: 'bag', label: 'Bag', icon: 'shopping_bag' },
  ];

  return (
    <nav
      className="fixed bottom-0 w-full z-40 pb-safe bg-[#faf9f6]/92 backdrop-blur-xl border-t border-[#1a1c1a]/5 shadow-[0_-2px_12px_rgba(0,0,0,0.03)]"
      aria-label="Atelier Navigation"
    >
      <div className="max-w-md md:max-w-4xl mx-auto h-16 px-4 flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = currentTab === item.tab;
          return (
            <button
              key={item.tab}
              onClick={() => onChangeTab(item.tab)}
              type="button"
              className={`flex-1 flex flex-col items-center justify-center min-h-[44px] py-1 transition-colors relative ${
                isActive
                  ? 'text-[#1a1c1a] font-medium'
                  : 'text-[#747878] hover:text-[#1a1c1a]'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] mb-0.5 transition-transform duration-200 ${
                  isActive ? 'scale-110 font-medium' : ''
                } ${isActive && item.tab === 'saved' ? 'filled text-[#8c4e36]' : ''}`}
              >
                {item.icon}
              </span>
              <span className="font-sans text-[10px] tracking-[0.14em] uppercase">
                {item.label}
              </span>

              {/* Indicator dot for bag when items are present */}
              {item.tab === 'bag' && hasBagItems && (
                <span className="absolute top-2 right-[calc(50%-14px)] w-1.5 h-1.5 rounded-full bg-[#8c4e36]" />
              )}

              {/* Subtle active line indicator */}
              {isActive && (
                <span className="absolute bottom-1 w-6 h-[2px] bg-[#1a1c1a] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
