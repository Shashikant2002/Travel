import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { Socal } from './Parts/Socal';
import { NavMenu } from './Parts/NavMenu';

export const Header = () => {
    return (
        <>
            <div className="header">
                <div className="up_header">
                    <div className="container flex alin_center">
                        <div className="detail flex">
                            <div className="loc">
                                <p><span><MdLocationOn /></span> 24 Tech Roqad st Ny 10023</p>
                            </div>
                            <div className="time">
                                <p><span><BiTime /></span> Mon-Sat: 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="contact flex alin_center">
                            <div className="num flex alin_center">
                                <p className='satisfy'>Call Us on</p>
                                <BsWhatsapp className='whats_app' />
                                <p>+02 (231) 4225 22</p>
                            </div>
                            <div className="mail">
                                <p><span><MdLocationOn /></span> info@example.com</p>
                            </div>
                            <Socal />
                        </div>
                    </div>
                </div>
                <div className="main_head">
                    <div className="container flex alin_center just_between">
                        <div className="logo">
                            <img src="./Assets/img/Logo.svg" alt="" />
                        </div>
                        <NavMenu />
                    </div>
                </div>
            </div>
        </>
    )
}
