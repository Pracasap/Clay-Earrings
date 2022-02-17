import React from 'react';
import Button from 'reactstrap/lib/Button';


const Cart = ({cartItems, handleAddProduct, handleRemoveProduct}) => {

    const subtotal = cartItems.reduce((price, item) => price + item.quantity * item.price, 
    0);
    const subtotalRounded = (Math.round(subtotal * 100) /100).toFixed(2);
    const taxes = (Math.round((0.0825 * subtotal) * 100) /100).toFixed(2);
    const totalPrice = Number(subtotal) + Number(taxes);
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

                        {cartItems.map((item) => {
                        const itemTotal = item.price * item.quantity;
                        return (
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
                        )})}
                        {/* Total */}
                        <div className='subtotal'>
                            <div className='subtotal-title'>Subtotal:</div>
                            <div className='subtotal-price'>${subtotalRounded}</div>
                        </div>
                        <div className='total'>
                            <div className='subtotal-title'>Taxes:</div>
                            <div className='subtotal-price'>${taxes}</div>
                        </div>
                        <div className='total'>
                            <div className='total-title'>Total:</div>
                            <div className='total-price'>${totalPrice}</div>
                        </div>
                        {/* Buy Button */}
                        <Button className="btn btn-buy mb-4">Buy Now</Button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Cart;