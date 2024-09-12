import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import realEstateListings from "./realEstateListings";
import './cards.css';
import real from '../../assets/N-VION/07.bmp';

const Cards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState("All listings");

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    slides: {
      perView: 4, // Default for larger screens
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
        },
      },
    },
    created() {
      setLoaded(true);
    },
  });

  const handleFilterChange = (category) => {
    setFilter(category);
    setCurrentSlide(0);
    instanceRef.current?.moveToIdx(0);
  };

  const filteredListings = realEstateListings.filter((property) => {
    if (filter === "All listings") return true;
    return property.tag === filter;
  });

  // Remove the perView update logic based on filteredListings
  // Keen Slider will handle the perView based on breakpoints

  return (
    <>
      <div>
        <div className="navigation-wrapper">
          <div className="grid grid-cols-2 justify-items-center gap-4 mb-5 md:gap-0 md:flex md:p-8 md:px-24 ml:px-12 justify-between items-center">
            {["All listings", "For Sale", "For Rent", "Shortlets"].map((category) => (
              <div
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`flex items-center px-2 w-[150px] md:w-[220px] h-[40px] md:h-[60px] border-2 border-sky-500 rounded-lg cursor-pointer ${filter === category ? 'bg-gray-200' : ''}`}
              >
                <div
                  className="md:w-12 md:h-12 bg-cover bg-center rounded"
                  style={{
                    backgroundImage: `url(${real})`,
                  }}
                />
                <p className="text-[18px] font-bold ml-6">{category}</p>
              </div>
            ))}
          </div>

          {filteredListings.length > 0 ? (
            <div ref={sliderRef} className="keen-slider">
              {filteredListings.map((property) => (
                <div key={property.id} className="keen-slider__slide flex justify-center items-center">
                  <div className="relative w-72 ml:w-60 h-[350px] ml:h-[310px] bg-white rounded-3xl text-black border border-black p-4 flex flex-col items-start gap-1 hover:shadow-2xl hover:shadow-black/50 transition-shadow">
                    <div
                      className="relative w-[254px] ml:w-[207px] h-40 ml:h-32 rounded-2xl bg-center bg-cover"
                      style={{
                        backgroundImage: `url(${property.imageUrl})`,
                      }}
                    >
                      <div className="w-full h-full bg-black rounded-2xl bg-opacity-20" />
                      <p className="price absolute bottom-2 left-2 text-white text-[18px] ml:text-[12px]">
                        {property.price}
                      </p>
                    </div>
                    <div className="">
                      <p className="font-extrabold estate_name ml:text-[12px]">{property.name}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                        <p className="address ml:text-[10px]">{property.address}</p>
                      </div>
                      <p className="description pl-1 pt-1 ml:text-[10px]">{property.description}</p>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <button className="bg-sky-700 font-extrabold ml:font-bold p-2 ml:p-[6px] px-6 ml:px-3 rounded-xl hover:bg-sky-500 transition-colors">
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-8">No listings available for the selected category.</p>
          )}

          {loaded && instanceRef.current && filteredListings.length > 0 && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots mt-4">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow w-4 ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default Cards;
