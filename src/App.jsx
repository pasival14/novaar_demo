import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Body from "./Body/Body";
import Header from "./Header";
import Footer from "./Components/Footer/Footer";
import Loading from './Loading';

const Project = lazy(() => import('./Pages/Project/Project'));
const Services = lazy(() => import('./Pages/Services/Service'));
const About = lazy(() => import('./Pages/About/About'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));


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
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <div className="font-ubuntu overflow-x-hidden bg-white">
          <Header />
          
            <Routes location={location} key={location.pathname}>
              <Route index element={<Body />} />
              <Route path="project" element={<Project />} />
              <Route path="service" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          <Footer />
        </div>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
