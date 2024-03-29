import React, { Component } from "react";
import ProductRow from "./ProductRow";
import products from "../resources/products";

class BasketTable extends Component {
  render() {
    return (
      <table className="productTable">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow
              product={product}
              key={index}
              calcSubTotal={this.props.calcSubTotal}
              buildBasket={this.props.buildBasket}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default BasketTable;
