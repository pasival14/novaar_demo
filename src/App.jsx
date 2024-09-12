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

  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="font-ubuntu overflow-x-hidden bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Body />} />
            <Route path="project" element={<LazyLoadComponent Component={Project} />} />
            <Route path="service" element={<LazyLoadComponent Component={Services} />} />
            <Route path="about" element={<LazyLoadComponent Component={About} />} />
            <Route path="contact" element={<LazyLoadComponent Component={Contact} />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
