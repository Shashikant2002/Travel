import React from 'react';
import { TiWorld } from 'react-icons/ti';

export const TheWorld = () => {
    return (
        <>
            <div className="the_world">
                <div className="container flex just_between alin_center">
                    <div className="innerText">
                        <h4 className='satisfy'>Welcome Tour Travels</h4>
                        <h2>Travel’s The World One</h2>
                        <h2>Place At A Time</h2>
                        <p>We would love to help you realize your travel dreams, ,to start a new. Take the first steps towards making your dream a reality.</p>
                        <div className="cards flex">
                            <div className="card">
                                <h4>Best Travel Agents</h4>
                                <p>We've 30 years experience of organising the worldwide travel</p>
                            </div>
                            <div className="card">
                                <h4>Best Travel Agents</h4>
                                <p>We've 30 years experience of organising the worldwide travel</p>
                            </div>
                        </div>
                        <div className="experience flex just_between alin_center">
                            <TiWorld className='world'/>
                        <h4>We Have <span className='satisfy'>25+ Years</span> Of Experience For Give You Better Tour & Travels Package</h4>
                        </div>
                    </div>
                    <div className="image">
                        <img src="./Assets/img/theworls.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
