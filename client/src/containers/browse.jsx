import React from 'react';
import {connect} from 'react-redux';
import NavBar from './../components/navbar';
import SearchBar from './../components/search';
import ProductCard from './../components/productCard';
import BrowseSideBar from './../components/BrowseSideBar';
import ProductList from './../components/productList';
import {filterByCategory} from './../actions/actionsProducts';
import {CategoryFilters} from './../actions/actionConstants';

class BrowsePage extends React.Component {
  render(){
    let products = this.props.products.categoryFilter !== CategoryFilters[0] ? this.props.products.filteredProductList : this.props.products.productList;
    return (
    <div>
      <NavBar/>
        <div className="container-fluid">
        <BrowseSideBar className="col-xs-2 col-sm-2 col-md-2" filter={this.props.filter}/>
          <SearchBar className="col-xs-offset-2 serach-bar col-md-10 col-md-offset-2 col-sm-10 col-sm-offset-2"/>
          <row>

            <div className="col-xs-offset-2 col-sm-offset-2 col-sm-10 col-md-10 col-md-offset-2">
              <ProductList products={products}/>
            </div>
          </row>
        </div>
    </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    filter: function(category){
      dispatch(filterByCategory(category));
    }
  }
}

function mapStateToProps(state){
  return {products: state.productStore.products};
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowsePage);
