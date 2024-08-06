import React from 'react';
// import './App.css';
import SalesImage from './A10.bmp'; // Update with your image path
import SuccessImage from './A11.bmp'; // Update with your image path

const Test = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex space-x-4">
                {/* Sales Card */}
                <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-lg">
                    <img src={SalesImage} alt="Sales" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="text-white">
                            <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full">SALES CRM SOFTWARE</span>
                        </div>
                        <div className="text-white">
                            <h2 className="text-4xl font-bold mb-2">Sales</h2>
                            <p className="mb-4">Sell smarter, sell faster. Unlock the power of data-driven sales to identify and convert more leads with less effort.</p>
                            <button className="flex items-center text-sm font-medium underline">
                                Discover <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Success Card */}
                <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-lg">
                    <img src={SuccessImage} alt="Success" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="text-white">
                            <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded-full">CUSTOMER SUCCESS SOFTWARE</span>
                        </div>
                        <div className="text-white">
                            <h2 className="text-4xl font-bold mb-2">Success</h2>
                            <p className="mb-4">Achieve sustained growth by converting customer data into actions that deliver more value, to more customers, faster.</p>
                            <button className="flex items-center text-sm font-medium underline">
                                Discover <span className="ml-2">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
