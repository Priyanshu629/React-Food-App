import React, { useState } from "react";
import { RES_IMG_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
 

  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handelAddItem = (item) => {
    let Item = cartItems.findIndex((i) => i.id === item.card.info.id);
   
    if (Item !== -1) {
      alert("This item is already added to the cart");
    } else {
      dispatch(addItem({id : item.card.info.id, item : item , qty : 1 }));
      alert("Item added to cart")
    }
  };
  return (
    <div>
      
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="m-2 p-2 border-black-200 border-b-2 text-left flex justify-between"
          >
            <div>
              <div className="py-3 font-bold">
               
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹.
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>

            <div className="flex flex-col ">
              <img
                src={RES_IMG_URL + item.card.info.imageId}
                alt=""
                className="w-36"
              />
              <button
                className="bg-green-400 p-3 my-2 rounded-lg font-bold w-36 "
                onClick={() => handelAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
