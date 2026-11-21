// FILE: src/components/CurrencySelector.jsx
import React from 'react';
import { SUPPORTED_CURRENCIES } from '../hooks/useLiveCurrency';

const CurrencySelector = ({
  selectedCurrency,
  onSelectCurrency,
  activeRate,
  isLiveRate,
  isLoading,
}) => {
  return (
    <div className="flex flex-col items-center mb-12 lg:mb-14">
      <div
        role="group"
        aria-label="Select display currency"
        className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-white ring-1 ring-slate-200/90 shadow-md shadow-slate-200/40 max-w-full"
      >
        {SUPPORTED_CURRENCIES.map((currency) => {
          const isActive = selectedCurrency === currency.code;
          return (
            <button
              key={currency.code}
              type="button"
              onClick={() => onSelectCurrency(currency.code)}
              aria-pressed={isActive}
              title={currency.name}
              className={`min-h-[44px] px-4 sm:px-5 py-2 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
              }`}
            >
              {currency.label}
            </button>
          );
        })}
      </div>

      {/* Live Rate Indicator */}
      <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 text-center px-4">
        <span
          className={`w-2 h-2 rounded-full shrink-0 ${
            isLoading
              ? 'bg-amber-400 animate-pulse'
              : isLiveRate
              ? 'bg-emerald-500'
              : 'bg-slate-400'
          }`}
        />
        {selectedCurrency === 'USD' ? (
          <span>Base pricing shown in USD · Select a currency for live conversion</span>
        ) : (
          <span>
            {isLiveRate ? 'Live FX' : 'Indicative FX'}: 1 USD ={' '}
            <strong className="text-slate-700">
              {activeRate.toFixed(2)} {selectedCurrency}
            </strong>{' '}
            · Final billing settled in USD
          </span>
        )}
      </div>
    </div>
  );
};

export default CurrencySelector;