import React, { useState } from 'react';

const AdGroupComponent = () => {
  const [bid, setBid] = useState({
    homePage: 4,
    topSearchPage: 4,
    restSearchPage: 4,
    topBrowsePage: 4,
  });

  const handleBidChange = (placement, value) => {
    setBid((prevBid) => ({
      ...prevBid,
      [placement]: value,
    }));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl w-full mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Ad Groups</h2>
      <div className="flex flex-col mb-4">
        <div className="text-lg font-medium text-gray-700">Headphones</div>
        <div className="text-sm text-gray-500">1 Products</div>
      </div>
      <div className="flex justify-between items-center py-2 border-b">
        <span className="text-gray-600">Your Average Bid: ₹ 4</span>
        <button className="text-blue-500 hover:underline">+ set Limit</button>
      </div>
      <div className="mt-6 space-y-4">
        {Object.keys(bid).map((placement) => (
          <div key={placement} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <span className="capitalize font-medium text-gray-700">{placement.replace(/([A-Z])/g, ' $1')}</span>
            <div className="flex items-center">
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleBidChange(placement, Math.max(0, bid[placement] - 1))}
              >
                -
              </button>
              <input
                type="text"
                value={bid[placement]}
                readOnly
                className="mx-2 w-12 text-center border rounded"
              />
              <button
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => handleBidChange(placement, bid[placement] + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="text-blue-500 hover:underline">+ Add Keywords</button>
        <div className="text-xs text-gray-500 mt-1">
          Keyword targeting is applicable only on search pages.{' '}
          <a href="#" className="text-blue-500 hover:underline">Know more</a>
        </div>
      </div>
    </div>
  );
};

export default AdGroupComponent;
