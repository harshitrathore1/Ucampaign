import React, { useState } from 'react';
import { FaRocket, FaEye, FaBoxes, FaTrophy, FaClipboardList } from 'react-icons/fa';
import AdGroupComponent from './AdGroupComponent';
import CampaignBasicDetails from './CampaignBasicDetail';

const CampaignSelection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStep = () => {

    switch (currentStep) {
      case 1:
        return (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="campaign-name">
                Campaign Name
              </label>
              <input
                id="campaign-name"
                type="text"
                placeholder="Enter campaign name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Reach your goals with the right strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <FaRocket className="text-4xl text-blue-500 mx-auto mb-4" />, title: "ROI Booster", description: "Guaranteed increase in revenue for high ROI!", stats: "25k+ Sellers used, 1.5x Increase in ROI" },
                { icon: <FaEye className="text-4xl text-purple-500 mx-auto mb-4" />, title: "New Listing Visibility", description: "Reach more users with your new listings.", stats: "12k+ Sellers used, 2x Increase in Views" },
                { icon: <FaBoxes className="text-4xl text-yellow-500 mx-auto mb-4" />, title: "Move Slow Inventory", description: "Unlock slow moving inventory with low bids.", stats: "10k+ Sellers used, 12% Increase in Sales" },
                { icon: <FaTrophy className="text-4xl text-red-500 mx-auto mb-4" />, title: "Beat Competition", description: "Keep your listings on top. Stay ahead of competition.", stats: "15k+ Sellers used, 50k+ products Stayed on top" },
                { icon: <FaClipboardList className="text-4xl text-gray-500 mx-auto mb-4" />, title: "Custom Selection", description: "Manually select listings or upload CSV.", stats: "" }
              ].map((strategy, index) => (
                <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  {strategy.icon}
                  <h4 className="text-lg font-semibold text-center mb-2">{strategy.title}</h4>
                  <p className="text-center text-gray-600 mb-2">{strategy.description}</p>
                  {strategy.stats && <p className="text-center text-sm text-green-600">{strategy.stats}</p>}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Select Product</h3>
              <div className="border p-4 rounded-lg">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="product-1"
                    checked={selectedProduct === 'product-1'}
                    onChange={() => setSelectedProduct('product-1')}
                    className="mr-2 w-5 h-5"
                  />
                  <label htmlFor="product-1" className="flex items-center">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/8/337686978/TA/CN/WK/14357089/mdr-ex150ap-sony-microphone-earbuds-250x250.jpg" alt="KNB 201 Bluetooth Headset" className="w-12 h-12 mr-4 rounded-full shadow-sm" />
                    <div>
                      <h4 className="font-semibold text-gray-700">KNB 201 Bluetooth Headset</h4>
                      <p className="text-gray-600">SKU ID: Headphone 01</p>
                      <p className="text-gray-600">Stock: 20, Views: 85, Clicks: 6, CTR: 7.06%</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Campaign Type</label>
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  id="cpc"
                  name="campaignType"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="cpc" className="mr-4">CPC (Cost Per Click)</label>
                <input
                  type="radio"
                  id="smartROI"
                  name="campaignType"
                  className="mr-2"
                />
                <label htmlFor="smartROI">SmartROI</label>
              </div>
              <p className="text-gray-600">CPC campaigns help you to achieve visibility for your ads</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Campaign Duration</label>
              <div className="flex items-center flex-wrap">
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                />
                <span className="mx-2">to</span>
                <input
                  type="date"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                />
                <label className="flex items-center ml-4">
                  <input type="checkbox" className="mr-2" />
                  No End Date
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Campaign Budget Limit</label>
              <div className="flex items-center mb-4 flex-wrap">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2">
                  <option>Daily Budget Limit</option>
                  <option>Total Budget Limit</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter campaign total budget (min ₹300)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="text-gray-600">This is your campaign budget limit. Your campaign will not spend more money than your campaign budget limit.</p>
              <p className="text-gray-600">Now your Smart Wallet powers your campaigns directly by blocking smaller amounts as and when your campaigns needs more money.</p>
              <p className="text-gray-600">This gives you the freedom to create any number of campaigns with any budget limit. All these campaigns will continue to run till there is money in your Smart Wallet. <a href="#" className="text-blue-500 underline">See an example</a></p>
            </div>
            <AdGroupComponent />


          </div>
        );
      case 3:
        return (
          <div>
            <CampaignBasicDetails />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full  mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center">Campaign Selection</h2>
        <div className="flex justify-center mt-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="relative flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${currentStep === step ? 'bg-blue-500' : 'bg-gray-200 text-gray-500'}`}
              >
                {step}
              </div>
              {step < 3 && (
                <div className="flex-1 h-1 mx-2 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {renderStep()}
      <div className="mt-6 flex justify-between">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CampaignSelection;
