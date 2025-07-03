import { useEffect, useState } from 'react';
import './ App.css'

const App = () => {
  const [products,setProducts]=useState([])
  const dummyData = [
    {
      title: " Instant Email or Text Delivery",
      img:"https://m.media-amazon.com/images/I/51LqnrDIoGL._SL1266_.jpg",
      rate: 3,
      price: 2000,
      insteadOf: 7500,
    },
    {
      title: " Instant Email or Text Delivery",
      img: src="https://m.media-amazon.com/images/I/31x451MtRuL._AC_UL480_FMwebp_QL65_.jpg" >,
      rate: 4,
      price: 4000,
      insteadOf: 8500,
    },
    {
      title: " Instant Email or Text Delivery",
      img:"https://m.media-amazon.com/images/I/71mDTOYtDSL._AC_SX679_.jpg",
      rate: 4,
      price: 4000,
      insteadOf: 8500,
    },
  ];
  useEffect(()=>{
    
    setProducts(dummyData);
  },[])
  return (
    <>
    <h1>hello react</h1>
      {/* <EffectTwo2 /> */}
    </>
  );
};
export default App;

