import React from 'react';
import {FaBook, FaHome, FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
const lists = [
    { id: 1, name: 'Home', path: '/', icon: <FaHome /> },
    { id: 2, name: 'About', path: '/', icon: <FaBook /> },
    { id: 3, name: 'Search', path: '/', icon: <FaSearch className="transform rotate-90" /> }
];

const ListItems = ({item}) => {
    const navigate = useNavigate();
    return (
            <li key={item.id} className={'cursor-pointer hover:text-gray-700'}>
                <a href={item.path}>
                    <div className={'flex items-center space-x-1'}>
                        {item.icon}
                        <span>{item.name}</span>
                    </div>
                </a>
            </li>
    );
};

export default ListItems;