import { useState } from 'react';
import logo from '../assets/Logo.svg';
import {
    FaBars,
    FaBook, FaHome,
    FaSearch,
    FaTimes,
} from "react-icons/fa";
import ListItems from "../constants/ListItems.jsx";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(true);

    const lists = [
        { id: 1, name: 'Home', path: '/', icon: <FaHome /> },
        { id: 2, name: 'About', path: 'secure', icon: <FaBook /> },
        { id: 3, name: 'Search', path: '/', icon: <FaSearch className="transform rotate-90" /> }
    ];

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <section className={'bg-white fixed top-0 w-full z-50'}>
                <header className={'bg-white border-b border-gray-100 container mx-auto'}>
                    <div className={'flex justify-between items-center mx-auto p-7'}>
                        <div>
                            <a href="/"><img src={logo} alt="logo"/></a>
                        </div>

                        <div className={'sm:hidden'}>
                            <div onClick={toggleMenu}>
                                {toggle ? <FaBars size={25}/> : <FaTimes size={25}/>}
                            </div>
                        </div>

                        <div className={'hidden sm:flex space-x-6 items-center'}>
                            <ul className={'flex items-center space-x-6'}>
                                {lists.map(item => (
                                    <ListItems item={item} />
                                ))}

                                <li>
                                    <span className={'border-r border-gray-300'}></span>
                                </li>

                                <li>
                                    <a href={'/auth/login'} className={'bg-primary text-white px-4 py-1 rounded-md font-bold'}>Create an
                                        Account
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

                {/*Mobile View*/}
                <div
                    className={`sm:hidden transition-all duration-500 ease-in-out ${toggle ? 'max-h-0 overflow-hidden' : 'max-h-screen border-t border-gray-100 p-4'}`}>
                    <ul className={'flex flex-col space-y-4'}>
                        {lists.map(item => (
                            <ListItems item={item} />
                        ))}
                        <li>
                            <a href={'/auth/login'} className={'w-full bg-primary text-white px-4 py-2 rounded-md font-bold'}>
                                Create an Account
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="pt-20"> </div>
        </>

    );
};

export default Header;