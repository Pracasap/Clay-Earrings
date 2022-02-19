import React, {useLayoutEffect} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const subtotal = cartItems.reduce((price, item) => price + item.quantity * item.price, 
    0).toFixed(2);
    const taxes = (Math.round((0.0825 * subtotal) * 100) /100).toFixed(2);
    const totalPrice = (Number(subtotal) + Number(taxes)).toFixed(2);
    

    async function handleToken(token, addresses) {
        const response = await axios.post(
            "https://localhost:3000/checkout",
            {token, totalPrice}
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
            handleCartClearance();
        } else {
            toast("Something went wrong!", { type: "error"});
        }
    }
    
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
                        {cartItems.length !== 0 && (
                            <React.Fragment>
                                <div className='subtotal'>
                                    <div className='subtotal-title'>Subtotal:</div>
                                    <div className='subtotal-price'>${subtotal}</div>
                                </div>
                                <div className='total'>
                                    <div className='subtotal-title'>Taxes:</div>
                                    <div className='subtotal-price'>${taxes}</div>
                                </div>
                                <div className='total'>
                                    <div className='total-title'>Total:</div>
                                    <div className='total-price'>${totalPrice}</div>
                                </div>
                                {/* <StripeCheckout 
                                    className="btn-buy mb-4"
                                    stripeKey='pk_test_51KUJfbF0utbXpEsKNGQqNeNCcAnzoF4Y9xn6cIfwva7FLi6WLkhcuiNzzka7xbwWpyvEtDlD11eDc0z3U6luWaQh00aC3z8xnJ'
                                    token={handleToken}
                                    billingAddress
                                    shippingAddress
                                    amount={totalPrice * 100}
                                    name="ForeverAvenue.com"
                                /> */}
                                <form action="/checkout" method="POST">
                                    <button type="submit" className='btn-buy'>Checkout</button>
                                </form>
                                <ToastContainer />
                            </React.Fragment>)}
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Cart;


