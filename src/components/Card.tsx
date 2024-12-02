import React from "react";

const Card = ({ imgSrc, title, description }) => {
  // Split the title into name and status
  const [name, status] = title.split(" Verified Buyer");

  return (
    <div className="card">
      <div className="row">
        <img src={imgSrc} alt={name} />
        <h2>
          {name}
          <br />
          <span style={{ color: "#C06F9F", fontWeight: 900 }}>
            {status.trim()} Verified Buyer
          </span>
        </h2>
      </div>
      <p>"{description}"</p>
    </div>
  );
};

export default Card;
