import React from 'react'
import './Testimonial.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviewsData } from './reviewsData';
import Quote from './svg/blockqu0te.svg'

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="title">
        <h2>High Profile <span className='testimonial-span'> Clients Trust</span> Us </h2>
      </div>

      <div className="slider">
        <blockquote>
          <img className="top-quote quote" src={Quote} alt="quote" />
          <img className="bottom-quote quote" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviewsData && reviewsData.map((review) => (
            <SplideSlide key={review.id}>
              <div className="content">
                <div><p className="text">{review.text}</p></div>
                <div className="info">
                  {/* <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div> */}
                  <div><p className="user">{review.name}</p></div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  )
}

export default Testimonial