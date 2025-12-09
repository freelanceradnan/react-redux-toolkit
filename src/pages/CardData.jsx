import React, { useState } from "react";
import { useDispatch } from "react-redux";


const CardData = ({ item }) => {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(item.quantity || 1);

  const crossHandler = () => {
    dispatch({ type: "cart/removeProduct", payload: item.id });
  
  };

  return (
    <tr className="card-data">
      <td>
        <img src={item.image} alt={item.title} className="cardData-img" />
      </td>

      <td>{item.title}</td>

      <td>${Number(item.price)}</td>

      <td>
        <button
          onClick={() => {
            const newQuantity = itemQuantity > 1 ? itemQuantity - 1 : 1;
            dispatch({
              type: "cart/modifyQuantity",
              payload: { id: item.id, quantity: newQuantity },
            });
            setItemQuantity(newQuantity);
          }}
        >
          -
        </button>

        <input
          type="number"
          value={itemQuantity}
          min={1}
          onChange={(e) => {
            const newQuantity = Number(e.target.value) || 1;
            setItemQuantity(newQuantity);
            dispatch({
              type: "cart/modifyQuantity",
              payload: { id: item.id, quantity: newQuantity },
            });
          }}
        />

        <button
          onClick={() => {
            const newQuantity = itemQuantity + 1;
            setItemQuantity(newQuantity);
            dispatch({
              type: "cart/modifyQuantity",
              payload: { id: item.id, quantity: newQuantity },
            });
          }}
        >
          +
        </button>
      </td>

      <td>${Number(item.price) * Number(itemQuantity)}</td>

      <td>
        <button onClick={crossHandler}>x</button>
      </td>
    </tr>
  );
};

export default CardData;
