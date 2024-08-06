import React, { useState } from 'react';
import { items } from './items';
import { motion } from 'framer-motion';

const Card = ({ setSelected, item }) => {
  return (
    <div className='relative'>
      <motion.img 
        className='object-cover'
        src={item.imageUrl} alt={item.title}
        whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setSelected(item)}
      />
      <div className='absolute bottom-0 p-4 bg-opacity-70 bg-black w-full text-white'>
        <p>{item.title}</p>
        <p className='text-lg text-balance'>{item.description}</p>
        <div className="flex flex-wrap mt-2">
          {item.tags.map((tag) => (
            <div
              className="badge bg-base-300 border-none text-zinc-600 mr-1 mb-1"
              key={tag}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const List = ({ setSelected }) => {
  const [displayCount, setDisplayCount] = useState(12);
  const [selectedTag, setSelectedTag] = useState('All Projects');

  const loadMore = () => {
    setDisplayCount(prevCount => prevCount + 12);
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
      <h1 className='text-center text-3xl m-16'>Projects</h1>
      <hr />
      <div>
        <ul className='flex items-center justify-around text-lg py-2'>
          {['All Projects', 'Commercial', 'Residential', 'Interior', 'Renovation', 'Villa'].map(tag => (
            <motion.li 
              key={tag}
              className={`cursor-pointer transition duration-300 ease-in-out ${selectedTag === tag ? 'underline underline-offset-[12px] ' : ''}`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </motion.li>
          ))}
        </ul>
      </div>
      <hr />
      <div className='grid grid-cols-3 m-2 gap-2'>
        {filteredItems.slice(0, displayCount).map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
      {displayCount < filteredItems.length && (
        <div className="flex items-center justify-center mt-4">
          <button onClick={loadMore} className="btn btn-block">Load More</button>
        </div>
      )}
    </div>
  );
};

export default List;

