import React from 'react';

const VideoSection = () => {
  return (
    // 'bg-dark' creates a nice visual break between the white/light sections
    // 'text-white' makes the text readable on the dark background
    <section className="py-5 bg-dark text-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Digital Transformation Matters</h2>
          <p className="lead text-white-50">
            Discover how modern technology acts as the backbone for security, efficiency, and growth in today's business landscape.
          </p>
        </div>

        {/* The Video Wrapper 
            'row justify-content-center' ensures the video is centered
        */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            
            {/* BOOTSTRAP RATIO HELPER
                'ratio': Activates the responsive ratio system
                'ratio-16x9': Locks the aspect ratio to standard Widescreen (YouTube format)
                'shadow-lg': Adds a deep shadow to make the video 'pop'
                'rounded': Rounds the corners for a modern look
            */}
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
              <iframe 
                src="https://www.youtube.com/embed/iMAX-I2vsYw?rel=0" 
                title="The Importance of Modern Technology in Business" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;