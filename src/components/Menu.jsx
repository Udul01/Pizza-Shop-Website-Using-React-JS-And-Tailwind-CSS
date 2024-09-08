import React from "react";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const menuData = [
    {
      id: 1,
      img: "src/assets/img/menu1.jpg",
      title: "Margarita Marvel",
      price: "1870.00",
    },
    {
      id: 2,
      img: "src/assets/img/menu2.jpg",
      title: "Pesto Paradise",
      price: "2300.00",
    },
    {
      id: 3,
      img: "src/assets/img/menu3.jpg",
      title: "Hawaiian Bliss",
      price: "2450.00",
    },
    {
      id: 4,
      img: "src/assets/img/menu4.jpg",
      title: "Truffle Treasures",
      price: "3260.00",
    },
    {
      id: 5,
      img: "src/assets/img/menu5.jpg",
      title: "Farmhouse Harvest",
      price: "2850.00",
    },
    {
      id: 6,
      img: "src/assets/img/menu6.jpg",
      title: "Cheese Frenzy",
      price: "1150.00",
    },
  ];
  return (
    <div className="min-h-screen container flex flex-col justify-center items-center ">
      <h1 className=" text-4xl font-semibold text-center pt-24">
        OUR SPECIALITY 
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 px-0 md:px-10">
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

export default Menu;
