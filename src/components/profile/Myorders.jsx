


import React from "react";

function Myorders() {
  return (
    <div className="min-h-screen p-4 sm:p-6">
      {/* Page Header */}
      <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
        My Orders
      </h1>

      {/* Order Cards */}
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 sm:p-8 m-4 sm:m-6 transition-transform transform hover:scale-105 max-w-lg sm:max-w-xl lg:max-w-4xl mx-auto" // Increased width for large devices
          >
            <div className="flex flex-col sm:flex-row sm:items-start">
              {/* Image Section */}
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${index % 2 === 0 ? 'lhuvstuevrtqei24a2eu' : '2a9921eabc6c0423a108f9a8db094c39'}`}
                alt="Dish"
                className="w-full sm:w-24 sm:h-24 rounded-lg object-cover mb-4 sm:mb-0"
              />

              {/* Content Section */}
              <div className="sm:ml-4 flex-1">
                <h2 className="text-lg font-bold text-center sm:text-left">
                  Continental Park Hotel
                </h2>
                <p className="text-sm text-gray-500 text-center sm:text-left">
                  Governor Peta
                </p>
                <p className="text-[10px] text-gray-500 text-center sm:text-left">
                  ORDER #192044949984297 | Sun, Dec 1, 2024, 11:19 PM
                </p>
                <p className="text-[12px] text-gray-600 mt-2 text-center sm:text-left">
                  Delivered on Sun, Dec 1, 2024, 11:48 PM
                  <span className="ml-2 text-green-600">✔</span>
                </p>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Order Details Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:gap-6 w-full">
                {/* Buttons */}
                <div className="flex gap-2 mb-4 sm:mb-0">
                  <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
                    Reorder
                  </button>
                  <button className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400">
                    Help
                  </button>
                </div>

                {/* Total Paid */}
                <p className="font-bold text-gray-800 text-center sm:text-left">
                  Total Paid: ₹467
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Myorders;
