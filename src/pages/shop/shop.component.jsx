import React, { Component } from "react";

import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    return (
      <div>
        SHOP PAGE
        <h1 />
      </div>
    );
  }
}

export default ShopPage;
