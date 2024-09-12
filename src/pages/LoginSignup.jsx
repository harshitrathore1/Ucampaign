import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const LoginSignup2 = () => {
  const [loginForm, setIsLoginForm] = useState(true);
  const [otpFieldVisible, setOtpFieldVisible] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [message, setMessage] = useState('');
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  
  const toggleForm = () => {
    setIsLoginForm(!loginForm);
    setOtpFieldVisible(false);
    setIsOtpVerified(false);
    setMessage('');
    reset();
  };
  
  const handleGenerateOtp = async (data) => {
    try {
      const formData = new FormData();
      formData.append('mobile_no', data.mobileNumber);
      formData.append('token', '1234');
      formData.append('referred_by', data.name);

      const response = await axios.post('/api/sendOTP', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Channel-Code': 'ANDROID',
        },
      });

      console.log('OTP Generation Response:', response.data);

      if (response.data.status === 'success') {
        setOtpFieldVisible(true);
        setMessage('OTP has been sent successfully, please check your phone.');
      } else {
        setMessage('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP', error);
      setMessage('Error sending OTP. Please try again.');
    }
  };

  const handleOtpVerification = async (data) => {
    try {
      const response = await axios.post('/api/verifyOTP', {
        otp: data.otp,
        mobileNumber: data.mobileNumber,
      });

      console.log('OTP Verification Response:', response.data);

      if (response.data.status === 'success') {
        setIsOtpVerified(true);
        setMessage('OTP verified successfully.');
      } else {
        setMessage('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP', error);
      setMessage('Error verifying OTP. Please try again.');
    }
  };

  const handleRegister = (data) => {
    if (otpFieldVisible) {
      handleOtpVerification(data);
    } else {
      handleGenerateOtp(data);
    }
  };

  const handleLogin = (data) => {
    // Perform login action here
    // Placeholder function
    console.log('Login Data:', data);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-8 relative z-20 w-full max-w-md mx-auto my-10">
      <img src="https://uoons.com/assets/front/img/logo.png" alt="uoonsLogo" className="mx-auto my-10" />
      <div className="flex justify-between mb-6 border-b-2 border-gray-200 pb-3">
        <h2
          className={`text-2xl font-semibold cursor-pointer transition-colors duration-300 ${loginForm ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
          onClick={toggleForm}
        >
          Login
        </h2>
        <h2
          className={`text-2xl font-semibold cursor-pointer transition-colors duration-300 ${!loginForm ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
          onClick={toggleForm}
        >
          Register
        </h2>
      </div>

      {loginForm ? (
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="mobileNumber1">
              Mobile Number
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="mobileNumber1"
              type="text"
              placeholder="Enter your mobile number"
              {...register('mobileNumber', { required: 'Mobile number is required' })}
            />
            {errors.mobileNumber && <p className="text-red-500 text-xs italic mt-1">{errors.mobileNumber.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password.message}</p>}
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              <input className="mr-2 leading-tight" type="checkbox" />
              Remember Me
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot password?
            </a>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="mobileNumber"
              type="text"
              placeholder="Enter your mobile number"
              {...register('mobileNumber', { required: 'Mobile number is required' })}
            />
            {errors.mobileNumber && <p className="text-red-500 text-xs italic mt-1">{errors.mobileNumber.message}</p>}
          </div>
          <div className="flex items-center justify-between mb-6">
            <button
              className="bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-indigo-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Generate OTP
            </button>
          </div>
          {otpFieldVisible && (
            <>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
                  OTP
                </label>
                <input
                  className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="otp"
                  type="text"
                  placeholder="Enter the OTP"
                  {...register('otp', { required: 'OTP is required' })}
                />
                {errors.otp && <p className="text-red-500 text-xs italic">{errors.otp.message}</p>}
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-indigo-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                type="submit"
              >
                Verify OTP
              </button>
            </>
          )}
          {message && <p className={`mt-4 text-sm ${isOtpVerified ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        </form>
      )}
    </div>
  );
};

export default LoginSignup2;















// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// const LoginSignup2 = () => {
//   const [loginForm, setIsLoginForm] = useState(true);
//   const [otpFieldVisible, setOtpFieldVisible] = useState(false);
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [message, setMessage] = useState('');
  
//   const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
  
//   const toggleForm = () => {
//     setIsLoginForm(!loginForm);
//     setOtpFieldVisible(false);
//     setIsOtpVerified(false);
//     setMessage('');
//     reset();
//   };
  
//   const handleGenerateOtp = async (data) => {
//     try {
//       const formData = new FormData();
//       formData.append('mobile_no', data.mobileNumber);
//       formData.append('token', '1234');
//       formData.append('referred_by', data.name);

//       const response = await axios.post('/api/sendOTP', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Channel-Code': 'ANDROID',
//         },
//       });

//       console.log('OTP Generation Response:', response.data);

//       if (response.data.status === 'success') {
//         setOtpFieldVisible(true);
//         setMessage('OTP has been sent successfully, please check your phone.');
//       } else {
//         setMessage('Failed to send OTP. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error sending OTP', error);
//       setMessage('Error sending OTP. Please try again.');
//     }
//   };

//   const handleOtpVerification = async (data) => {
//     try {
//       const response = await axios.post('/api/verifyOTP', {
//         otp: data.otp,
//         mobileNumber: data.mobileNumber,
//       });

//       console.log('OTP Verification Response:', response.data);

//       if (response.data.status === 'success') {
//         setIsOtpVerified(true);
//         setMessage('OTP verified successfully.');
//       } else {
//         setMessage('Invalid OTP. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error verifying OTP', error);
//       setMessage('Error verifying OTP. Please try again.');
//     }
//   };

//   const handleRegister = (data) => {
//     if (otpFieldVisible) {
//       handleOtpVerification(data);
//     } else {
//       handleGenerateOtp(data);
//     }
//   };

//   const handleLogin = (data) => {
//     // Perform login action here
//     // Placeholder function
//     console.log('Login Data:', data);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-8 relative z-20 w-[400px] mx-auto my-10">
//       <img src="https://uoons.com/assets/front/img/logo.png" alt="uoonsLogo" className="mx-auto my-10" />
//       <div className="flex justify-between mb-6 border-b-2 border-gray-200 pb-3">
//         <h2
//           className={`text-2xl font-semibold cursor-pointer transition-colors duration-300 ${loginForm ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
//           onClick={toggleForm}
//         >
//           Login
//         </h2>
//         <h2
//           className={`text-2xl font-semibold cursor-pointer transition-colors duration-300 ${!loginForm ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
//           onClick={toggleForm}
//         >
//           Register
//         </h2>
//       </div>

//       {loginForm ? (
//         <form onSubmit={handleSubmit(handleLogin)}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="mobileNumber1">
//               Mobile Number
//             </label>
//             <input
//               className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               id="mobileNumber1"
//               type="text"
//               placeholder="Enter your mobile number"
//               {...register('mobileNumber', { required: 'Mobile number is required' })}
//             />
//             {errors.mobileNumber && <p className="text-red-500 text-xs italic mt-1">{errors.mobileNumber.message}</p>}
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               {...register('password', { required: 'Password is required' })}
//             />
//             {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password.message}</p>}
//           </div>
//           <div className="flex items-center justify-between mb-4">
//             <label className="block text-gray-700 text-sm font-medium mb-2">
//               <input className="mr-2 leading-tight" type="checkbox" />
//               Remember Me
//             </label>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-red-600 hover:to-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Login
//             </button>
//             <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
//               Forgot password?
//             </a>
//           </div>
//         </form>
//       ) : (
//         <form onSubmit={handleSubmit(handleRegister)}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
//               Name
//             </label>
//             <input
//               className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               id="name"
//               type="text"
//               placeholder="Enter your name"
//               {...register('name', { required: 'Name is required' })}
//             />
//             {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="mobileNumber">
//               Mobile Number
//             </label>
//             <input
//               className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//               id="mobileNumber"
//               type="text"
//               placeholder="Enter your mobile number"
//               {...register('mobileNumber', { required: 'Mobile number is required' })}
//             />
//             {errors.mobileNumber && <p className="text-red-500 text-xs italic mt-1">{errors.mobileNumber.message}</p>}
//           </div>
//           <div className="flex items-center justify-between mb-6">
//             <button
//               className="bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-indigo-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
//               type="submit"
//             >
//               Generate OTP
//             </button>
//           </div>
//           {otpFieldVisible && (
//             <>
//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
//                   OTP
//                 </label>
//                 <input
//                   className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   id="otp"
//                   type="text"
//                   placeholder="Enter the OTP"
//                   {...register('otp', { required: 'OTP is required' })}
//                 />
//                 {errors.otp && <p className="text-red-500 text-xs italic mt-1">{errors.otp.message}</p>}
//               </div>
//               <div className="flex items-center justify-center mb-6">
//                 <button
//                   className="bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-indigo-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
//                   type="submit"
//                 >
//                   Verify OTP
//                 </button>
//               </div>
//             </>
//           )}
//           {message && <p className="text-red-500 text-xs italic mt-1">{message}</p>}
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginSignup2;
