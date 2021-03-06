import React from 'react';
import {connect} from 'react-redux';
import { Thumbnail } from 'react-bootstrap';
import numeral from 'numeral';
import ProductImage from './productImage';
import Navbar from './navbar';
import Timer from './timer';
import {postBuy} from './../actions/actionsProducts';

class ProductDetail extends React.Component {
  constructor (props) {
    super(props);
    this.productIndex = null;
  }
  findIndex() {
    for(var i = 0; i < this.props.products.length; i++){
      if(this.props.products[i]._id === this.props.item){
        this.productIndex = i;
      }
    }
  }
  handleBuy() {
    var purchaseDetails = {
      _id: this.props.products[this.productIndex]._id,
      quantity: Number(this.refs.purchaseQuantity.value) || 1,
      price: this.props.products[this.productIndex].price
    };
    this.props.buyProduct(purchaseDetails, this.props.user.token);
  }
  componentWillMount() {
    this.findIndex();
  }
  render() {
    let userAuthMsg = this.props.user.token === '' ? <p className="alert alert-danger">Please signup or signin</p> : <p></p>;

  let userPurchaseBuy = this.props.userPurchaseBuy === true ? <p className="alert alert-success ">Thank you for the purchase! A purchase confirmation will be emailed shortly.</p>: <p></p>;

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
          <div className="detailList">
          <div className="panel panel-default">
          <div className="panel-body">
            <div className="productCardDetail" id={this.props.products[this.productIndex]._id}>
            <div className="container1 center-block">
              <img src={this.props.products[this.productIndex].image} alt="Default Image" />
            </div>
            <div className="productName">
              <p>Product: {this.props.products[this.productIndex].productName}</p>
            </div>

            <div>
              <p>Description: {this.props.products[this.productIndex].description}</p>
            </div>

            <div className="productTime">
              <Timer nextUpdateTime={this.props.products[this.productIndex].timeRemaining}/>
            </div>

            <div className="productQuantity">
              <p className="productinfo">Quantity: {this.props.products[this.productIndex].quantity}</p>
            </div>

            <div className="productPrice">
              <p className="productinfo">Price: {numeral(this.props.products[this.productIndex].price).format('$0,0[.]00')}</p>
            </div>

            <div>
              <input className="productDetailQuantity" type="number" min="1" max={this.props.products[this.productIndex].quantity} ref="purchaseQuantity" placeholder={this.props.products[this.productIndex].quantity === 1 ? "1" : "Select Quantity"}/>
            </div>

            <div>
              <button className="btn btn-lg btn-primary" type="button" disabled={this.props.user.token === ''} onClick={this.handleBuy.bind(this)}>Confirm</button>
            </div>
                {userAuthMsg}
                {userPurchaseBuy}
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    buyProduct: function(item, userToken) {
      dispatch(postBuy(item, userToken));
    }
  };
}

function mapStateToProps(state){
  return {
   products: state.productStore.products.productList,
   userPurchaseBuy: state.userStore.userPurchases.postedBuy,
   user: state.userStore.userAuth
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
