import {MdOutlineDashboardCustomize, MdOutlineSupportAgent} from "react-icons/md";
import {IoIosLogOut} from "react-icons/io";
import {CiSettings} from "react-icons/ci";
import {BsFillFileEarmarkPostFill} from "react-icons/bs";
import {IoLayersOutline} from "react-icons/io5";
import {LuUsers} from "react-icons/lu";

export const DashboardLinks = [
    {
        key: 1,
        label: 'Dashboard',
        path: '/secure',
        icon: <MdOutlineDashboardCustomize className={'py-2'} size={36} />
    },
    {
        key: 2,
        label: 'Posts',
        path: '/secure/post/create',
        icon: <BsFillFileEarmarkPostFill className={'py-2'} size={36} />,
    },
    {
        key: 3,
        label: 'Category',
        path: '/secure/category/create',
        icon: <IoLayersOutline className={'py-2'} size={36} />,
        dropdown: {
            key: 3,
            name: ['Create Category', 'View Category'],
        }
    },
    {
        key: 4,
        label: 'Users',
        path: 'secure/users',
        icon: <LuUsers className={'py-2'} size={36} />,
        disabled: true,
        dropdown: {
            key: 4,
            name: ['Create Users', 'View Users'],
        }
    }

];

export const BottomLinks = [
    {
        key: 1,
        label: 'Settings',
        path: 'secure/settings',
        icon: <CiSettings className={'py-2'} size={36} />,
        logout: false
    },
    {
        key: 2,
        label: 'Help & Support',
        path: 'secure/help',
        icon: <MdOutlineSupportAgent className={'py-2'} size={36} />,
        logout: false
    },
    {
        key: 3,
        label: 'Logout',
        path: '/logout',
        icon: <IoIosLogOut className={'py-2'} size={36} />,
        logout: true
    }

];