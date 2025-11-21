import React from 'react';

const Gallery = () => {
  // Array of your 8 image file names
  const images = [
    "thumb1.png", "thumb2.png", "thumb3.png", "thumb4.png",
    "thumb5.png", "thumb6.png", "thumb7.png", "thumb8.png"
  ];

  return (
    <section className="py-5">
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Recent Projects</h2>
          <p className="text-muted">A glimpse into our latest digital innovations.</p>
        </div>

        {/* THE GALLERY GRID 
            row-cols-1: Mobile (1 image per row) - Big and clear
            row-cols-md-2: Tablet (2 images per row)
            row-cols-lg-4: Desktop (4 images per row) - This keeps them "not too big"
            g-4: Adds consistent gap spacing between images
        */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          
          {images.map((img, index) => (
            <div className="col" key={index}>
              {/* WRAPPER: Keeps the image contained */}
              <div className="overflow-hidden rounded-3 shadow-sm">
                <img 
                  // Pointing to the folder you created in 'public/thumbnails'
                  src={`/thumbnails/${img}`} 
                  className="img-fluid w-100 gallery-img" 
                  alt={`Project Thumbnail ${index + 1}`}
                  // We let Bootstrap's 'img-fluid' handle the width, 
                  // but we can add a max-height if you want them strictly uniform.
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;