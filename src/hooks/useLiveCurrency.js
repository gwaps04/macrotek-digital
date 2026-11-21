// FILE: src/hooks/useLiveCurrency.js
import { useState, useEffect, useCallback } from 'react';

export const SUPPORTED_CURRENCIES = [
  { code: 'USD', label: 'USD', name: 'US Dollar' },
  { code: 'PHP', label: 'PH Peso', name: 'Philippine Peso' },
  { code: 'HKD', label: 'HKD', name: 'Hong Kong Dollar' },
  { code: 'AED', label: 'Dirham', name: 'UAE Dirham' },
  { code: 'AUD', label: 'AUD', name: 'Australian Dollar' },
];

const FALLBACK_RATES = {
  USD: 1,
  PHP: 58.5,
  HKD: 7.78,
  AED: 3.6725,
  AUD: 1.54,
};

const CACHE_KEY = 'macrotek_live_fx_usd_v1';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export function useLiveCurrency() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [rates, setRates] = useState(FALLBACK_RATES);
  const [isLiveRate, setIsLiveRate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadRates = async () => {
      try {
        const cachedRaw = sessionStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          if (Date.now() - cached.timestamp < CACHE_TTL_MS && cached.rates) {
            setRates(cached.rates);
            setIsLiveRate(true);
            setIsLoading(false);
            return;
          }
        }

        const response = await fetch('https://open.er-api.com/v6/latest/USD', {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error('FX feed unavailable');

        const data = await response.json();
        if (data?.result === 'success' && data?.rates) {
          const nextRates = {
            USD: 1,
            PHP: data.rates.PHP ?? FALLBACK_RATES.PHP,
            HKD: data.rates.HKD ?? FALLBACK_RATES.HKD,
            AED: data.rates.AED ?? FALLBACK_RATES.AED,
            AUD: data.rates.AUD ?? FALLBACK_RATES.AUD,
          };
          setRates(nextRates);
          setIsLiveRate(true);
          sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), rates: nextRates })
          );
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          setIsLiveRate(false);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadRates();
    return () => controller.abort();
  }, []);

  const formatAmount = useCallback(
    (amountUsd) => {
      const rate = rates[selectedCurrency] ?? 1;
      const converted = Math.round(amountUsd * rate);
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: selectedCurrency,
        maximumFractionDigits: 0,
      }).format(converted);
    },
    [rates, selectedCurrency]
  );

  return {
    selectedCurrency,
    setSelectedCurrency,
    activeRate: rates[selectedCurrency] ?? 1,
    isLiveRate,
    isLoading,
    formatAmount,
  };
}