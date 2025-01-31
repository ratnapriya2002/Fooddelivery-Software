// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   address: JSON.parse(localStorage.getItem("address")) || {
//     latitude: 28.6667,
//     longitude: 77.2167,
//     city: "Delhi",
//   },
// };

// const addressSlice = createSlice({
//   name: "address",
//   initialState,
//   reducers: {
//     setAddress: (state, action) => {
//       console.log(state);
//       state.address = action.payload;

//       localStorage.setItem("address", JSON.stringify(state.address));
//     },
//   },
// });

// export const selectAddress = ({ address }) => address;

// export const { setAddress } = addressSlice.actions;

// export default addressSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: (() => {
    try {
      const storedAddress = localStorage.getItem("address");
      return storedAddress
        ? JSON.parse(storedAddress)
        : {
            latitude: 28.6667,
            longitude: 77.2167,
            city: "Delhi",
          };
    } catch (error) {
      console.error("Error parsing address from localStorage:", error);
      return {
        latitude: 28.6667,
        longitude: 77.2167,
        city: "Delhi",
      };
    }
  })(),
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
      try {
        localStorage.setItem("address", JSON.stringify(state.address));
      } catch (error) {
        console.error("Error saving address to localStorage:", error);
      }
    },
  },
});

export const selectAddress = ({ address }) => address;

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
