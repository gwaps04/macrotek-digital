// FILE: src/components/FloatingActionDock.jsx
import React from 'react';
import ScrollToTopButton from './ScrollToTopButton';
import ExtendedSiteButton from './ExtendedSiteButton';

const FloatingActionDock = () => {
  return (
    <div
      aria-label="Quick page actions"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3"
    >
      <ScrollToTopButton />
      <ExtendedSiteButton />
    </div>
  );
};

export default FloatingActionDock;