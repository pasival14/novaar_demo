import { useState, useEffect, useRef } from 'react';
import { items } from './items';
import { motion, useInView } from 'framer-motion';

const Card = ({ setSelected, item }) => {

  return (
    <motion.div 
      className='relative'
      whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
    >
      <motion.div
        className='w-full md:w-[32vw] h-[60vh] md:h-[65vh] bg-center bg-cover rounded-xl md:rounded-none'
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSelected(item)}
      />
      <div className='absolute bottom-0 left-0 bg-opacity-50 bg-black w-full md:w-[32vw] text-white rounded-xl md:rounded-none'>
        <div className='m-4'>
          <p className='font-bold text-[16px]'>{item.title}</p>
          <p className='text-[14px] text-balance'>{item.description}</p>
          <div className="flex flex-wrap mt-2">
            {item.tags.map((tag) => (
              <div
                className="badge bg-base-300 border-none text-white mr-1 mb-1"
                key={tag}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const List = ({ setSelected }) => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { margin: "-100px 0px -100px 0px", once: true });
  const isInView2 = useInView(ref2, { margin: "-100px 0px -100px 0px", once: true });
  const isInView3 = useInView(ref3, { margin: "-100px 0px -100px 0px", once: true });

  const [displayCount, setDisplayCount] = useState(12);
  const [selectedTag, setSelectedTag] = useState('All Projects');

  useEffect(() => {
    // Set initial display count based on screen size
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDisplayCount(6); // Mobile view (for screens <= 768px)
      } else {
        setDisplayCount(12); // Desktop/tablet view (for screens > 768px)
      }
    };

    // Set the initial value on load
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadMore = () => {
    setDisplayCount(prevCount => prevCount + 6); // Load more items
  };

  const filterItems = () => {
    if (selectedTag === 'All Projects') {
      return items;
    }
    return items.filter(item => item.tags.includes(selectedTag));
  };

  const filteredItems = filterItems();

  return (
    <div className='pt-24'>
      <motion.h1 
      className='text-center text-2xl md:text-3xl m-16'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView1 ? 1 : 0, y: isInView1 ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      ref={ref1}
      >Projects</motion.h1>
      <hr />
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView2 ? 1 : 0, y: isInView2 ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      ref={ref2}
      >
        <ul className='grid grid-cols-2 gap-2 md:gap-0 justify-items-center p-2 md:p-0 md:flex items-center justify-around text-lg py-2'>
          {['All Projects', 'Commercial', 'Residential', 'Renovation', 'Interior', 'Industrial', 'Villa'].map((tag, index) => (
            <motion.li
              key={tag}
              className={`cursor-pointer transition p-2 text-[14px] md:text-lg duration-300 ease-in-out ${
                selectedTag === tag ? 'underline underline-offset-[12px]' : ''
              } ${index === 0 || index === 1 || index === 6 ? 'col-span-2' : ''}`} 
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <hr />
      <motion.div 
      className='grid grid-cols-1 md:grid-cols-3 m-3 md:m-2 gap-2'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView3 ? 1 : 0, y: isInView3 ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
      ref={ref3}
      >
        {filteredItems.slice(0, displayCount).map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </motion.div>
      {displayCount < filteredItems.length && (
        <div className="flex items-center justify-center mt-4">
          <button onClick={loadMore} className="btn btn-block">Load More</button>
        </div>
      )}
    </div>
  );
};

export default List;
