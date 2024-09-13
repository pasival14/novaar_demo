import React from 'react';
import Logo from './assets/bbb.svg?react';
import './loading.css'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Logo className="w-24 md:w-44 h-24 md:h-44 animate-pulse" />
    </div>
  );
};

export default Loading;

