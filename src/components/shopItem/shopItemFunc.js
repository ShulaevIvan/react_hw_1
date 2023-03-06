import React from 'react'
import PropTypes from 'prop-types';

function ShopItemFunc({ good }) {

    return (
        <div className='card-content'>
            <h2>{ good.brand }</h2>
            <h1>{ good.title }</h1>
            <h3>{ good.description }</h3>
        <div className='description'>
           { good.descriptionFull }
        </div>
        <div className='highlight-window mobile'><div className='highlight-overlay'></div></div>
        <div className='divider'></div>
        <div className='purchase-info'>
            <div className='price'>{ good.currency }{ good.price }</div>
            <div className='purchase-btn-wrap'><a href='#' className='purchase-btn'>Добавить в корзину</a></div>
            
         </div>
        </div>
    );
}

// function ShopItemFunc({ good }) {

//     return (
//         <div className='main-content'>
//             <h2>{ good.brand }</h2>
//             <h1>{ good.title }</h1>
//             <h3>{ good.description }</h3>
//         <div className='description'>
//            { good.descriptionFull }
//         </div>
//         <div className='highlight-window mobile'><div className='highlight-overlay'></div></div>
//         <div className='divider'></div>
//         <div className='purchase-info'>
//             <div className='price'>{ good.currency }{ good.price }</div>
//             <button>Добавить в корзину</button>
//          </div>
//         </div>
//     );
// }

ShopItemFunc.propTypes = {
    good: PropTypes.shape({
        brand: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        descriptionFull: PropTypes.string,
        price: PropTypes.number,
        currency: PropTypes.string,
    })
}




export default ShopItemFunc
