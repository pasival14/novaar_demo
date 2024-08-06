// SubscribeComponent.js
import React from 'react';

const SubscribeComponent = () => {
  return (
    <div className=" ml:my-[6px] 2xl:my-[110px]">
      <div className="container mx-auto">
        <h2 className="text-3xl ml:text-2xl font-semibold text-white">Subscribe to Our Newsletter</h2>
        <p className="text-gray-400 mt-2">Get the latest updates and offers.</p>
        <form className="mt-6 flex flex-col sm:flex-row  items-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full sm:w-2/3 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
          <button 
            type="submit" 
            className="mt-4 sm:mt-0 sm:ml-4 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscribeComponent;
