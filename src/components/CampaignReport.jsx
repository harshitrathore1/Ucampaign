
import React from 'react';

const CampaignReport = (props) => {
  const toNewPLA = () => {
    props.setnewPLA(true);
    console.log(props.newPLA);
  };

  return (
    <div className="p-4 bg-blue-100 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-xl font-semibold mb-2 md:mb-0">Showing Campaign:</h1>
        <button
          onClick={toNewPLA}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 py-1 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Create Campaign
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0">
        <div className="flex flex-wrap space-x-0 space-y-2 md:space-y-0 md:space-x-4">
          <button className="bg-white border rounded-lg px-4 py-2 w-full md:w-auto">
            Custom: 22-Jun-24 - 06-Jul-24
          </button>
          <button className="bg-white border rounded-lg px-4 py-2 w-full md:w-auto">
            Ad Product
          </button>
          <button className="bg-white border rounded-lg px-4 py-2 w-full md:w-auto">
            Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {[
          { label: 'Ad Spends', value: '₹0' },
          { label: 'ROI', value: '0' },
          { label: 'Views', value: '0' },
          { label: 'Clicks', value: '0' },
          { label: 'CTR', value: '-' },
          { label: 'Total Units Sold', value: '0' },
          { label: 'CVR', value: '-' },
          { label: 'Revenue', value: '₹0' },
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <p className="text-gray-600">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignReport;























// import React, { useState } from 'react'
// import { FaRupeeSign } from 'react-icons/fa';
// import { Link } from 'react-router-dom';



// const CampaignReport = (props) => {
    
//     const toNewPLA = () => {
//     //   props.newPLA = true;
//       props.setnewPLA(true)
//       console.log(props.newPLA)
//     }
    
//   return (
//     <div className="p-4 bg-blue-100 w-full">
//     <div className="flex justify-between items-center mb-4">
//       <h1 className="text-xl font-semibold">Showing Campaign:</h1>
      
//         <button onClick={toNewPLA} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-2 py-1 rounded-lg hover:bg-blue-600 transition duration-300">
//             Create Campaign
//         </button>
      
//     </div>
//     <div className="flex justify-between mb-4">
//       <div className="flex space-x-4">
//         <button className="bg-white border rounded-lg px-4 py-2">
//           Custom: 22-Jun-24 - 06-Jul-24
//         </button>
//         <button className="bg-white border rounded-lg px-4 py-2">
//           Ad Product
//         </button>
//         <button className="bg-white border rounded-lg px-4 py-2">
//           Filters
//         </button>
//       </div>
//     </div>
//     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
//       {[
//         { label: 'Ad Spends', value: '₹0' },
//         { label: 'ROI', value: '0' },
//         { label: 'Views', value: '0' },
//         { label: 'Clicks', value: '0' },
//         { label: 'CTR', value: '-' },
//         { label: 'Total Units Sold', value: '0' },
//         { label: 'CVR', value: '-' },
//         { label: 'Revenue', value: '₹0' },
//       ].map((item, index) => (
//         <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
//           <div>
//             <p className="text-gray-600">{item.label}</p>
//             <p className="text-2xl font-bold">{item.value}</p>
//           </div>
          
//         </div>
//       ))}
//     </div>
//   </div>
//   )
// }

// export default CampaignReport
