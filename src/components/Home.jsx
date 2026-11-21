// FILE: src/components/Home.jsx
import React from 'react';
import Hero from './Hero';
import Clients from './Clients';
import WhatWeDo from './WhatWeDo';
import VideoSection from './VideoSection';
import Industries from './Industries';
import Gallery from './Gallery';
import ServiceTags from './ServiceTags';
import WhyTrust from './WhyTrust';
import FloatingActionDock from './FloatingActionDock';

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Clients />
      <WhatWeDo />
      <VideoSection />
      <ServiceTags />
      <WhyTrust />
      <FloatingActionDock />
    </React.Fragment>
  );
};

export default Home;