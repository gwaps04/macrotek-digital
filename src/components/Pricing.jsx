// FILE: src/components/Pricing.jsx
import React from 'react';
import PricingCard from './PricingCard';
import CurrencySelector from './CurrencySelector';
import { useLiveCurrency } from '../hooks/useLiveCurrency';
import {
  BronzePresenceIcon,
  SilverSystemsIcon,
  GoldEnterpriseIcon,
} from './PricingIcons';

const BOOKING_URL = 'https://macrotek-official-live-server.vercel.app/book';

const PRICING_TIERS = [
  {
    id: 'bronze',
    variant: 'bronze',
    eyebrow: 'BRONZE · 01 · ESSENTIAL',
    title: 'Digital Presence',
    description:
      'Establish your business online with a professionally designed website that showcases your brand, services, and offerings.',
    baseAmountUsd: 400,
    pricePrefix: '',
    priceNote: 'One-time project investment',
    icon: BronzePresenceIcon,
    ctaLabel: 'Get Started',
    ctaHref: BOOKING_URL,
    features: [
      'Custom Website Design',
      'Responsive Business Website',
      'Mobile-Friendly User Interface',
      'Essential Business Pages',
      'Contact & Inquiry Forms',
      'Basic SEO Setup',
      'Domain & SSL Configuration',
      'Website Deployment',
    ],
  },
  {
    id: 'silver',
    variant: 'silver',
    eyebrow: 'SILVER · 02 · MOST POPULAR',
    title: 'Business Management Systems',
    description:
      'Go beyond a traditional website. Manage appointments, clients, inquiries, and projects through an integrated business platform.',
    baseAmountUsd: 1000,
    pricePrefix: 'Starting at ',
    priceNote: 'Customizable business application and automation · Starting price',
    icon: SilverSystemsIcon,
    ctaLabel: 'Start Your System',
    ctaHref: BOOKING_URL,
    features: [
      'Custom Modular UI & Responsive Design',
      'Online Appointment & Booking Management',
      'Enrollment & Registration Management',
      'Client & Customer Management',
      'Project Management Integration',
      'Administrative Dashboard',
      'Inquiry & Lead Management',
      'Workflow Automation Integration Ready',
      'Database & API Integration',
      'Deployment & Technical Support',
    ],
  },
  {
    id: 'gold',
    variant: 'gold',
    eyebrow: 'GOLD · 03 · ENTERPRISE',
    title: 'Advanced Enterprise Solutions',
    description:
      'Digitize complex business operations with custom-built applications, integrated systems, and intelligent automation designed around your organization.',
    baseAmountUsd: null,
    staticPrice: 'Custom Pricing',
    priceNote: 'Based on business requirements and project scope',
    icon: GoldEnterpriseIcon,
    ctaLabel: 'Schedule Consultation',
    ctaHref: BOOKING_URL,
    features: [
      'Custom ERP & Business Applications',
      'Advanced Workflow Automation',
      'Multi-Department Management Systems',
      'Inventory & Supply Chain Management',
      'Financial & Operational Management',
      'Advanced CRM & Client Management',
      'API & Third-Party System Integrations',
      'AI-Powered Business Solutions',
      'Custom Database Architecture',
      'Scalable Enterprise Infrastructure',
    ],
  },
];

const Pricing = () => {
  const {
    selectedCurrency,
    setSelectedCurrency,
    activeRate,
    isLiveRate,
    isLoading,
    formatAmount,
  } = useLiveCurrency();

  return (
    <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-indigo-100/50 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center rounded-full bg-indigo-100/80 px-4 py-1.5 text-sm font-bold text-indigo-700 tracking-wide ring-1 ring-inset ring-indigo-600/20">
              Investment
            </span>
          </div>
          <h1 className="brand-font text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Strategic Business{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
              Solutions.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Transparent tiers engineered to scale with your operations—from essential web presence to full enterprise automation.
          </p>
        </div>

        {/* Live Currency Converter Bar */}
        <CurrencySelector
          selectedCurrency={selectedCurrency}
          onSelectCurrency={setSelectedCurrency}
          activeRate={activeRate}
          isLiveRate={isLiveRate}
          isLoading={isLoading}
        />

        {/* 3-Tier Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const displayPrice =
              tier.baseAmountUsd !== null
                ? `${tier.pricePrefix}${formatAmount(tier.baseAmountUsd)}`
                : tier.staticPrice;

            return (
              <PricingCard
                key={tier.id}
                tier={tier}
                displayPrice={displayPrice}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;