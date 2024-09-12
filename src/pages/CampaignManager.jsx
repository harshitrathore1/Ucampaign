import React, { useState } from 'react';
import CM_Navbar from '../components/CM_Navbar';
import { Icon } from '@iconify/react';
import './CampaignManager.css';
import CampaignReport from '../components/CampaignReport';
import CampaignTable from '../components/CampaignTable';
import CampaignSelection from '../components/CampaignSelection';

const CampaignManager = () => {
  const [newPLA, setnewPLA] = useState(false);
  const campaignData = {
    campaignName: 'Test Campaign',
    status: 'Draft',
    type: 'PLA',
    id: 'AJ3DIPGYF7C9',
    date: '06 Jul \'24 17:58 - Till budget ends',
    budgetLimit: 300.00,
    budgetType: 'Daily',
    adSpends: '-',
    remainingBudget: '-',
    views: '-',
    clicks: '-',
    totalUnitsSold: '-',
    totalRevenue: '-',
    roi: '-',
    ctr: '-',
    cvr: '-',
  };

  return (
    <div className=''>
      <CM_Navbar />
      <div className='flex flex-col md:flex-row'>
        {/* sidebar */}
        <div className="sidebar w-full md:w-[246px] text-xl text-gray-700 h-auto md:h-dvh bg-slate-100">
          <div className="option">
            <Icon icon="typcn:home-outline" />
            <p>Home</p>
          </div>
          <div className="option text-orange-600">
            <Icon icon="fluent:megaphone-loud-28-regular" />
            <p>Campaign Manager</p>
          </div>
          <div className="option">
            <Icon icon="carbon:text-link-analysis" />
            <p>Analysis</p>
          </div>
          <div className="option">
            <Icon icon="clarity:wallet-line" />
            <p>Wallet</p>
          </div>
          <div className="option">
            <Icon icon="tdesign:activity" />
            <p>Activity Logs</p>
          </div>
        </div>

        {/* main-content */}
        {newPLA ? (
          <div className='w-full md:w-[calc(100%-250px)]'>
            <header className='flex w-full justify-between items-center p-2 bg-white border-b-2'>
              <h2 className='text-xl'>New PLA Campaign</h2>
              <div className='p-2 py-1 gap-2 rounded-lg'>
                <Icon icon="carbon:close-outline" className='text-2xl cursor-pointer' onClick={() => { setnewPLA(false) }} />
              </div>
            </header>
            <CampaignSelection />
          </div>
        ) : (
          <div className='flex flex-col w-full md:w-[calc(100%-246px)]'>
            <header className='flex w-full justify-between items-center p-2 bg-white'>
              <h2 className='text-xl'>Campaign Manager</h2>
              <div className='p-2 py-1 gap-2 rounded-lg bg-orange-200'>
                <p>Wallet Balance: ₹0.00</p>
              </div>
            </header>
            <CampaignReport newPLA={newPLA} setnewPLA={setnewPLA} />
            <div className='w-full'>
              <header className='flex flex-col w-full p-2 bg-white'>
                <h2 className='text-xl pb-3'>Campaigns:</h2>
                <div className='flex gap-4 border-b-2 pb-1 border-gray-200'>
                  <button className='p-1 py-0 hover:text-orange-600 hover:bg-gray-200 rounded-lg text-orange-600 bg-gray-200'>All <span className='p-1 py-0 bg-gray-200 rounded-full text-gray-700'>0</span></button>
                  <button className='p-1 py-0 hover:text-orange-600 hover:bg-gray-200 rounded-lg'>Active <span className='p-1 py-0 bg-gray-300 rounded-full text-gray-700'>0</span></button>
                  <button className='p-1 py-0 hover:text-orange-600 hover:bg-gray-200 rounded-lg'>Completed <span className='p-1 py-0 bg-gray-300 rounded-full text-gray-700'>0</span></button>
                </div>
              </header>
              <CampaignTable campaign={campaignData} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CampaignManager











// import React from 'react'
// import { useState } from 'react';
// import CM_Navbar from '../components/CM_Navbar'
// import { Icon } from '@iconify/react';
// import './CampaignManager.css'
// import CampaignReport from '../components/CampaignReport';
// import CampaignTable from '../components/CampaignTable';
// import CampaignSelection from '../components/CampaignSelection';


// const CampaignManager = () => {
//     const [newPLA, setnewPLA] = useState(false)
//     const campaignData = {
//         campaignName: 'Test Campaign',
//         status: 'Draft',
//         type: 'PLA',
//         id: 'AJ3DIPGYF7C9',
//         date: '06 Jul \'24 17:58 - Till budget ends',
//         budgetLimit: 300.00,
//         budgetType: 'Daily',
//         adSpends: '-',
//         remainingBudget: '-',
//         views: '-',
//         clicks: '-',
//         totalUnitsSold: '-',
//         totalRevenue: '-',
//         roi: '-',
//         ctr: '-',
//         cvr: '-',
//       };
//   return (
//     <div className=''>
//         <CM_Navbar />
//         <div className='flex'>
//             {/* sidebar */}
//             <div className="sidebar w-[246px] text-xl text-gray-700 h-dvh bg-slate-100">
//                 <div className="option">
//                     <Icon icon="typcn:home-outline" />
//                     <p>Home</p>
//                 </div>
//                 <div className="option text-orange-600">
//                     <Icon icon="fluent:megaphone-loud-28-regular" />
//                     <p>Campaign Manager</p>
//                 </div>
//                 <div className="option">
//                     <Icon icon="carbon:text-link-analysis" />
//                     <p>Analysis</p>
//                 </div>
//                 <div className="option">
//                     <Icon icon="clarity:wallet-line" />
//                     <p>Wallet</p>
//                 </div>
//                 <div className="option">
//                     <Icon icon="tdesign:activity" />
//                     <p>Activity Logs</p>
//                 </div>
//             </div>

//             {/* main-content */}
//             {newPLA?<div className='w-[calc(100%-250px)]'>
                    
//                     <header className='flex w-full justify-between items-center p-2 bg-white border-b-2'>
//                             <h2 className='text-xl'>New PLA Campaign</h2>
//                             <div className='p-2 py-1 gap-2 rounded-lg  '>
//                                 <Icon icon="carbon:close-outline" className='text-2xl cursor-pointer' onClick={()=>{setnewPLA(false)}}/>
//                             </div>
//                     </header>
//                     <CampaignSelection />
//                 </div>:
//             <div className='flex flex-col w-[calc(100%-246px)]'>
//                 <header className='flex w-full justify-between items-center p-2 bg-white'>
//                     <h2 className='text-xl'>Campaign Manager</h2>
//                     <div className='p-2 py-1 gap-2 rounded-lg bg-orange-200 '>
//                         <p>Wallet Balance: ₹0.00</p>
//                     </div>
//                 </header>
//                 <CampaignReport newPLA={newPLA} setnewPLA={setnewPLA}/>
                
//                 <div className='w-full'>
//                     <header className='flex flex-col w-full p-2 bg-white'>
//                         <h2 className='text-xl pb-3'>Campaigns:</h2>
//                         <div className='flex gap-4 border-b-2 pb-1 border-gray-200'>
//                             <button className='p-1 py-0 hover:text-orange-600 hover:bg-gray-200 rounded-lg text-orange-600 bg-gray-200'>All <span className='p-1 py-0 bg-gray-200 rounded-full text-gray-700'>0</span></button>
//                             <button className='p-1 py-0 hover:text-orange-600 hover:bg-gray-200 rounded-lg'>Active <span className='p-1 py-0 bg-gray-300 rounded-full text-gray-700'>0</span></button>
//                             <button className='p-1 py-0 hover:text-orange-600 hover:bg-gray-200 rounded-lg'>Completed <span className='p-1 py-0 bg-gray-300 rounded-full text-gray-700'>0</span></button>
//                         </div>
//                     </header>
//                     <CampaignTable  campaign={campaignData}/>
//                 </div>
                

//             </div>}
//         </div>
//     </div>
//   )
// }

// export default CampaignManager
