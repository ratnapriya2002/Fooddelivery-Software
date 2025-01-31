// import React, { useState } from "react";
// import FiltersSection from "./filterssection"; // Import the FiltersSection component
// import data from "./offerspagedata";

// function Offers() {
//   const [recipes, setRecipes] = useState(data); // Initially set to all data
//   const [activeFilter, setActiveFilter] = useState(null); // Track the active filter

//   // Function to handle filter changes
//   const handleFilter = (filter) => {
//     setActiveFilter(filter); // Update the active filter state

//     // Apply filtering logic based on the selected filter
//     if (filter === "Offers") {
//       setRecipes(
//         data.filter(
//           (recipe) => recipe.amount && parseFloat(recipe.amount.slice(1)) < 10
//         )
//       ); // Filter items below $10
//     } else if (filter === "Fast Delivery") {
//       setRecipes(data.filter((recipe, index) => index % 2 === 0)); // Filter items based on delivery logic
//     } else if (filter === "Ratings 4.0+") {
//       setRecipes(data.filter((recipe) => recipe.rating >= 4.0)); // Filter items with ratings 4.0 and above
//     } else if (filter === "Pure Veg") {
//       setRecipes(
//         data.filter((recipe) => recipe.name.toLowerCase().includes("veg"))
//       ); // Filter items containing "veg" in the name
//     } else {
//       setRecipes(data); // Reset to show all data
//     }
//   };

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
//       <FiltersSection
//         activeFilter={activeFilter} // Pass the active filter state
//         onFilterChange={handleFilter} // Pass the filter change handler
//       />

//       {/* Food Items Section */}
//       <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {recipes.map((recipe, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg overflow-hidden transition-shadow duration-300"
//           >
//             {/* Food Image */}
//             <div className="relative">
//               <img
//                 src={recipe.image || "https://via.placeholder.com/150"}
//                 alt={recipe.title || "Recipe Image"}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg flex items-center space-x-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={2}
//                   stroke="currentColor"
//                   className="w-4 h-4"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M16.24 7.76a6 6 0 11-8.48 8.48 6 6 0 018.48-8.48z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M9 12h6m-3-3v6"
//                   />
//                 </svg>
//                 <span>₹{index * 20 + 80} OFF</span>
//                 <span className="text-white/80 text-[0.75rem] font-light">
//                   Above ₹{index * 100 + 200}
//                 </span>
//               </div>
//             </div>

//             {/* Food Details */}
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
//                 {recipe.name || "Restaurant Name"}
//               </h3>
//               <p className="text-sm text-gray-600 line-clamp-2 mb-4">
//                 {recipe.description || "Biryani, Tandoor, Chinese, Andhra"}
//               </p>
//               <div className="flex items-center justify-between text-sm text-gray-600">
//                 <span className="font-bold text-green-600">
//                   ⭐{recipe.rating || "4.5"}
//                 </span>
//                 <span>25-30 mins</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Offers;

import React, { useState } from "react";
import FiltersSection from "./filterssection"; // Import the FiltersSection component
import data from "./offerspagedata";
import { Link } from "react-router-dom";

function Offers() {
  const [recipes, setRecipes] = useState(data); // Initially set to all data
  const [activeFilter, setActiveFilter] = useState(null); // Track the active filter

  // Function to handle filter changes
  const handleFilter = (filter) => {
    setActiveFilter(filter); // Update the active filter state

    // Apply filtering logic based on the selected filter
    if (filter === "Offers") {
      setRecipes(
        data.filter(
          (recipe) => recipe.amount && parseFloat(recipe.amount.slice(1)) < 10
        )
      ); // Filter items below $10
    } else if (filter === "Fast Delivery") {
      setRecipes(data.filter((recipe, index) => index % 2 === 0)); // Filter items based on delivery logic
    } else if (filter === "Ratings 4.0+") {
      setRecipes(data.filter((recipe) => recipe.rating >= 4.0)); // Filter items with ratings 4.0 and above
    } else if (filter === "Pure Veg") {
      setRecipes(
        data.filter((recipe) => recipe.name.toLowerCase().includes("veg"))
      ); // Filter items containing "veg" in the name
    } else {
      setRecipes(data); // Reset to show all data
    }
  };

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
      <FiltersSection
        activeFilter={activeFilter} // Pass the active filter state
        onFilterChange={handleFilter} // Pass the filter change handler
      />

      {/* Food Items Section */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe, index) => (
          <Link
            to={`/restaurants/${recipe.id}`}
            className="hover:scale-95 transition ease-in-out duration-300 relative z-10"
            key={index}
          >
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-shadow duration-300"
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
                  <span className="text-white/80 text-[0.75rem] font-light">
                    Above ₹{index * 100 + 200}
                  </span>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Offers;
