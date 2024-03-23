import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RES_IMG_URL } from "../utils/constants";
import { clearCart, increaseItem, decreaseItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handelClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);

  const handelItemIncrease = (itemId) => {
    dispatch(increaseItem(itemId));
  };
  const handelItemDecrease = (itemId) => {
    dispatch(decreaseItem(itemId));
  };
  const totalAmountPaid = cartItems.reduce(
    (acc, item) =>
      acc +
      item.qty *
        (item.item.card.info.price / 100 ||
          item.item.card.info.defaultPrice / 100),
    0
  );
  const discountedAmount = (totalAmountPaid * 10) / 100;
  const deliveryCharge = (totalAmountPaid * 5) / 100;

  return (
    <div className="m-4 p-4 flex justify-between ">
      <div className="w-6/12 m-auto  p-4">
        <h1 className="text-xl font-bold">Cart</h1>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handelClearCart}
        >
          Clear cart
        </button>

        <div className="">
          {cartItems.map((item) => {
            return (
              <div
                key={item?.tem?.card?.info?.id}
                className="m-2 p-2 border-black-200 border-b-2 text-left flex justify-between "
              >
                <div>
                  <div className="py-3 font-bold">
                    <span>{item?.item?.card?.info?.name}</span>
                    <span>
                      {" "}
                      - ₹.
                      {item?.item?.card?.info?.price / 100 ||
                        item?.item?.card?.info?.defaultPrice / 100}
                    </span>
                  </div>
                  <p className="text-xs">
                    {item?.item?.card?.info?.description}
                  </p>
                </div>

                <div className="flex flex-col ">
                  <img
                    src={RES_IMG_URL + item?.item?.card?.info?.imageId}
                    alt=""
                    className="w-36"
                  />

                  <div className="flex items-center">
                    <button
                      className="bg-green-400 p-3 my-2 rounded-lg  font-bold  "
                      onClick={() =>
                        handelItemDecrease(item?.item?.card?.info?.id)
                      }
                    >
                      -
                    </button>
                    <h1 className="p-4">{item.qty}</h1>
                    <button
                      className="bg-green-400 p-3 my-2 rounded-lg font-bold  "
                      onClick={() => handelItemIncrease(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* order summary */}
              </div>
            );
          })}
        </div>
      </div>
      {cartItems.length!==0?
      <div className="text-center border border-black w-[50%]">
       
        <h1 className="text-2xl">Order summary</h1>
        <div className="p-3 m-3 flex justify-between text-xl">
          <div>
            <h2>Items({cartItems.length})</h2>
            <h2>Discount(10%)</h2>
            <h2>Delivery charge(5%)</h2>
          </div>
          <div>
            <h2>{totalAmountPaid.toFixed(2)}</h2>
            <h2>-{discountedAmount.toFixed(2)}</h2>
            <h2>+{deliveryCharge.toFixed(2)}</h2>
          </div>
        </div>
        <hr />
        <h1>You have saved Rs.{deliveryCharge.toFixed(2)}</h1>
        <hr />

        <h1>
          Total : Rs.
          {(totalAmountPaid - discountedAmount + deliveryCharge).toFixed(2)}
        </h1>

        <button
          className="p-3 m-4 bg-blue-500 text-white rounded hover:bg-zinc-950"
          onClick={() => {
            window.location.href="/";
            alert("Order placed");
          }}
        >
          Place Order
        </button>
      </div> 
      :<></>}
    </div>
  );
};

export default Cart;
