import React from "react";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ List }) => {
  const dispatch = useDispatch();

  const handleClickAddItems = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {List.map((ele) => {
        const cardInfo = ele.card.info || {}; // Handle the case where info is undefined
        return (
          <div
            key={cardInfo.id}
            className="border-gray-400 border-b-2 p-2 m-2 text-left"
          >
            <div className="flex justify-between">
              <span className="font-bold ">{cardInfo.name}</span>
              <div>
                 <div className="absolute mb-6">
                  <button
                    className="bg-black text-white rounded-md"
                    onClick={() => handleClickAddItems(ele)}
                  >
                    Add+
                  </button>
                </div>
                <img
                  className="w-20 h-20 rounded-lg"
                  src={IMG_URL + cardInfo.imageId}
                  alt={cardInfo.name}
                ></img>
              </div>
            </div>
            <div className="my-2">
              <span>₹.{cardInfo.price ? cardInfo.price / 100 : cardInfo.defaultPrice / 100}</span>
            </div>
            <p className="text-xs">{cardInfo.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

