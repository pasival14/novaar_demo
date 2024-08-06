import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import staffData from './staffData'; // Make sure this path is correct

const animation = { duration: 20000, easing: (t) => t }

const People = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3, // Set slides per view to 3
      spacing: 10, // Optional: add spacing between slides
    },
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {staffData.map((staff) => (
        <div key={staff.id} className="keen-slider__slide">
          <div className="text-center rounded-lg">
            <div className=''>
              <img src={staff.imageUrl} alt={staff.name} className="rounded-t-lg object-cover" />
            </div>
            <div className="bg-white bg-opacity-50 h-24 text-white p-1 rounded-b-lg">
              <h3 className="text-xl font-bold">{staff.name}</h3>
              <p className="text-gray-200">{staff.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default People;
