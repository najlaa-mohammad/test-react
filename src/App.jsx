import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  // بيانات وهمية (dummy data)
  const dummyData = [
    {
      title: "Instant Email or Text Delivery",
      img: "https://m.media-amazon.com/images/I/51LqnrDIoGL._SL1266_.jpg",
      rate: 3,
      price: 2000,
      insteadOf: 7500,
    },
    {
      title: "Instant Email or Text Delivery",
      img: "https://m.media-amazon.com/images/I/31x451MtRuL._AC_UL480_FMwebp_QL65_.jpg",
      rate: 4,
      price: 4000,
      insteadOf: 8500,
    },
    {
      title: "Instant Email or Text Delivery",
      img: "https://m.media-amazon.com/images/I/71mDTOYtDSL._AC_SX679_.jpg",
      rate: 4,
      price: 4000,
      insteadOf: 8500,
    },
  ];

  // استخدام useEffect لتحميل البيانات عند بداية تشغيل المكون
  useEffect(() => {
    setProducts(dummyData);
  }, []);

  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <img src={product.img} alt={product.title} width="150" />
            <h3>{product.title}</h3>
            <p>Rating: {product.rate} ⭐</p>
            <p>
              Price: ${product.price} <del>${product.insteadOf}</del>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
