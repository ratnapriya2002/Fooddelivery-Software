// import React from "react";

// function FiltersSection() {
//   return (
//     <div className="px-4 sm:px-6 md:px-8 lg:px-12">
//       <div className="max-w-7xl mx-auto flex gap-3 items-center overflow-x-auto scrollbar-hide">
//         {[
//           "Filter",
//           "Sort By",
//           "Offers",
//           "Fast Delivery",
//           "Ratings 4.0+",
//           "Pure Veg",
//         ].map((filter, index) => (
//           <button
//             key={index}
//             className="whitespace-nowrap px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 text-sm font-medium hover:bg-orange-100 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 shadow-sm"
//           >
//             {filter}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FiltersSection;

// FiltersSection.jsx
import React from "react";

function Filterssection({ ActiveFilter, onFilterChange }) {
  const filters = [
    "Filter",
    "Sort By",
    "Offers",
    "Fast Delivery",
    "Ratings 4.0+",
    "Pure Veg",
  ];
  return (
    <div className="max-w-7xl mx-auto mt-8 flex gap-4 items-center overflow-x-auto px-6">
      {filters.map((filter, index) => (
        <button
          key={index}
          className={`whitespace-nowrap px-4 py-2 bg-white border ${
            ActiveFilter === filter
              ? "border-orange-500 bg-orange-100 text-orange-600"
              : "border-gray-300 text-gray-700"
          } rounded-full text-sm font-medium hover:bg-orange-100 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 shadow-sm`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filterssection;
