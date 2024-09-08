import React from "react";
import MenuCard from "../layouts/MenuCard";

const OtherMenu = () => {
  const menuData = [
    {
      id: 7,
      img: "src/assets/img/menu7.jpg",
      title: "Margarita Marvel",
      price: "1870.00",
    },
    {
      id: 8,
      img: "src/assets/img/menu8.jpg",
      title: "Pesto Paradise",
      price: "2300.00",
    },
    {
      id: 9,
      img: "src/assets/img/menu9.jpg",
      title: "Hawaiian Bliss",
      price: "2450.00",
    },
    {
      id: 10,
      img: "src/assets/img/menu10.jpg",
      title: "Truffle Treasures",
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
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default OtherMenu;
