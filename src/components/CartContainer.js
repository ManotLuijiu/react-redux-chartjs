import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { CLEAR_CART, GET_TOTALS } from '../actions';
import NumberWithCommas from './NumberWithCommas';

const CartContainer = ({ cart = [], total, dispatch }) => {
  console.log('CartContainer', total);
  console.log('CartContainer', typeof total);
  // function numberWithCommas(x) {
  //   return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  // }

  React.useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [cart, dispatch]);
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>ตะกร้าสินค้า</h2>
          <h4 className="empty-cart">ไม่มีสินค้าในตะกร้า</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>ตะกร้าสินค้า</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            รวมทั้งหมด{' '}
            <span>
              <NumberWithCommas x={JSON.stringify(total)} /> บาท
            </span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch({ type: CLEAR_CART })}
        >
          ล้างตะกร้า
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(store) {
  const { cart, total } = store;
  return { cart, total };
}
export default connect(mapStateToProps)(CartContainer);
