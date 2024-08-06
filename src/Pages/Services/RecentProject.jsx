// src/RecentSales.js
import React from 'react';

const salesData = [
  { name: 'APHRODITE', email: 'Ikoyi, Lagos', amount: '03/12' },
  { name: '04 CASA  DE SATURN', email: 'Victoria Island, Lagos', amount: '10/12' },
  { name: 'LITH RESIDENCE', email: 'Garki, Abuja', amount: '18/12' },
  { name: 'NXT DOOR PROJECT', email: 'Alagomeji, Lagos', amount: '20/12' },
  { name: 'EDGE RESIDENCE', email: 'Anthony, Lagos', amount: '27/12' },
];

const RecentProject = () => {
  return (
    <div className="border text-white ml-1 p-5 rounded-lg w-[33.3vw] h-[60vh] mx-auto">
      <h2 className="text-lg font-bold mb-2">Recent Projects</h2>
      <p className="mb-4">We completed 6 projects this month.</p>
      <ul>
        {salesData.map((sale, index) => (
          <li key={index} className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <img
                src={`https://avatars.dicebear.com/api/initials/${sale.name}.svg`}
                alt={sale.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <strong className="block">{sale.name}</strong>
                <p className="text-gray-400">{sale.email}</p>
              </div>
            </div>
            <div className="text-green-400">{sale.amount}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentProject;
