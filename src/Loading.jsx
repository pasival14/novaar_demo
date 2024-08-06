import React from 'react';
import Logo from './assets/bbb.svg?react';
import './loading.css'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Logo className="w-48 h-48 animate-pulse" />
    </div>
  );
};

export default Loading;

