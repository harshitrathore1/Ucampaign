import React from 'react';

const CampaignBasicDetails = () => {
  return (
    <div className=" mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">New PLA Campaign</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-medium mb-2">Campaign Basic Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <p className="bg-gray-100 p-2 rounded">Test Campaign2</p>
          </div>
          <div>
            <label className="block text-gray-700">Cost Model</label>
            <p className="bg-gray-100 p-2 rounded">CPC</p>
          </div>
          <div>
            <label className="block text-gray-700">Duration</label>
            <p className="bg-gray-100 p-2 rounded">From 09 Jul '24 15:50 to 10 Jul '24 16:05</p>
          </div>
          <div>
            <label className="block text-gray-700">Budget Type</label>
            <p className="bg-gray-100 p-2 rounded">Daily</p>
          </div>
          <div>
            <label className="block text-gray-700">Campaign Budget Limit</label>
            <p className="bg-gray-100 p-2 rounded">₹ 300.00</p>
          </div>
          <div>
            <label className="block text-gray-700">Equally Divide Budget</label>
            <p className="bg-gray-100 p-2 rounded">No</p>
          </div>
          <div>
            <label className="block text-gray-700">No. of Adgroups</label>
            <p className="bg-gray-100 p-2 rounded">1</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h2 className="text-xl font-medium mb-2">Ad Group Details</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Headphones</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Home Page</p>
              <p className="bg-white p-2 rounded border">₹ 4</p>
            </div>
            <div>
              <p className="font-medium">Top of Search Page</p>
              <p className="bg-white p-2 rounded border">₹ 4</p>
            </div>
            <div>
              <p className="font-medium">Rest of Search Page</p>
              <p className="bg-white p-2 rounded border">₹ 4</p>
            </div>
            <div>
              <p className="font-medium">Top of Browse Page</p>
              <p className="bg-white p-2 rounded border">₹ 4</p>
            </div>
            <div>
              <p className="font-medium">Rest of Browse Page</p>
              <p className="bg-white p-2 rounded border">₹ 4</p>
            </div>
            <div>
              <p className="font-medium">Product Page</p>
              <p className="bg-white p-2 rounded border">₹ 4</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end mt-6">
        {/* <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Back</button> */}
        <div>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2">Discard Campaign</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Create Campaign</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignBasicDetails;
