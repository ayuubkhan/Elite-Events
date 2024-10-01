// import React from 'react'
// import './About.css'
// import { about_Img } from './about_Img';
// import useEmblaCarousel from 'embla-carousel-react'

// function About() {
//   const [emblaRef] = useEmblaCarousel()
//   return (
//     <div className="about">
//       <div className="about-content">
//       <h2 className='heading'>Welcome to Elite Event Solutions </h2>
//         <p>
//           At Elite Event Solutions, we specialize in delivering exceptional event services designed to exceed your expectations. Whether you're organizing a prestigious corporate event, an impressive product launch, or an intimate private gathering, our comprehensive range of services ensures your event is a resounding success.
//         </p>
//       </div>
//       <div className="about-img" ref={emblaRef}>
//         {about_Img.map((d,index) => (
//           <div className="images">
//           <img  key={index} src={d.a_img} alt="Celebritis images"/>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default About

import React from 'react'
import './About.css'
import { about_Img } from './about_Img';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'



function About() {
  const autoplayOptions = { delay: 2000, stopOnInteraction:false};
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

  return (
    <div className="about">
      <div className="about-content">
        <h2 className='heading'>About Us</h2>
        <p>
          At Elite Event Solutions, we specialize in delivering exceptional event services designed to exceed your expectations. Whether you're organizing a prestigious corporate event, an impressive product launch, or an intimate private gathering, our comprehensive range of services ensures your event is a resounding success.
        </p>
      </div>
      <div className="about-img image" ref={emblaRef}>
        <div className="image-container">
          {about_Img.map((d, index) => (
            <div className="image-slide" key={index}>
              <img src={d.a_img} alt="Celebrities images" className="carousel-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
