import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { useState } from "react";
import { DashboardLinks } from "../../constants/Links.jsx";
import classNames from "classnames";

const Sidebar = ({isMobile}) => {
    const [staticSidebar, setStaticSidebar] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const toggleStaticSidebar = () => {
        setStaticSidebar(!staticSidebar);
    };
    const toggleHover = () => {
        if (isMobile) {
            setIsHovered(false);
        } else {
            setIsHovered(!isHovered);
        }
    }

    return (
        // Sidebar Start
        <aside
            className={classNames(
                'duration-200 transition-all ease-in-out bg-gradient-to-b from-gray-900 to-gray-800 text-gray-400 px-6 py-6 fixed sm:relative h-full z-20 flex flex-col',
                {
                    'w-64': staticSidebar,
                    'w-20': !staticSidebar,
                    'w-20 hover:w-64': !staticSidebar, // Apply hover effect only when sidebar is not static
                    'hidden md:block': !isMobile, // Hide sidebar on mobile unless toggled
                    'block': isMobile // Show sidebar on mobile when toggled
                }
            )}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        >
            <div className={'flex items-center justify-between mb-8'}>
                <div className={'flex justify-center items-center'}>
                    {/* Conditionally render logos based on hover state */}
                    {isHovered || staticSidebar ? (
                        <h3 className={'font-extrabold text-white text-2xl'}>iamLeb</h3>
                    ) : (
                        <img
                            className={'h-6'}
                            src="https://themesbrand.com/velzon/html/modern/assets/images/logo-sm.png"
                            alt=""
                        />
                    )}
                </div>

                {/*hide this when width is 20*/}
                {isHovered && (
                    <div onClick={toggleStaticSidebar} className={'cursor-pointer'}>
                        {staticSidebar ? <FaRegDotCircle /> : <FaRegCircle />}
                    </div>
                )}
            </div>

            <div className={'flex-1'}>
                <span className={'uppercase text-xs font-bold'}>Menu</span>
                {DashboardLinks.map(item => (
                    <div key={item.key} className={`${item.disabled && 'cursor-no-drop'} hover:text-white`} title={item.disabled && "This Feature is Disabled"}>
                        <a href={item.path} key={item.id}>
                            <div className={'mt-4'}>
                                {isHovered || staticSidebar ?
                                    (
                                        <div className={`flex space-x-2 items-center ${item.disabled && 'line-through'}`}>
                                            {item.icon}
                                            <span>{item.label}</span></div>
                                    ) :
                                    item.icon
                                }
                            </div>
                        </a>
                    </div>

                ))}
            </div>

        </aside>
        // Sidebar End
    );
};

export default Sidebar;
