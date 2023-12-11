import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ShimmerMenu from "./ShimmerMenu";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { Menu_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  // const [data, setData] = useState([]);
  const {resID}=useParams();
  const [showIndex,setShowIndex]=useState(null)
  const data=useRestaurantMenu(resID)
  
  if (!data || data.length === 0) {
    return <Shimmer />; 
  }
 

  const {
    name,
    cloudinaryImageId,
    costForTwoMessage, 
    cuisines
  } = data?.cards[0]?.card?.card?.info;
 
  // const itemCards = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  // const categories = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((res,index)=>{
  //   return res?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
  // });
//   const categories = data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((res, index) => {
//     const type = res?.card?.card?.["@type"]; 
//     return type === "type.googleapis.com/swiggy.presentation.food.v2.Dish";
// });
const categories = data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((res, index) => {
  const type = res?.card?.card?.["@type"];
  return type === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
});
// console.log(categories);




  

  // const categories = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.filter((c) => c?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Dish");
  
  // console.log(itemCards);
  // console.log(categories);
//   const itemCards = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
// const categories = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.[2].card.card.itemCards.filter((c, index) => {
//   const type = c?.card?.["@type"];
//   console.log(`Card ${index + 1}:`, type);
//   return type === "type.googleapis.com/swiggy.presentation.food.v2.Dish";
// });

// console.log("itemCards:", itemCards);
// console.log("categories:", categories);

  
  return (
    <div className="text-center">
      <div>
        <h1 className="font-bold text-[2rem] my-6">{name}</h1>
        {/* <img
          className="rounded-lg w-56 mb-9"
          src={MENU_URL + cloudinaryImageId}
          alt="Restaurant"
        /> */}
        <h2 className="font-bold text-[1.5rem]">{cuisines.join(", ")} - {costForTwoMessage}</h2>
        
{/* ======================================================================
==========================================================================
==========================================================================
==========================================================================
========================================================================== */}
        {/* Categories Accordions */}
        {categories.map((category,index)=>{
           return <RestaurantCategory key={index}  category={category.card.card}
          //  We Want Restaurant Menu to controll the accordian
          showItems={index===showIndex && true}
          setShowIndex={()=>setShowIndex(index)}
           />
          })} 
        {/* <h1 className="font-bold text-[2rem] mt-8">Menu</h1> */}
        {/* <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id} className="ml-6 mt-2 text-[1rem] font-bold"><h3></h3>
              {item.card.info.name}-{"Rs."}{item.card.info.price/100}</li>
          ))}
        </ul> */}  
      </div>
    </div>
  );
};

export default RestaurantMenu;
