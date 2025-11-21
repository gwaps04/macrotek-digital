import React from 'react';

const Hero = () => {
  return (
    // 1. LAYOUT CONTAINER
    // We use 'container' to keep the images from stretching too wide on huge 4k screens (which causes pixelation).
    // 'mx-auto' keeps it centered.
    <div className="container mx-auto mt-5 pt-5">
      
      {/* 2. CAROUSEL WRAPPER */}
      <div 
        id="heroCarousel" 
        className="carousel slide shadow-lg rounded-3 overflow-hidden" 
        data-bs-ride="carousel" 
        data-bs-pause="false"
      >
        
        {/* INDICATORS */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>

        {/* SLIDES */}
        <div className="carousel-inner">
          
          {/* SLIDE 1 */}
          <div className="carousel-item active" data-bs-interval="4000">
            {/* KEY CHANGE: 
               1. Removed 'height: 628px' (This caused the cropping).
               2. Removed 'objectFit: cover' (This caused the zooming).
               3. Added 'h-auto': Allows the height to shrink/grow naturally so 100% of the image is seen.
            */}
            <img 
              src="/Slide1.png" 
              className="d-block w-100 h-auto" 
              alt="Static Web Development" 
            />
            {/* Overlay Caption (Optional - kept just in case) */}
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
              <h5>Static Web Development</h5>
              <p>Fast, Secure, and Reliable solutions.</p>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="carousel-item" data-bs-interval="4000">
            <img 
              src="/Slide2.png" 
              className="d-block w-100 h-auto" 
              alt="Slide 2" 
            />
          </div>

          {/* SLIDE 3 */}
          <div className="carousel-item" data-bs-interval="4000">
            <img 
              src="/Slide3.png" 
              className="d-block w-100 h-auto" 
              alt="Slide 3" 
            />
          </div>

          {/* SLIDE 4 */}
          <div className="carousel-item" data-bs-interval="4000">
            <img 
              src="/Slide4.png" 
              className="d-block w-100 h-auto" 
              alt="Slide 4" 
            />
          </div>

          {/* SLIDE 5 */}
          <div className="carousel-item" data-bs-interval="4000">
            <img 
              src="/Slide5.png" 
              className="d-block w-100 h-auto" 
              alt="Slide 5" 
            />
          </div>

          {/* SLIDE 6 */}
          <div className="carousel-item" data-bs-interval="4000">
            <img 
              src="/Slide6.png" 
              className="d-block w-100 h-auto" 
              alt="Slide 6" 
            />
          </div>

        </div>

        {/* CONTROLS */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;