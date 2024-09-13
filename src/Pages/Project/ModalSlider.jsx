import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

function ModalSlider({ additionalImages }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="relative h-auto md:h-auto md:w-[1000px]">
      {/* Main Slider */}
      <div ref={sliderRef} className="keen-slider">
        {additionalImages.map((image, idx) => (
          <div
            key={idx}
            className="keen-slider__slide w-full h-[60vh] md:h-[80vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      {/* Thumbnail Slider positioned directly at the bottom */}
      <div ref={thumbnailRef} className="keen-slider flex justify-center md:-mt-0">
        {additionalImages.map((image, idx) => (
          <div key={idx} className="keen-slider__slide cursor-pointer mx-0">
            <img src={image} alt={`Thumbnail ${idx + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

ModalSlider.propTypes = {
  additionalImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModalSlider;
