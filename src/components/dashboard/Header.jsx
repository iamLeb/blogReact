import React, { useState } from 'react';
import { GoArrowRight, GoScreenFull } from 'react-icons/go';
import { IoLockClosed, IoMoonOutline, IoSearchOutline } from 'react-icons/io5';
import { LuBell } from 'react-icons/lu';
import { Popover } from '@headlessui/react';
import { FaUserCircle } from 'react-icons/fa';
import {MdFullscreenExit, MdKeyboardArrowRight, MdOutlineLogout, MdOutlineMessage} from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import {useLocation} from "react-router-dom";

const Header = ({ isMobile, toggleMobile, searchBar, toggleSearchBar }) => {
    const location = useLocation();
    const pathSegment = location.pathname.split('/').filter(segment => segment);
    let lastSegment = pathSegment[pathSegment.length - 2];
    if (lastSegment === 'secure') lastSegment = '';


    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
        // Toggle full-screen mode
        if (!isFullScreen) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    };
    return (
        <>
            <header className={'bg-white shadow-md p-4 text-neutral-400 border-b'}>
                <div className={'flex justify-between items-center'}>
                    <div className={'md:hidden'}>
                        {!isMobile && <GoArrowRight onClick={toggleMobile} size={26} />}
                    </div>

                    <div className={'hidden sm:hidden md:block relative'}>
                        <input
                            type="text"
                            className={'bg-gray-100 py-2 rounded-md text-sm pl-9 outline-5'}
                            placeholder={'Search...'}
                        />
                        <IoSearchOutline className={'absolute top-1/2 -translate-y-1/2 left-3'} />
                    </div>

                    <div className={'flex items-center sm:space-x-6'}>
                        <div onClick={toggleSearchBar}>
                            <div
                                className={
                                    'hover:bg-blue-50 p-1 rounded-full w-9 h-9 sm:hidden flex justify-center items-center cursor-pointer'
                                }
                            >
                                <IoSearchOutline size={20} />
                            </div>
                        </div>
                        <div className="flex space-x-4 items-center">
                            {/* Fullscreen Button */}
                            <div className={'hidden sm:flex hover:bg-blue-50 p-2 rounded-full w-10 h-10 justify-center items-center cursor-pointer'}>
                                <IoMoonOutline size={20} />
                            </div>

                            <div className={'hidden sm:flex hover:bg-blue-50 p-2 rounded-full w-10 h-10 justify-center items-center cursor-pointer'}>
                                 <div onClick={toggleFullScreen}>{ isFullScreen ? <MdFullscreenExit /> :<GoScreenFull size={20} />}</div>
                            </div>

                            <div
                                className={
                                    'relative sm:flex hover:bg-blue-50 p-2 rounded-full w-10 h-10 justify-center items-center cursor-pointer'
                                }
                            >
                                <LuBell size={20} />
                                <span className={'absolute -top-1 right-0 w-4 h-4 bg-red-500 text-xs text-white rounded-full flex justify-center items-center'}>3</span>
                            </div>

                            {/* Profile Picture */}
                            {/* Popover Button */}
                            <div className="flex space-x-4 items-center">
                                {/* Popover Button */}
                                <Popover className="relative">
                                    <Popover.Button className="flex hover:bg-blue-50 p-2 rounded-full w-12 h-12 justify-center items-center cursor-pointer focus:outline-none">
                                        <img
                                            src="https://themesbrand.com/velzon/html/modern/assets/images/users/avatar-1.jpg"
                                            alt="Profile"
                                            className="w-full h-full rounded-full"
                                        />
                                    </Popover.Button>
                                    <Popover.Panel className="absolute z-10 bg-white shadow-lg rounded-lg right-0 mt-5 ml-2 w-52 sm:w-96 md:w-52 lg:w-52 p-2 sm:mx-4 md:mx-0 lg:mx-0 focus:outline-none">
                                        <div className="text-sm">
                                            <span className="text-xs font-bold">Welcome iamLeb!</span>
                                            <div className="flex flex-col mt-3">
                                                <a href={'/secure/profile'}>
                                                    <div
                                                        className="flex space-x-2 items-center hover:bg-gray-100 p-2 cursor-pointer hover:text-black">
                                                        <FaUserCircle/>
                                                        <span>Profile</span>
                                                    </div>
                                                </a>


                                                <div
                                                    className="flex space-x-2 items-center hover:bg-gray-100 p-2 cursor-pointer hover:text-black">
                                                    <MdOutlineMessage/>
                                                    <span>Message</span>
                                                </div>

                                                <div className="hidden sm:flex space-x-2 items-center hover:bg-gray-100 p-2 cursor-pointer hover:text-black">
                                                    <BiTask />
                                                    <span>Taskboard</span>
                                                </div>

                                                <div className="hidden sm:flex space-x-2 items-center hover:bg-gray-100 p-2 cursor-pointer hover:text-black">
                                                    <IoMdHelpCircleOutline />
                                                    <span>Help</span>
                                                </div>
                                                <span className="border-b py-1"></span>

                                                <div className="flex space-x-2 items-center hover:bg-gray-100 p-2 cursor-pointer hover:text-black">
                                                    <CiSettings />
                                                    <span>Settings</span>
                                                </div>

                                                <div className="flex space-x-2 items-center hover:bg-gray-100 p-2 cursor-pointer hover:text-black">
                                                    <IoLockClosed />
                                                    <span>Lock Screen</span>
                                                </div>

                                                <div className="flex space-x-2 items-center p-2 cursor-pointer text-red-600 hover:bg-red-600 hover:text-white rounded-md">
                                                    <MdOutlineLogout />
                                                    <span>Logout</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={''}>
                <div className={'bg-white sm:flex justify-between px-6 py-3'}>
                    <div className={'font-extrabold mb-2 sm:mb-0'}>
                        <h3>Dashboard</h3>
                    </div>

                    <ul className={'flex space-x-1 items-center text-sm'}>
                        <li><a href="/secure"><span className={'font-semibold'}>Dashboard</span></a></li>
                        <li><MdKeyboardArrowRight /></li>
                        <li><span>{lastSegment}</span></li>
                    </ul>
                </div>

            </div>

            {/*Search bar */}
            <div className={`${!searchBar && 'hidden'} sm:hidden border-t bg-white p-4 absolute w-full z-30`}>
                <div className={'relative'}>
                    <input type="text" className={' border py-2 rounded-md text-sm pl-9 outline-5 w-full'} placeholder={'Search...'} />
                    <IoSearchOutline className={'absolute top-1/2 -translate-y-1/2 left-3'} />
                    <button className={'absolute w-12 h-full bg-primary top-1/2 -translate-y-1/2 right-0 rounded-r-md text-white flex justify-center items-center'}>
                        <IoSearchOutline size={18} />
                    </button>
                </div>
            </div>
            {/*Search bar ends */}
        </>
    );
};

export default Header;
