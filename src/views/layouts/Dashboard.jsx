import {Outlet} from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar.jsx";
import Header from "../../components/dashboard/Header.jsx";
import {useState} from "react";
import classNames from "classnames";
const Dashboard = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [searchBar, setSearchBar] = useState(false);

    const toggleSearchBar = () => {
        setIsMobile(false);
        setSearchBar(!searchBar);
    };
    const toggleMobile = () => {
        setSearchBar(false);
        setIsMobile(!isMobile);
    }

    // Combine the onClick functionalities into one handler
    const handleClick = () => {
        if (searchBar) toggleSearchBar();
        if (isMobile) toggleMobile();
    };

    return (
        <div className={'bg-neutral-100 w-screen h-screen flex overflow-hidden'}>
            <Sidebar isMobile={isMobile} />
            <div className={'flex-1 overflow-auto'}>
                <Header searchBar={searchBar} toggleSearchBar={toggleSearchBar} isMobile={isMobile} toggleMobile={toggleMobile} />
                <div onClick={handleClick}>
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;