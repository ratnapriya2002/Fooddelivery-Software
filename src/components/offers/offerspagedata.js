const data = [
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/w_660/q0pioedu7pxrbd3m8ukj",
    name: "Delicious Pizza",
    rating: 4.5,
    amount: "$10.99",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lhuvstuevrtqei24a2eu",
    name: "Burger Feast",
    rating: 4.2,
    amount: "$8.49",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4198329dc297b9ec70b9c7a64b4993bb",
    name: "Pasta Delight",
    rating: 4.8,
    amount: "$12.49",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/1c188b92-3fb6-4065-abb9-d149366e4431_71320.jpg",
    name: "Grilled Chicken",
    rating: 4.3,
    amount: "$15.00",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_70500.JPG",
    name: "Veggie Salad",
    rating: 4.6,
    amount: "$7.99",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/5b85787d-afa7-4deb-8842-eb42c548b2e8_79547.jpg",
    name: "Spaghetti Bolognese",
    rating: 4.4,
    amount: "$11.49",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ecf07879-cb4d-49a4-bbe6-9bd81b7b8602_69570.JPG",
    name: "Fish Tacos",
    rating: 4.7,
    amount: "$13.59",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/2/3d407fbf-27ff-421a-a379-c1ecebdd2eaf_944439.jpg",
    name: "Chicken Wings",
    rating: 4.0,
    amount: "$9.99",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hdum49wbfeg5lmgqlgnt",
    name: "Cheese Burger",
    rating: 4.3,
    amount: "$6.99",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/43ba1c7c-1e47-4a67-92ed-b50c01b79c6c_218610.jpg",
    name: "BBQ Ribs",
    rating: 4.9,
    amount: "$17.49",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1abb89624b491497c8cff182d95ac457",
    name: "Margarita Pizza",
    rating: 4.1,
    amount: "$10.49",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/17cf7ab8-55b0-432f-9461-a3ba13c5be05_640760.JPG",
    name: "Caesar Salad",
    rating: 4.5,
    amount: "$8.29",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a8dfa8b2a73ddf7c6193465ab24c898",
    name: "Chicken Caesar Wrap",
    rating: 4.0,
    amount: "$7.99",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lhuvstuevrtqei24a2eu",
    name: "Burger Feast",
    rating: 4.2,
    amount: "$8.49",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4198329dc297b9ec70b9c7a64b4993bb",
    name: "Pasta Delight",
    rating: 4.8,
    amount: "$12.49",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/1c188b92-3fb6-4065-abb9-d149366e4431_71320.jpg",
    name: "Grilled Chicken",
    rating: 4.3,
    amount: "$15.00",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/55d0daa1-ad2e-4893-be06-4709c5c68d49_70500.JPG",
    name: "Veggie Salad",
    rating: 4.6,
    amount: "$7.99",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/29/5b85787d-afa7-4deb-8842-eb42c548b2e8_79547.jpg",
    name: "Spaghetti Bolognese",
    rating: 4.4,
    amount: "$11.49",
  },
  {
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/ecf07879-cb4d-49a4-bbe6-9bd81b7b8602_69570.JPG",
    name: "Fish Tacos",
    rating: 4.7,
    amount: "$13.59",
  },
];
export default data;
