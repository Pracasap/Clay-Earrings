import React from 'react';
import Button from 'reactstrap/lib/Button';


const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {

    const subtotal = cartItems.reduce((price, item) => price + item.quantity * item.price, 
    0);
    const subtotalRounded = (Math.round(subtotal)).toFixed(2);
    const taxes = (Math.round((0.0825 * subtotal) * 100) /100).toFixed(2);
    const totalPrice = (Number(subtotalRounded) + Number(taxes)).toFixed(2);
    return (
        <div className="container-fluid products">
            <div className="container pb-5">
                <div className="row">
                    <div className="col mt-5">
                        <h3>Your Cart</h3>
                    </div>
                </div>
                <div className="row cart " style={{ borderRadius: 2 }}>
                    <div className='cart-content'>
                        {cartItems.length === 0 && (
                        <div className='cart-box d-flex justify-content-center'><h5>Your cart is empty!</h5></div>
                        )}

                        {cartItems.length >= 1 && (
                        <div className='clear-cart'>
                            <button className='clear-cart-button' onClick={handleCartClearance}>Clear Cart</button>
                        </div>
                        )}

                        {cartItems.map((item) => {
                        const itemTotal = item.price * item.quantity;
                        return (
                        <React.Fragment>
                            <div key={item.id} className='cart-box border p-2'>
                                <img src={item.image} alt="" className='cart-img' />
                                <div className='detail-box'>
                                    <div className='cart-product-title'>{item.name}</div>
                                    <div className='cart-price'>$ {item.price}</div>
                                    <div className='cart-items-function'>
                                        <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>{item.quantity}
                                        <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                                    </div>
                                </div>
                                <div className='item-total'>
                                    {item.quantity} * ${item.price} = ${itemTotal}
                                </div>
                            </div>
                        </React.Fragment>
                        )})}
                        {cartItems.length !== 0 && (
                            <React.Fragment>
                                <div className='subtotal'>
                                    <div className='subtotal-title'>Subtotal:</div>
                                    <div className='subtotal-price'>${Math.round(subtotalRounded).toFixed(2)}</div>
                                </div>
                                <div className='total'>
                                    <div className='subtotal-title'>Taxes:</div>
                                    <div className='subtotal-price'>${taxes}</div>
                                </div>
                                <div className='total'>
                                    <div className='total-title'>Total:</div>
                                    <div className='total-price'>${totalPrice}</div>
                                </div>
                                <Button className="btn btn-buy mb-4">Buy Now</Button>
                            </React.Fragment>)}
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Cart;


