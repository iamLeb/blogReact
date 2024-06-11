import React, {useEffect, useState} from 'react';
import {FaArrowUp, FaFacebook, FaPinterest} from "react-icons/fa";
import {FaX} from "react-icons/fa6";


const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const handleScroll = () => {
        window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={'bg-gray-200 p-4 mt-auto'}>
            <div className={'container mx-auto sm:grid grid-cols-3 items-center px-3 sm:px-6 gap-12'}>
                <div>
                    <div className={'border-b mb-6'}>
                        <h2 className={'border-gray-400 border-b-4 w-10 font-semibold'}>AboutMe</h2>
                        <span></span>
                    </div>
                    <div className={'mb-6'}>
                        <p>Start writing, no matter what. The water does not flow until the faucet is turned on</p>
                    </div>
                    <div className={'mb-6'}>
                        <h2 className={'font-bold'}>Address</h2>
                        <p>555 St. Mary Ave <br/> Winnipeg, Manitoba</p>
                    </div>
                    <div>
                        <h2 className={'font-bold'}>Follow me</h2>
                        <div className={'flex justify-start items-center space-x-1'}>
                            <FaFacebook className={'text-primary text-xl'}/>
                            <FaX className={'text-black text-lg'}/>
                            <FaPinterest className={'text-red-900 text-xl'}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={'border-b mt-9 mb-6'}>
                        <h2 className={'border-gray-400 border-b-4 w-10 font-semibold'}>QuickLink</h2>
                        <span></span>
                    </div>
                    <div className={'mb-6'}>
                        <ul>
                            <li className={'border-dotted border-b-2 border-gray-300 mt-1 text-sm'}>About Me</li>
                            <li className={'border-dotted border-b-2 border-gray-300 mt-1 text-sm'}>Help & Support</li>
                            <li className={'border-dotted border-b-2 border-gray-300 mt-1 text-sm'}>Licensing Policy
                            </li>
                            <li className={'border-dotted border-b-2 border-gray-300 mt-1 text-sm'}>Refund Policy</li>
                            <li className={'border-dotted border-b-2 border-gray-300 mt-1 text-sm'}>Hire Me</li>
                            <li className={'border-dotted border-b-2 border-gray-300 mt-1 text-sm'}>Contact</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className={'border-b mt-9 mb-6'}>
                        <h2 className={'border-gray-400 border-b-4 w-10 font-semibold'}>Newsletter</h2>
                    </div>
                    <div className={'mb-4'}>
                        <p>Subscribe to our news letter and get out newest updates right on your inbox</p>
                        <div className={'relative my-6'}>
                            <input className={'p-3 w-full rounded-full'} type="text" placeholder={'Enter your email'}/>
                            <button
                                className={'absolute top-0 right-0 bottom-0 w-[30%] sm:w-[40%] bg-primary rounded-r-full text-white'}>Subscribe
                            </button>
                        </div>

                        <div className={'flex items-center space-x-2 mb-9'}>
                            <div>
                                <input type="checkbox"/>
                            </div>
                            <p>I agree to the terms & conditions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'container sm:mx-auto border-t py-4 text-sm sm:flex justify-between'}>
                <p>&copy; 2024, iamLeb - Personal Blog Project</p>
                <p>Designed by iamLeb | All rights reserved</p>
            </div>

            {isVisible ? (<div onClick={scrollToTop}
                               className={'cursor-pointer hover:bg-blue-900 w-9 h-9 bg-primary rounded-full text-white flex justify-center items-center fixed bottom-5 right-5 sm:bottom-12'}>
                <FaArrowUp/></div>) : ''}

        </div>
    );
};

export default Footer;