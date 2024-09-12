import React from 'react'
import { Icon } from '@iconify/react';

const CM_Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-3 bg-white border'>
      {/* Brand-Logo */}
      <div>
        <img src="https://uoons.com/assets/front/img/logo.png" alt="Brand-Logo" className="h-8 w-auto"/>
      </div>
      {/* Certain Options with UserId */}
      <div className='text-2xl flex items-center gap-6'>
        <Icon icon="hugeicons:menu-square"/>
        <Icon icon="material-symbols-light:live-help-outline-sharp" className='text-3xl'/>
        <Icon icon="ion:notifications-outline" />
        
        <div className='flex items-center p-2 py-1 gap-2 border rounded-lg'>
          <Icon icon="solar:user-circle-linear" className=''/>
          <p className='text-xl hidden md:block'>User-Name</p>
        </div>
      </div>
    </div>
  )
}

export default CM_Navbar










// import React from 'react'
// import { Icon } from '@iconify/react';

// const CM_Navbar = () => {
//   return (
//     <div className='w-full flex items-center justify-between p-3 bg-white border'>
//       {/* Brand-Logo */}
//       <div>
//         <img src="https://uoons.com/assets/front/img/logo.png" alt="Brand-Logo" />
//       </div>
//       {/* Certain Options with UserId */}
//       <div className='text-2xl flex items-center gap-6'>
//         <Icon icon="hugeicons:menu-square"/>
//         <Icon icon="material-symbols-light:live-help-outline-sharp" className='text-3xl'/>
//         <Icon icon="ion:notifications-outline" />
        
//         <div className='flex items-center p-2 py-1 gap-2 border rounded-lg'>
//           <Icon icon="solar:user-circle-linear" className=''/>
//           <p className='text-xl'>User-Name</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CM_Navbar
