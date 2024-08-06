import React, { useEffect, useState } from 'react';
import { FaAward } from "react-icons/fa";

const StatItem = ({ target, label, targetClassName, labelClassName }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 2000;
    const incrementTime = (duration / end) * 2;

    const incrementCount = () => {
      start += 1;
      setCount(start);
      if (start < end) {
        setTimeout(incrementCount, incrementTime);
      }
    };

    incrementCount();
  }, [target]);

  return (
    <div className="text-center">
      <span className={`block ${targetClassName}`}>{count}</span>
      <span className={` ${labelClassName}`}>{label}</span>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="flex justify-around w-full text-white py-1 md:py-8">
      <StatItem target="13" label="PARTNERS" targetClassName="text-xl ml:text-xl md:text-2xl " labelClassName="text-[13px] md:text-md " />
      <StatItem target="3" label="LOCATIONS" targetClassName="text-xl ml:text-xl md:text-2xl " labelClassName="text-[13px] md:text-md " />
      <StatItem target="5" label="AWARDS" targetClassName="text-xl ml:text-xl md:text-2xl " labelClassName="text-[13px] md:text-md " />
      <StatItem target="73" label="COMPLETED" targetClassName="text-xl ml:text-xl md:text-2xl" labelClassName="text-[13px] md:text-md"/>
    </div>
  );
};

export default Stats;
