import React, { useState } from "react";
import "./info.css";

const Info = () => {
  const [showModal, setShowModal] = useState(false);

  const ownerInfo = {
    whatsappNumber: "123-456-7890",
    rate: "$100/day",
  };

  const handleRentButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Information">
      <div>
        <img src="images/home-1.jpg" alt="" className="home1" />
        <div className="photos">
          <img src="images/home-1.jpg" alt="" className="home2" />
          <img src="images/home-3.jpg" alt="" className="home2" />
          <img src="images/home-1.jpg" alt="" className="home2" />
          <img src="images/home-1.jpg" alt="" className="home2" />
        </div>
      </div>
      <h2>Big Beautiful House</h2>
      <strong className="price">$54150.99</strong>
      <div className="Buttons">
        <button className="AddCart">Contact the owner</button>
        <button className="AddCart" onClick={handleRentButtonClick}>
          Rent
        </button>
      </div>
      <div className="text">
        <h4>
          Random House, situated at 1745 Broadway in New York City, stands as a
          prominent publishing institution. Founded in 1927 by Bennett Cerf and
          Donald Klopfer, it has become a cornerstone of the literary world.
          Over the years, Random House has established itself as a leading
          force in the industry, publishing a vast array of literature spanning
          fiction, non-fiction, and children's books. Its diverse catalog
          boasts works from both established authors and emerging talents.
        </h4>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Owner Information</h2>
            <p>WhatsApp Number: {ownerInfo.whatsappNumber}</p>
            <p>Rate: {ownerInfo.rate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
