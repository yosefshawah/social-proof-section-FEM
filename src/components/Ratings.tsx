import React from "react";
import Star from "../../images/icon-star.svg";

const Ratings = ({ ratingsData }) => {
  return (
    <div className="ratings">
      {ratingsData.map((item, index) => (
        <div key={index}>
          <p>
            {item.stars && (
              <>
                {Array(item.stars)
                  .fill(null)
                  .map((_, i) => (
                    <img
                      key={i}
                      src={Star}
                      alt="star"
                      style={{ display: "inline" }}
                    />
                  ))}
              </>
            )}
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
