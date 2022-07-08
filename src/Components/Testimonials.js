import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonials = () => {
  return (
    <>
      <div className="testimonial">
        <div className="container flex">
          <div className="content">
            <h4 className='satisfy'>Testimonials</h4>
            <h2>What Our Tourist Say!</h2>
            <p>We are proud to say that after 17 experience-packed years, we are the world leader and obsessed with finding the best things.</p>
          </div>
            <div className="image">
              <img src="./Assets/img/single-img-02.jpg" alt="" />
            </div>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="slider">
                <div className="card">
                  <div className="upheading">
                    <img src="./Assets/img/test-01-150x150.jpg" alt="" />
                    <div className="text">
                      <h5>John Marthin</h5>
                      <p>Tourist</p>
                    </div>
                  </div>
                  <div className="text">
                    <p>Thank you so much for the amazing trips and for the interesting guides! It was exactly as we imagined it.</p>
                  </div>
                  <span className='star'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                  </span>
                </div>
                <div className="card">
                  <div className="upheading">
                    <img src="./Assets/img/test-01-150x150.jpg" alt="" />
                    <div className="text">
                      <h5>John Marthin</h5>
                      <p>Tourist</p>
                    </div>
                  </div>
                  <div className="text">
                    <p>Thank you so much for the amazing trips and for the interesting guides! It was exactly as we imagined it.</p>
                  </div>
                  <span className='star'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                  </span>
                </div>
                <div className="card">
                  <div className="upheading">
                    <img src="./Assets/img/test-01-150x150.jpg" alt="" />
                    <div className="text">
                      <h5>John Marthin</h5>
                      <p>Tourist</p>
                    </div>
                  </div>
                  <div className="text">
                    <p>Thank you so much for the amazing trips and for the interesting guides! It was exactly as we imagined it.</p>
                  </div>
                  <span className='star'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                  </span>
                </div>
                <div className="card">
                  <div className="upheading">
                    <img src="./Assets/img/test-01-150x150.jpg" alt="" />
                    <div className="text">
                      <h5>John Marthin</h5>
                      <p>Tourist</p>
                    </div>
                  </div>
                  <div className="text">
                    <p>Thank you so much for the amazing trips and for the interesting guides! It was exactly as we imagined it.</p>
                  </div>
                  <span className='star'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                  </span>
                </div>
                <div className="card">
                  <div className="upheading">
                    <img src="./Assets/img/test-01-150x150.jpg" alt="" />
                    <div className="text">
                      <h5>John Marthin</h5>
                      <p>Tourist</p>
                    </div>
                  </div>
                  <div className="text">
                    <p>Thank you so much for the amazing trips and for the interesting guides! It was exactly as we imagined it.</p>
                  </div>
                  <span className='star'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                  </span>
                </div>
                <div className="card">
                  <div className="upheading">
                    <img src="./Assets/img/test-01-150x150.jpg" alt="" />
                    <div className="text">
                      <h5>John Marthin</h5>
                      <p>Tourist</p>
                    </div>
                  </div>
                  <div className="text">
                    <p>Thank you so much for the amazing trips and for the interesting guides! It was exactly as we imagined it.</p>
                  </div>
                  <span className='star'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                  </span>
                </div>
            </Carousel>
        </div>
      </div>
    </>
  )
}

export default Testimonials
