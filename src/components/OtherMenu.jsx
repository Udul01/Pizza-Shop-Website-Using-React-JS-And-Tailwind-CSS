import React from "react";
import MenuCard from "../layouts/MenuCard";

const OtherMenu = () => {
  const menuData = [
  
    {
      id: 7,
      img: "src/assets/img/menu1.jpg",
      title: "Margarita Marvel",
      description : "Margarita Marvel - The Best Italian Pizza",
      price: "1870.00",
    },
    {
      id: 8,
      img: "src/assets/img/menu2.jpg",
      title: "Pesto Paradise",
      description : "Pesto Paradise - Taste the Paradise of pizza" ,
      price: "2300.00",
    },
    {
      id: 9,
      img: "src/assets/img/menu3.jpg",
      title: "Hawaiian Bliss",
      description : "Hawaiian Bliss - Pizza at its best" ,
      price: "2450.00",
    },
    {
      id: 10,
      img: "src/assets/img/menu4.jpg",
      title: "Truffle Treasures",
      description : "Truffle Treasures - Thin Crust Special" ,
      price: "3260.00",
    },
  ];
  return (
    <div className="min-h-screen container flex flex-col justify-center items-center ">
      <h1 className=" text-4xl font-semibold text-center mt-20 md:mt-10 mb-3">
        Other Menu
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-5 px-0 md:px-10">
        {menuData.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default OtherMenu;
