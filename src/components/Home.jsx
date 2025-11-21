import React from 'react';
import Hero from './Hero';
import Clients from './Clients';
import WhatWeDo from './WhatWeDo';
import VideoSection from './VideoSection';
import Industries from './Industries';
import Gallery from './Gallery';
import ServiceTags from './ServiceTags';
import WhyTrust from './WhyTrust';

const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <WhatWeDo />
      <VideoSection />
      <Industries />
      <Gallery />
      <ServiceTags />
      <WhyTrust />
    </>
  );
};

export default Home;