import React from 'react';
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';

const Travels = () => {
  return (
    <div className='travels'>
      <div className="container">
        <h4 className='satisfy'>Modern & Beautiful</h4>
        <h2>Our Most Popular Adventures</h2>
        <div className="cards flex just_between">

          <div className="card">
            <div className="image">
            <img src="./Assets/img/card.jpg" alt="" />
            </div>
            <div className="content">
              <div className="rating flex just_between">
                <div className="time flex">
                  <p><span><FaCalendarAlt /></span>11 days</p>
                  <p><span><FaUserAlt /></span>11 days</p>
                </div>
                <div className="star flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <h4>Hot Baloon Journey</h4>
              <p><span><MdLocationOn /></span>New York, United States</p>
              <div className="price flex just_between alin_center">
                <p><b>$30.00</b> <strike>$40</strike></p>
                <a className='color_btn' href="/">Explore More</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
            <img src="./Assets/img/card.jpg" alt="" />
            </div>
            <div className="content">
              <div className="rating flex just_between">
                <div className="time flex">
                  <p><span><FaCalendarAlt /></span>11 days</p>
                  <p><span><FaUserAlt /></span>11 days</p>
                </div>
                <div className="star flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <h4>Hot Baloon Journey</h4>
              <p><span><MdLocationOn /></span>New York, United States</p>
              <div className="price flex just_between alin_center">
                <p><b>$30.00</b> <strike>$40</strike></p>
                <a className='color_btn' href="/">Explore More</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="image">
            <img src="./Assets/img/card.jpg" alt="" />
            </div>
            <div className="content">
              <div className="rating flex just_between">
                <div className="time flex">
                  <p><span><FaCalendarAlt /></span>11 days</p>
                  <p><span><FaUserAlt /></span>11 days</p>
                </div>
                <div className="star flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <h4>Hot Baloon Journey</h4>
              <p><span><MdLocationOn /></span>New York, United States</p>
              <div className="price flex just_between alin_center">
                <p><b>$30.00</b> <strike>$40</strike></p>
                <a className='color_btn' href="/">Explore More</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Travels
