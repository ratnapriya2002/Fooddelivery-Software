

import { useState } from 'react';
import { FaShoppingCart, FaStar, FaHeart, FaWallet, FaMapMarkerAlt, FaCog } from 'react-icons/fa';
import Myaddress from './Myaddress';
import Myfavorates from './Myfavorates';
import Myorders from './Myorders';
import Mypayments from './Mypayments';
import Mysettings from './Mysettings';
import Myyummyone from './Myyummyone';

function Profilepage() {
    const menuItems = [
        { key: "orders", label: "Orders", icon: <FaShoppingCart /> },
        { key: "yummyOne", label: "Yummy One", icon: <FaStar /> },
        { key: "favourites", label: "Favourites", icon: <FaHeart /> },
        { key: "payments", label: "Payments", icon: <FaWallet /> },
        { key: "addresses", label: "Addresses", icon: <FaMapMarkerAlt /> },
        { key: "settings", label: "Settings", icon: <FaCog /> },
    ];

    const [activeMenu, setActiveMenu] = useState("orders");

    const renderContent = () => {
        switch (activeMenu) {
            case "orders":
                return <Myorders />;
            case "yummyOne":
                return <Myyummyone />;
            case "favourites":
                return <Myfavorates />;
            case "payments":
                return <Mypayments />;
            case "addresses":
                return <Myaddress />;
            case "settings":
                return <Mysettings />;
            default:
                return <div>Select a menu item to view details.</div>;
        }
    };

    return (
        <div className="bg-[#41728B] min-h-screen flex items-center justify-center p-4 sm:p-8">
            <div className="bg-white w-full max-w-[1300px] min-h-[600px] p-6 sm:p-10 rounded-lg shadow-lg flex flex-col lg:flex-row gap-6">
                {/* Sidebar Menu */}
                <div className="lg:w-1/3">
                    <ul className="space-y-8 lg:space-y-10 border-b lg:border-r lg:border-b-0 pb-6 lg:pb-0">
                        {menuItems.map((item) => (
                            <li
                                key={item.key}
                                className={`text-[#41728B] font-medium cursor-pointer hover:text-[#30566B] flex items-center gap-3 py-3 ${
                                    activeMenu === item.key ? "font-bold text-[#30566B]" : ""
                                }`}
                                onClick={() => setActiveMenu(item.key)}
                            >
                                {item.icon} {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Main Content */}
                <div className="lg:w-2/3">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Profilepage;
