import React from "react";
import PropTypes from 'prop-types';


export const ShopItemFunc = ({goodObj}) => {
    return (
      
      <React.Fragment>
      <div className="main-content">
        <h2>{goodObj.brand}</h2>
        <h1>{goodObj.title}</h1>
        <h3>goodObj.description</h3>
        <div className="description">{goodObj.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{goodObj.currency} {goodObj.price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
      </React.Fragment>
    )
}


ShopItemFunc.propTypes = {
  goodObj: PropTypes.shape({
      brand: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      descriptionFull: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.string,
  })
}