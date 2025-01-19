


// import React, { useEffect, useState } from "react";

// function Offers() {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     // Fetch recipes from the DummyJSON API
//     fetch("https://dummyjson.com/recipes")
//       .then((response) => response.json())
//       .then((data) => setRecipes(data.recipes));
//   }, []);

//   return (
//     <div className="min-h-screen">
//       {/* Banner Section */}
//       <div className="relative w-[80%] mt-5 h-80 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg">
//         <img
//           src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/Food_collectionbanner.png"
//           alt="Food Offers Banner"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
//         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-8 text-white">
//           <h2 className="text-3xl md:text-5xl font-bold">
//             Great Food Offers Near You
//           </h2>
//           <p className="text-lg md:text-2xl">Order Online Now!</p>
//         </div>
//       </div>

//       {/* Filters Section */}
//       <div className="max-w-7xl mx-auto mt-8 flex gap-4 items-center overflow-x-auto px-6">
//         {["Filter", "Sort By", "Offers", "Fast Delivery", "Ratings 4.0+", "Pure Veg"].map(
//           (filter) => (
//             <button
//               key={filter}
//               className="px-4 py-2 bg-gray-200 text-sm font-medium rounded-full hover:bg-gray-300"
//             >
//               {filter}
//             </button>
//           )
//         )}
//       </div>

//       {/* Food Items Section */}
//       <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {recipes.map((recipe, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg overflow-hidden transition-shadow duration-300"
//           >
//             {/* Food Image */}
//             <div className="relative">
//               <img
//                 src={recipe.image || "https://via.placeholder.com/150"} // Use recipe's image or fallback to placeholder
//                 alt={recipe.title}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded">
//                 ₹{index * 20 + 80} OFF ABOVE ₹{index * 100 + 200}
//               </div>
//             </div>

//             {/* Food Details */}
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
//                 {recipe.title || "Restaurant Name"}
//               </h3>
//               <p className="text-sm text-gray-600 line-clamp-2 mb-4">
//                 {recipe.description || "Biryani, Tandoor, Chinese, Andhra"}
//               </p>
//               <div className="flex items-center justify-between">
//                 <div className="text-sm text-gray-600">
//                   <span className="font-bold text-green-600">4.3</span> · 25-30 mins
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Offers;


import React, { useEffect, useState } from "react";
import Filterssection from "./filterssection";
function Offers() {
  const [recipes, setRecipes] = useState([]);
  
  // Example of custom image URLs array
  // const customImages = [
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/w_660/q0pioedu7pxrbd3m8ukj", // Image 1
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lhuvstuevrtqei24a2eu", // Image 2
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4198329dc297b9ec70b9c7a64b4993bb", // Image 3
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/1c188b92-3fb6-4065-abb9-d149366e4431_71320.jpg", 
  //   // Add as many as you want
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_70500.JPG",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/5b85787d-afa7-4deb-8842-eb42c548b2e8_79547.jpg",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ecf07879-cb4d-49a4-bbe6-9bd81b7b8602_69570.JPG",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/3d407fbf-27ff-421a-a379-c1ecebdd2eaf_944439.jpg",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hdum49wbfeg5lmgqlgnt",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/43ba1c7c-1e47-4a67-92ed-b50c01b79c6c_218610.jpg",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1abb89624b491497c8cff182d95ac457",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/17cf7ab8-55b0-432f-9461-a3ba13c5be05_640760.JPG",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a8dfa8b2a73ddf7c6193465ab24c898", // Image 1
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lhuvstuevrtqei24a2eu", // Image 2
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4198329dc297b9ec70b9c7a64b4993bb", // Image 3
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/1c188b92-3fb6-4065-abb9-d149366e4431_71320.jpg", 
  //   // Add as many as you want
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_70500.JPG",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/5b85787d-afa7-4deb-8842-eb42c548b2e8_79547.jpg",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ecf07879-cb4d-49a4-bbe6-9bd81b7b8602_69570.JPG",
    
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/b7cb2103-0d79-45d8-b929-453d0f384d33_508849.jpg",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gcvx1h3utabwzxfbagxg",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/8/65c6f8e9-2947-4c14-b48c-e5bb1085593f_405703.jpg",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ktatbkienbbkqlh3stgd",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/17cf7ab8-55b0-432f-9461-a3ba13c5be05_640760.JPG",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k5qxlbgx26nmxfoevilu", // Image 1
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/p2k9r9zkeqcjhohsgrfu", // Image 2
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4198329dc297b9ec70b9c7a64b4993bb", // Image 3
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/1c188b92-3fb6-4065-abb9-d149366e4431_71320.jpg", 
  //   // Add as many as you want
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_70500.JPG",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/5b85787d-afa7-4deb-8842-eb42c548b2e8_79547.jpg",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ecf07879-cb4d-49a4-bbe6-9bd81b7b8602_69570.JPG",
  //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660"
  // ];

 const data = [
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/w_660/q0pioedu7pxrbd3m8ukj",
      "name": "Delicious Pizza",
      "rating": 4.5,
      "amount": "$10.99"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lhuvstuevrtqei24a2eu",
      "name": "Burger Feast",
      "rating": 4.2,
      "amount": "$8.49"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4198329dc297b9ec70b9c7a64b4993bb",
      "name": "Pasta Delight",
      "rating": 4.8,
      "amount": "$12.49"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/1c188b92-3fb6-4065-abb9-d149366e4431_71320.jpg",
      "name": "Grilled Chicken",
      "rating": 4.3,
      "amount": "$15.00"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_70500.JPG",
      "name": "Veggie Salad",
      "rating": 4.6,
      "amount": "$7.99"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/5b85787d-afa7-4deb-8842-eb42c548b2e8_79547.jpg",
      "name": "Spaghetti Bolognese",
      "rating": 4.4,
      "amount": "$11.49"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ecf07879-cb4d-49a4-bbe6-9bd81b7b8602_69570.JPG",
      "name": "Fish Tacos",
      "rating": 4.7,
      "amount": "$13.59"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/3d407fbf-27ff-421a-a379-c1ecebdd2eaf_944439.jpg",
      "name": "Chicken Wings",
      "rating": 4.0,
      "amount": "$9.99"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hdum49wbfeg5lmgqlgnt",
      "name": "Cheese Burger",
      "rating": 4.3,
      "amount": "$6.99"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/43ba1c7c-1e47-4a67-92ed-b50c01b79c6c_218610.jpg",
      "name": "BBQ Ribs",
      "rating": 4.9,
      "amount": "$17.49"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1abb89624b491497c8cff182d95ac457",
      "name": "Margarita Pizza",
      "rating": 4.1,
      "amount": "$10.49"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/17cf7ab8-55b0-432f-9461-a3ba13c5be05_640760.JPG",
      "name": "Caesar Salad",
      "rating": 4.5,
      "amount": "$8.29"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a8dfa8b2a73ddf7c6193465ab24c898",
      "name": "Chicken Caesar Wrap",
      "rating": 4.0,
      "amount": "$7.99"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lhuvstuevrtqei24a2eu",
      "name": "Burger Feast",
      "rating": 4.2,
      "amount": "$8.49"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4198329dc297b9ec70b9c7a64b4993bb",
      "name": "Pasta Delight",
      "rating": 4.8,
      "amount": "$12.49"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/1c188b92-3fb6-4065-abb9-d149366e4431_71320.jpg",
      "name": "Grilled Chicken",
      "rating": 4.3,
      "amount": "$15.00"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_70500.JPG",
      "name": "Veggie Salad",
      "rating": 4.6,
      "amount": "$7.99"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/5b85787d-afa7-4deb-8842-eb42c548b2e8_79547.jpg",
      "name": "Spaghetti Bolognese",
      "rating": 4.4,
      "amount": "$11.49"
    },
    {
      "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ecf07879-cb4d-49a4-bbe6-9bd81b7b8602_69570.JPG",
      "name": "Fish Tacos",
      "rating": 4.7,
      "amount": "$13.59"
    }
  ]
  
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div className="relative w-[80%] mt-5 h-80 max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/Food_collectionbanner.png"
          alt="Food Offers Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-8 text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Great Food Offers Near You
          </h2>
          <p className="text-lg md:text-2xl">Order Online Now!</p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto mt-8 flex gap-4 items-center overflow-x-auto px-6">
        <Filterssection/>
      </div>

      {/* Food Items Section */}
     
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {data.map((recipe, index) => (
    <div
      key={index}
      className="bg-white rounded-lg  overflow-hidden  transition-shadow duration-300"
    >
      {/* Food Image */}
      <div className="relative">
        <img
          src={recipe.image || "https://via.placeholder.com/150"}
          alt={recipe.title || "Recipe Image"}
          className="w-full h-40 object-cover"
        />
       <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg flex items-center space-x-1">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.24 7.76a6 6 0 11-8.48 8.48 6 6 0 018.48-8.48z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-3-3v6"
    />
  </svg>
  <span>₹{index * 20 + 80} OFF</span>
  <span className="text-white/80 text-[0.75rem] font-light">Above ₹{index * 100 + 200}</span>
</div>

      </div>

      {/* Food Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {recipe.name || "Restaurant Name"}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {recipe.description || "Biryani, Tandoor, Chinese, Andhra"}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="font-bold text-green-600">
            ⭐{recipe.rating || "4.5"} 
          </span>
          <span>25-30 mins</span>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Offers;
