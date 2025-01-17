import {useState} from 'react';
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

    // State to track the active menu item
    const [activeMenu, setActiveMenu] = useState("orders");

    // Function to render the appropriate component
    const renderContent = () => {
        switch (activeMenu) {
            case "orders":
                return <Myorders />;
            case "yummyOne":
                return <Myyummyone />;
            case "favourites":
                return <Myfavorates />;
            case "payments":
                return <Mypayments/>;
            case "addresses":
                return <Myaddress />;
            case "settings":
                return <Mysettings/>;
            default:
                return <div>Select a menu item to view details.</div>;
        }
    };

    return (
        <div className="bg-[#41728B] min-h-screen flex items-center justify-center">
            <div className="bg-white mt-28 w-[80%] max-w-[1300px] min-h-[600px] p-10 rounded-lg shadow-lg flex gap-8">
                {/* Sidebar Menu */}
                <div className="w-1/3 mt-8 ">
                    <ul className="space-y-14 border-r ">
                        {menuItems.map((item) => (
                            <li
                                key={item.key}
                                className={`text-[#41728B] font-medium cursor-pointer hover:text-[#30566B] flex items-center gap-3 ${
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
                <div className="w-2/3 pl-4">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default Profilepage;
