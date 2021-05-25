import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/components/Header.styl';

const Header = ({cart}) => (
  <div className="header">
    <Link to="/"><h1>Demo Store</h1></Link>
    <div className="header-checkout">
      <Link to="/checkout"><i className="fas fa-shopping-basket" /></Link>
      {cart.length &&
        <div className="header-alert">{cart.length}</div>
      }
    </div>
  </div>
);

const mapStateToProps = state => {
  const { cart } = state;

  return {
    cart,
  };
};

export default connect(mapStateToProps, null)(Header);