import React from 'react';
import {connect} from 'react-redux';
import NavBar from './../components/navbar';
import ProductCard from './../components/productCard';
import {fetchProducts} from './../actions/actionsProducts';

class BrowsePage extends React.Component {
  componentDidMount(){
    this.props.fetchAllProducts();
  }

  productCards(){
    var productCards;
    this.props.products ? productCards = this.props.products.map(product => {
      return <ProductCard productDetail={product} />
    }) : [];
  }

  render(){
    return (
      <div>
        <NavBar/>
        <div className="container-fluid">
          <div className="row">
            {this.productCards}
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchAllProducts: function() {
      dispatch(fetchProducts());
    }
  }
}

function mapStateToProps(state){
  return {products: state.productStore.products.productList};
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
