import React from 'react';
import { useInView } from 'react-intersection-observer';
import './lazyload.css';

const LazyLoad = ({ children, threshold = 0.1 }) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`lazy-load ${inView ? 'in-view' : ''}`}>
      {inView && children}
    </div>
  );
};

export default LazyLoad;
