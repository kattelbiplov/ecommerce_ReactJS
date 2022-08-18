import React, { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import Carousel from "../components/homes/carousel";
import FeatureCard from "../components/homes/featuredcard";

const shopItems=[
  {
    imagePath:"http://nitsnepal.com.np/open/image/cache/catalog/3-18-1-2-600x600-200x200.jpg",
    title:"EZVIZ 1MP C1C Indoor Wi-Fi Camera",
    description:"1MP/720P, 2.8mm@ F2.5, 2 way audio, Smart Motion Detection, magnet installation, 7.5m IR, 1/4 Pro..",
    price:"रु: 3,756",
  },
  {
    imagePath:"http://nitsnepal.com.np/open/image/cache/catalog/41-200x200.jpg",
    title:"G41 Mother Board",
    description:"Chipset: INTELG41+ICH7Socket: Support LGA 775 ProcessorMemory: 2x DDR3VGA Integrated Intel GraphicsL..",
    price:"रु: 3,500",
  },
  {
    imagePath:"http://nitsnepal.com.np/open/image/cache/catalog/41-200x200.jpg",
    title:"G41 Mother Board",
    description:"Chipset: INTELG41+ICH7Socket: Support LGA 775 ProcessorMemory: 2x DDR3VGA Integrated Intel GraphicsL..",
    price:"रु: 3,500",
  },
  {
    imagePath:"http://nitsnepal.com.np/open/image/cache/catalog/41-200x200.jpg",
    title:"G41 Mother Board",
    description:"Chipset: INTELG41+ICH7Socket: Support LGA 775 ProcessorMemory: 2x DDR3VGA Integrated Intel GraphicsL..",
    price:"रु: 3,500",
  },
]
const Home = () => {
  useTitle("Homepage");
  return (
    <React.Fragment>
      <Carousel />
      <div style={{display:"flex",flexDirection:"row",flexWrap:"no-wrap",justifyContent:"space-between"}}>
       {shopItems.map((item)=>{
         return(
           <>
           <FeatureCard data={item} />
           </>
         );
       })}
      </div>

      
    </React.Fragment>
  );
};

export default Home;
