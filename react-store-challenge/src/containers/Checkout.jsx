import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Checkout.styl';

const Checkout = (props) => {
  const { cart } = props;

  return (
    <div className="checkout">
      <div className="checkout-content">

        {cart.length
          ? <h3>Lista de Pedidos:</h3>
          : <h2>Sin Pedidos</h2>}

        {cart.map(item => (
          <div className="checkout-item">
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" onClick={() => {}}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}

      </div>
      {cart.length > 0 && (
        <div className="checkout-sidebar">
          <h3>Precio Total:</h3>
          <h4>$</h4>
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  const { cart } = state;

  return {
    cart,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout); 