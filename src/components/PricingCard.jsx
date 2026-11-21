// FILE: src/components/PricingCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MinimalCheckIcon } from './PricingIcons';

const THEME_STYLES = {
  bronze: {
    card: 'bg-white ring-1 ring-slate-200/90 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/50',
    eyebrow: 'text-amber-800 bg-orange-100/70 ring-1 ring-inset ring-amber-700/20',
    iconBox: 'bg-gradient-to-br from-orange-100 via-amber-100/80 to-orange-200/60 text-amber-800 ring-1 ring-inset ring-amber-700/25 shadow-sm',
    title: 'text-slate-900',
    description: 'text-slate-600',
    divider: 'border-slate-100',
    price: 'text-slate-900',
    note: 'text-slate-500',
    featureText: 'text-slate-600',
    checkColor: 'text-amber-700',
    cta: 'bg-slate-900 text-white hover:bg-indigo-600',
  },
  silver: {
    card: 'bg-slate-900 ring-2 ring-indigo-500/60 shadow-2xl shadow-indigo-950/25 lg:-translate-y-3 hover:shadow-indigo-500/25',
    eyebrow: 'text-slate-100 bg-slate-700/75 ring-1 ring-inset ring-slate-300/35',
    iconBox: 'bg-gradient-to-br from-slate-600/85 via-slate-700/90 to-slate-800 text-slate-100 ring-1 ring-inset ring-slate-300/40 shadow-sm',
    title: 'text-white',
    description: 'text-slate-300',
    divider: 'border-slate-800',
    price: 'text-white',
    note: 'text-slate-400',
    featureText: 'text-slate-300',
    checkColor: 'text-indigo-400',
    cta: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/30',
  },
  gold: {
    card: 'bg-white ring-1 ring-slate-200/90 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/50',
    eyebrow: 'text-yellow-800 bg-yellow-100/75 ring-1 ring-inset ring-yellow-600/25',
    iconBox: 'bg-gradient-to-br from-yellow-100 via-amber-100/90 to-yellow-200/70 text-yellow-700 ring-1 ring-inset ring-yellow-600/30 shadow-sm',
    title: 'text-slate-900',
    description: 'text-slate-600',
    divider: 'border-slate-100',
    price: 'text-slate-900',
    note: 'text-slate-500',
    featureText: 'text-slate-600',
    checkColor: 'text-yellow-700',
    cta: 'bg-slate-900 text-white hover:bg-indigo-600',
  },
};

const PricingCard = ({ tier, displayPrice }) => {
  const styles = THEME_STYLES[tier.variant];
  const TierIcon = tier.icon;
  const ctaClasses = `w-full min-h-[48px] inline-flex justify-center items-center rounded-full px-6 py-3.5 text-sm font-bold shadow-lg transition-colors duration-300 mt-auto ${styles.cta}`;

  return (
    <article className={`relative flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${styles.card}`}>
      {tier.variant === 'silver' && (
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      )}

      <div className="relative z-10 flex flex-col flex-grow">
        {/* Top Eyebrow & Metallic Business Icon */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase ${styles.eyebrow}`}>
            {tier.eyebrow}
          </span>
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${styles.iconBox}`}>
            <TierIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Title & Summary */}
        <h2 className={`brand-font text-2xl font-bold tracking-tight mb-3 ${styles.title}`}>
          {tier.title}
        </h2>
        <p className={`text-sm leading-relaxed mb-6 ${styles.description}`}>
          {tier.description}
        </p>

        {/* Pricing Block */}
        <div className={`pb-6 mb-6 border-b ${styles.divider}`}>
          <div className="text-3xl sm:text-4xl font-extrabold tracking-tight brand-font">
            <span className={styles.price}>{displayPrice}</span>
          </div>
          {tier.priceNote && (
            <p className={`text-xs font-medium mt-2 leading-relaxed ${styles.note}`}>
              {tier.priceNote}
            </p>
          )}
        </div>

        {/* Feature Checklist */}
        <ul className={`flex-grow space-y-3.5 text-sm mb-8 ${styles.featureText}`}>
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className={`mt-0.5 shrink-0 ${styles.checkColor}`}>
                <MinimalCheckIcon className="w-4 h-4" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        {tier.ctaHref ? (
          <a
            href={tier.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaClasses}
          >
            {tier.ctaLabel}
          </a>
        ) : (
          <Link to={tier.ctaTo || '/contact'} className={ctaClasses}>
            {tier.ctaLabel}
          </Link>
        )}
      </div>
    </article>
  );
};

export default PricingCard;