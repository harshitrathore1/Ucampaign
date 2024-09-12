// CampaignTable.js

import React from 'react';
import { FaRupeeSign, FaRegEdit, FaRegTrashAlt, FaRegClock } from 'react-icons/fa';

const CampaignTable = ({ campaign }) => {
  return (
    <div className="p-6">
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg scrollbar-thin w-full">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <tr>
              {[
                'Campaign Name',
                'Date',
                'Campaign Budget Limit',
                'Ad Spends',
                'Remaining Budget',
                'Views',
                'Clicks',
                'Total Units Sold',
                'Total Revenue',
                'ROI',
                'CTR',
                'CVR',
                'Action',
              ].map((header) => (
                <th key={header} className="p-4 border-r last:border-r-0 text-sm font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-100 transition duration-300">
              <td className="p-4 border-r last:border-r-0">
                <div className="flex items-center space-x-2">
                  <div><input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                  <span className="text-blue-500">{campaign.campaignName}</span></div>
                  <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">{campaign.status}</span>
                  <span className="ml-2 bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-xs">{campaign.type}</span>
                  <span className="ml-2 text-gray-500 text-xs">{campaign.id}</span>
                </div>
              </td>
              <td className="p-4 border-r last:border-r-0">{campaign.date}</td>
              <td className="p-4 border-r last:border-r-0">
                <div className="flex items-center">
                  <FaRupeeSign className="mr-1 text-gray-700" />
                  <span>{campaign.budgetLimit}</span>
                  <span className="ml-1 text-gray-500">{campaign.budgetType}</span>
                </div>
              </td>
              {[campaign.adSpends, campaign.remainingBudget, campaign.views, campaign.clicks, campaign.totalUnitsSold, campaign.totalRevenue, campaign.roi, campaign.ctr, campaign.cvr].map((content, index) => (
                <td key={index} className="p-4 border-r last:border-r-0 text-center">
                  {content}
                </td>
              ))}
              <td className="p-4 flex space-x-2 justify-center">
                <FaRegClock className="text-gray-500 cursor-pointer hover:text-blue-500 transition duration-300" />
                <FaRegEdit className="text-gray-500 cursor-pointer hover:text-blue-500 transition duration-300" />
                <FaRegTrashAlt className="text-gray-500 cursor-pointer hover:text-red-500 transition duration-300" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;








// import React from 'react';
// import { FaRupeeSign, FaRegEdit, FaRegTrashAlt, FaRegClock } from 'react-icons/fa';

// const CampaignTable = ({ campaign }) => {
//   return (
//     <div className="p-6">
//       <div className="overflow-x-auto bg-white rounded-lg shadow-lg scrollbar-thin w-full">
//         <table className="min-w-full table-auto">
//           <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
//             <tr>
//               {[
//                 'Campaign Name',
//                 'Date',
//                 'Campaign Budget Limit',
//                 'Ad Spends',
//                 'Remaining Budget',
//                 'Views',
//                 'Clicks',
//                 'Total Units Sold',
//                 'Total Revenue',
//                 'ROI',
//                 'CTR',
//                 'CVR',
//                 'Action',
//               ].map((header) => (
//                 <th key={header} className="p-4 border-r last:border-r-0 text-sm font-semibold">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             <tr className="hover:bg-gray-100 transition duration-300">
//               <td className="p-4 border-r last:border-r-0">
//                 <div className="flex items-center space-x-2">
//                   <div><input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
//                   <span className="text-blue-500">{campaign.campaignName}</span></div>
//                   <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">{campaign.status}</span>
//                   <span className="ml-2 bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-xs">{campaign.type}</span>
//                   <span className="ml-2 text-gray-500 text-xs">{campaign.id}</span>
//                 </div>
//               </td>
//               <td className="p-4 border-r last:border-r-0">{campaign.date}</td>
//               <td className="p-4 border-r last:border-r-0">
//                 <div className="flex items-center">
//                   <FaRupeeSign className="mr-1 text-gray-700" />
//                   <span>{campaign.budgetLimit}</span>
//                   <span className="ml-1 text-gray-500">{campaign.budgetType}</span>
//                 </div>
//               </td>
//               {[campaign.adSpends, campaign.remainingBudget, campaign.views, campaign.clicks, campaign.totalUnitsSold, campaign.totalRevenue, campaign.roi, campaign.ctr, campaign.cvr].map((content, index) => (
//                 <td key={index} className="p-4 border-r last:border-r-0 text-center">
//                   {content}
//                 </td>
//               ))}
//               <td className="p-4 flex space-x-2 justify-center">
//                 <FaRegClock className="text-gray-500 cursor-pointer hover:text-blue-500 transition duration-300" />
//                 <FaRegEdit className="text-gray-500 cursor-pointer hover:text-blue-500 transition duration-300" />
//                 <FaRegTrashAlt className="text-gray-500 cursor-pointer hover:text-red-500 transition duration-300" />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CampaignTable;
