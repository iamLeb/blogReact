import {IoCalendarOutline, IoLayersOutline} from "react-icons/io5";
import {CiCircleList, CiCirclePlus} from "react-icons/ci";
import {FaRegComments} from "react-icons/fa";
import {TbUsersGroup} from "react-icons/tb";
import {useEffect, useState} from "react";
import axios from "axios";

const boxes = [
    {
        id: 1,
        title: 'Total Post',
        count: '100.00',
        linkLabel: 'View all posts',
        increase: '+16.24',
        icon: <CiCircleList />,
        color: 'bg-yellow-600'
    },

    {
        id: 2,
        title: 'Total Categories',
        count: '17',
        linkLabel: 'View all category',
        increase: '+16.24',
        icon: <IoLayersOutline />,
        color: 'bg-purple-200'
    },

    {
        id: 3,
        title: 'Total Comments',
        count: '100.00',
        linkLabel: 'View all comment',
        increase: '+16.24',
        icon: <FaRegComments />,
        color: 'bg-green-200'
    },

    {
        id: 4,
        title: 'Total User',
        count: '100.00',
        linkLabel: 'View all users',
        increase: '+16.24',
        icon: <TbUsersGroup />,
        color: 'bg-blue-200'
    }
];

const Index = () => {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    return (
        <main className={'p-4'}>
            <div className={'md:flex justify-between items-center sm:space-y-4 space-y-4'}>
                <div>
                    <h2 className={'font-extrabold'}>Good Morning, iamLeb!</h2>
                    <p className={'text-sm'}>Here's what's happening with your store today.</p>
                </div>
                <div className={'hidden md:hidden lg:flex items-center space-x-4 sm:space-y-0 space-y-4'}>
                    <div className={'relative'}>
                        <input placeholder={'01 Jan, 2024 to 31 jan, 2024'} className={'w-full sm:w-60 rounded-md px-2  outline-0 text-sm h-10'} type="text"/>
                        <div
                            className={'absolute flex justify-center items-center right-0 top-0 w-[18%] bg-primary hover:bg-blue-400 cursor-pointer rounded-r-md h-10 text-white'}>
                            <IoCalendarOutline />
                        </div>
                    </div>
                    <div>
                        <div className={'flex justify-start space-x-4 mt-5 sm:mt-0 items-center'}>
                            <button
                                className={'flex justify-center items-center space-x-1 bg-green-300 hover:bg-green-400 text-white font-semibold text-bold rounded-md w-32 py-3 text-sm'}>
                                <CiCirclePlus size={20}/> <span>Create Post</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={'grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 my-5'}>
                {boxes.map(box => (
                    <div key={box.id} className={'bg-white p-4 rounded-md shadow-md flex-1 duration-300'}>
                        <div className={'flex justify-between'}>
                            <h3 className={'font-bold'}>{box.title}</h3>
                            <span className={'font-bold text-green-600'}>{box.increase}</span>
                        </div>

                        <h1 className={'font-extrabold mt-3 text-xl'}>{box.count}</h1>

                        <div className={'flex justify-between items-end'}>
                            <a href='/' className={'text-sm underline'}>{box.linkLabel}</a>
                            <div className={`w-9 h-9 ${box.color} rounded-md text-white flex justify-center items-center`}>{box.icon}</div>
                        </div>
                    </div>

                ))}
            </div>
        </main>
    );
};

export default Index;