import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Body from "./Body/Body";
import Header from "./Header";
import Footer from "./Components/Footer/Footer";
import Loading from './Loading';


const Project = lazy(() => import('./Pages/Project/Project'));
const Services = lazy(() => import('./Pages/Services/Service'));
const About = lazy(() => import('./Pages/About/About'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));


const LazyLoadComponent = ({ Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,   
  });

  return (
    <div ref={ref}>
      {inView && <Component />}
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const location = useLocation();

  return (
    <div className="font-ubuntu overflow-x-hidden bg-[#5f604b]">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Body />} />
          <Route path="project" element={
            <Suspense fallback={<div><Loading /></div>}>
              <LazyLoadComponent Component={Project} />
            </Suspense>
          } />
          <Route path="service" element={
            <Suspense fallback={<div><Loading /></div>}>
              <LazyLoadComponent Component={Services} />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<div><Loading /></div>}>
              <LazyLoadComponent Component={About} />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<div><Loading /></div>}>
              <LazyLoadComponent Component={Contact} />
            </Suspense>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
