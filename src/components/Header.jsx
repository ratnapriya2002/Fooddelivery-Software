// import {
//   Bars3Icon,
//   BuildingOfficeIcon,
//   ChevronDownIcon,
//   HomeIcon,
//   MagnifyingGlassIcon,
//   MapPinIcon,
//   PhoneIcon,
//   ShoppingBagIcon,
//   GiftIcon ,
//   UserIcon,
// } from '@heroicons/react/24/solid';
// // import { GiftIcon } from '@heroicons/react/solid';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectItemsInCart } from '../features/cart/cartSlice';
// import {
//   closeLocationModal,
//   openLocationModal,
//   toggleMenu,
// } from '../features/app/appSlice';
// import LocationModal from './LocationModal';
// import { selectAddress } from '../features/address/addressSlice';
// import { useState } from 'react';

// const Header = () => {
//   const { isMenuOpen, isLocationModalOpen } = useSelector((state) => state.app);
//   const [isprofilemenuopen,setisprofilemenuopen] = useState(false)
//   const dispatch = useDispatch();
//   const items = useSelector(selectItemsInCart);
//   const { address } = useSelector(selectAddress);

//   const handleToggleMenu = () => dispatch(toggleMenu());

//   const handleCloseModal = () => dispatch(closeLocationModal());
//   const handleOpenModal = () => dispatch(openLocationModal());
//   const handleprofile = () =>{
//     setisprofilemenuopen(true)
//     setisprofilemenuopen(false)
//   }
//   return (
//     <header className='sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100'>
//       <div className='container-max flex justify-between items-center'>
//         <div className='flex items-center gap-2 md:gap-4'>
          
//           <h3 className='brandname '><span >Y</span>ummy</h3>

//           <button
//             onClick={handleOpenModal}
//             className='text-xs md:text-sm flex items-center gap-1'
//           >
//             <MapPinIcon className='w-4 h-4 text-gray-700' />
//             {address?.city}
//             <ChevronDownIcon className='w-4 h-4 text-orange-500' />
//           </button>
//         </div>

//         {isLocationModalOpen ? <LocationModal /> : null}

//         <ul className='text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex'>
//           <li>
//             <Link
//               to='/search'
//               className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//             >
//               <MagnifyingGlassIcon className='w-4 h-4 text-gray-700' />{' '}
//               <p className='hidden md:block'>Search</p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to='/'
//               className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//             >
//               <HomeIcon className='w-4 h-4 text-gray-700' />{' '}
//               <p className='hidden md:block'>Home</p>
//             </Link>
//           </li>
          
//                 <li>
//         <Link
//           to='/offers'
//           className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//         >
//           <GiftIcon className='w-4 h-4 text-gray-700' />{' '}
//           <p className='hidden md:block'>Offers</p>
//         </Link>
//       </li>
//           {isLocationModalOpen&&(
//              <ReactPopover className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md p-4">
//              <ul>
//                <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">Profile</li>
//                <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">Settings</li>
//                <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">Logout</li>
//              </ul>
//            </ReactPopover>
//           )}
//           <li onMouseEnter={handleprofile}>
//           <Link
//             to='/profile'
//             className='p-2 md:px-4 cursor-pointer hover:bg-gray-50 rounded-md flex items-center gap-2'
//           >
//             <UserIcon className='w-4 h-4 text-gray-700' />{' '}
//             <p className='hidden md:block'>Profile</p>
//           </Link>
//         </li>
//           <li>
//             <Link
//               to='/cart'
//               className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//             >
//               <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
//               <p className='hidden md:block'>Cart</p>
//               {
//                 <p className='absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
//                   {items.length}
//                 </p>
//               }
//             </Link>
//           </li>
//         </ul>
        

//         {!isMenuOpen ? (
//           <div className='shadow-lg transition-all fixed top-full -right-[100%] bg-white h-screen p-4 px-8'>
//             <>
//               <ul className='text-zinc-700 space-y-4'>
//                 <li>
//                   <Link
//                     to='/search'
//                     className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//                   >
//                     <MagnifyingGlassIcon className='w-4 h-4 text-gray-700' />{' '}
//                     <p>Search</p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to='/'
//                     className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//                   >
//                     <HomeIcon className='w-4 h-4 text-gray-700' /> <p>Home</p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to='/offers'
//                     className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//                   >
//                     <BuildingOfficeIcon className='w-4 h-4 text-gray-700' />{' '}
//                     <p>Offers</p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to='/contact'
//                     className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//                   >
//                     <PhoneIcon className='w-4 h-4 text-gray-700' />{' '}
//                     <p>Contact</p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to='/cart'
//                     className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//                   >
//                     <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
//                     <p>Cart</p>
//                     {
//                       <p className='absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
//                         {items.length}
//                       </p>
//                     }
//                   </Link>
//                 </li>
//               </ul>
             
//             </>
//           </div>
//         ) : (
//           <div className='shadow-lg transition-all md:hidden absolute top-full right-0 bg-white h-screen p-4 px-8'>
//             <>
//               <ul className='text-zinc-700 space-y-4'>
//                 <li>
//                   <Link
//                     to='/search'
//                     className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//                   >
//                     <MagnifyingGlassIcon className='w-4 h-4 text-gray-700' />{' '}
//                     <p>Search</p>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to='/'
//                     className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//                   >
//                     <HomeIcon className='w-4 h-4 text-gray-700' /> <p>Home</p>
//                   </Link>
//                 </li>
//                 <li>
//   <Link
//     to='/offers'
//     className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//   >
//     <GiftIcon className='w-4 h-4 text-gray-700' />{' '}
//     <p className='hidden md:block'>Offers</p>
//   </Link>
// </li>
// <li>
//   <Link
//     to='/profile'
//     className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//   >
//     <UserIcon className='w-4 h-4 text-gray-700' />{' '}
//     <p className='hidden md:block'>Profile</p>
//   </Link>
// </li>
//                 <li>
//                   <Link
//                     to='/cart'
//                     className='p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
//                   >
//                     <ShoppingBagIcon className='w-4 h-4 text-gray-700' />{' '}
//                     <p>Cart</p>
//                     {
//                       <p className='absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full'>
//                         {items.length}
//                       </p>
//                     }
//                   </Link>
//                 </li>
//               </ul>
            
//             </>
//           </div>
//         )}

//         <button className='block md:hidden' onClick={handleToggleMenu}>
//           <Bars3Icon className='w-6 h-6' />
//         </button>
//       </div>
//     </header>
//   );
// };
// export default Header;


import {
  Bars3Icon,
  MapPinIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  GiftIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectItemsInCart } from "../features/cart/cartSlice";
import {
  closeLocationModal,
  openLocationModal,
  toggleMenu,
} from "../features/app/appSlice";
import LocationModal from "./LocationModal";
import { useNavigate } from "react-router-dom";
import { selectAddress } from "../features/address/addressSlice";
import { useState } from "react";

const Header = () => {
  const { isMenuOpen, isLocationModalOpen } = useSelector((state) => state.app);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(selectItemsInCart);
  const { address } = useSelector(selectAddress);

  const handleToggleMenu = () => dispatch(toggleMenu());
  const handleOpenModal = () => dispatch(openLocationModal());
  const handleCloseModal = () => dispatch(closeLocationModal());
// write a function 

 



  return (
    <header className="sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100">
      <div className="container-max flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-4">
          <h3 className="brandname">
            <span>Y</span>ummy
          </h3>
          <button
            onClick={handleOpenModal}
            className="text-xs md:text-sm flex items-center gap-1"
          >
            <MapPinIcon className="w-4 h-4 text-gray-700" />
            {address?.city}
            <ChevronDownIcon className="w-4 h-4 text-orange-500" />
          </button>
        </div>

        {isLocationModalOpen && <LocationModal />}

        <ul className="text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex">
          <li>
            <Link
              to="/search"
              className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <MagnifyingGlassIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden md:block">Search</p>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <HomeIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden md:block">Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/offers"
              className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <GiftIcon className="w-4 h-4 text-gray-700" />{" "}
              <p className="hidden md:block">Offers</p>
            </Link>
          </li>

          {/* Profile Icon with Hover Menu */}
          <li
            className="relative"
            onMouseEnter={() => setIsProfileMenuOpen(true)}
            onMouseLeave={() => setIsProfileMenuOpen(false)}
          >
            <div className="p-2 md:px-4 cursor-pointer hover:bg-gray-50 rounded-md flex items-center gap-2">
              <UserIcon className="w-4 h-4 text-gray-700" />
              <p className="hidden md:block">Profile</p>
            </div>
            {isProfileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-40 z-10">
                <ul>
                  <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
                   Orders
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
                  Favorates
                  </li>
                  <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li>
            <Link
              to="/cart"
              className="p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
            >
              <ShoppingBagIcon className="w-4 h-4 text-gray-700" />
              <p className="hidden md:block">Cart</p>
              {items.length > 0 && (
                <p className="absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full">
                  {items.length}
                </p>
              )}
            </Link>
          </li>
        </ul>

        <button className="block md:hidden" onClick={handleToggleMenu}>
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
