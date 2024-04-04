import React from "react";

const RecentCard = () => {
  // Dummy data for the homes
  const homes = [
    { id: 1, imgSrc: "images/home-1.jpg", title: "Beautiful House", rating: 4.5, price: 21650.99, description: "Description for Beautiful House." },
    { id: 2, imgSrc: "images/home-2.jpg", title: "Luxury Villa", rating: 4.7, price: 45550.99, description: "Description for Luxury Villa." },
    // Add more homes as needed
  ];

  const handleSeeMore = (home) => {
    // Create the content to display in the new window
    const newWindowContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${home.title}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; padding: 20px; }
          .home-image { width: 100%; max-width: 600px; height: auto; }
          .home-title { font-size: 24px; margin-top: 20px; }
          .home-price { font-size: 20px; margin-top: 10px; }
          .home-description { font-size: 16px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <img src="${home.imgSrc}" alt="${home.title}" class="home-image">
        <div class="home-title">${home.title}</div>
        <div class="home-price">$${home.price}</div>
        <div class="home-description">${home.description}</div>
      </body>
      </html>
    `;

    // Open the new window
    const newWindow = window.open("", "_blank");
    newWindow.document.write(newWindowContent);
    newWindow.document.close(); // Ensure the document is fully loaded
  };

  return (
    <>
      <section className="slider">
        {homes.map((home) => (
          <div className="card" key={home.id} onClick={() => handleSeeMore(home)}>
            <div className="card-content">
              <img src={home.imgSrc} alt="" className="card-img" />
              <h1 className="card-title">{home.title}</h1>
              <div className="card-body">
                <div className="card-star">
                  <span className="rating-value">{home.rating}</span>
                  <span className="star">&#9733;</span>
                </div>
                <p className="card-price">${home.price}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-success" onClick={(e) => {e.stopPropagation(); handleSeeMore(home);}}>See More</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default RecentCard;