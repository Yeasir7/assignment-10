import React from "react";

const Card = ({ spot }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={
              spot.image || "/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            }
            alt={spot.spotName || "Tourist Spot"}
            className="h-64 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {spot.country_Name || "Tourist Spot"}
            {spot.seasonality && (
              <div className="badge badge-secondary">{spot.seasonality}</div>
            )}
          </h2>
          <p>
            {spot.description ||
              spot.short_description ||
              "No description available"}
          </p>
          <div className="flex justify-between items-center my-2">
            <span className="text-sm font-semibold">
              Cost: ${spot.average_cost || "N/A"}
            </span>
            <span className="text-sm">⏱️ {spot.travel_time || "N/A"} days</span>
          </div>
          <div className="card-actions justify-end">
            {spot.country && (
              <div className="badge badge-outline">{spot.country}</div>
            )}
            {spot.location && (
              <div className="badge badge-outline">{spot.location}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
