import { useSelector, useDispatch } from 'react-redux';
import CardData from './CardData';

export const Cart = () => {
   const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
let totalsum = 0;
cart.forEach(item => {
  const price = Number(item.price) 
  const quantity = Number(item.quantity)
  totalsum += price * quantity;
});



  return (
    <div className="card-section">
      <div className="card-container">
        <h2>all cart details</h2>
        <div className="card-contents">
          <table className='table-name'>
            <thead>
              <tr className="table-title">
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <CardData key={item.id} item={item} />
              ))}
            </tbody>
          </table>

          <div className="total-price">
            total price is ${totalsum}
          </div>

          <div className="clear-cart">
            <button onClick={() => dispatch({ type: "cart/clearCart" })}>
              clear cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
