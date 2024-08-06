import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import logo1 from '../../assets/logo/3m.png'
import logo2 from '../../assets/logo/armstrong.png'
import logo3 from '../../assets/logo/dulux.jpeg'
import logo4 from '../../assets/logo/gerfloor.png'
import logo5 from '../../assets/logo/ikea.png'
import logo6 from '../../assets/logo/knauf.png'
import logo7 from '../../assets/logo/manni.png'
import logo8 from '../../assets/logo/saintg.png'

const animation = { duration: 10000, easing: (t) => t }

export default function Partners() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 10, 
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 3,
        },
      },
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

  const logos = [logo1, logo2, logo3, logo5, logo4, logo6, logo7, logo8]

  return (
    <div ref={sliderRef} className="keen-slider p-4">
      {logos.map((logo, index) => (
        <div key={index} className="keen-slider__slide">
          <img src={logo} alt={`Logo ${index + 1}`} className=" h-[80px] object-cover " />
        </div>
      ))}
    </div>
  )
}
