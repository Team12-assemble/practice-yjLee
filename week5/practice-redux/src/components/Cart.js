import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartStore);
  return (
    <div>
      <h2>쇼핑 카트</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <button onClick={() => dispatch(removeItem(item.id))}>제거</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch(addItem({ name: "상품1", price: "10000", id: Date.now() }))
        }
      >
        상품1 추가
      </button>
      <button
        onClick={() =>
          dispatch(addItem({ name: "상품2", price: "20000", id: Date.now() }))
        }
      >
        상품2 추가
      </button>
    </div>
  );
};

export default Cart;
