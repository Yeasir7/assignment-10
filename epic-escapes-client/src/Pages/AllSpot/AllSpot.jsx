import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../Components/Card';

const AllSpot = () => {
    const loadedSpots = useLoaderData()
    
    return (
      <div>
        <h2 className="text-3xl font-bold text-center mt-8">
          All Tourists Spot Page
        </h2>
        {/* Content for All Tourists Spot will go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
          {loadedSpots.map((spot) => (
            <Card key={spot._id} spot={spot}></Card>
          ))}
        </div>
      </div>
    );
};

export default AllSpot;