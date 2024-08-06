import React from 'react';

const StaffCard = ({ name, imageUrl, position }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden m-4">
      <div
        className="bg-cover bg-center h-60"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="px-1 py-3">
        <p className="text-lg font-semibold text-center">{name}</p>
        <p className='text-md font-thin text-center'>{position}</p>
      </div>
    </div>
  );
};

export default StaffCard;
