import React from 'react';
import Button from 'reactstrap/lib/Button';


const Cart = ({cartItems}) => {
    return (
        <div className="container-fluid products">
            <div className="container pb-5">
                <div className="row">
                    <div className="col mt-5">
                        <h3>Your Cart</h3>
                    </div>
                </div>
                <div className="row cart border" style={{ borderRadius: 2 }}>
                    <div className='cart-content'>
                        {cartItems.length === 0 && (
                        <div className='cart-box'> Your cart is empty! </div>
                        )}
                        {cartItems.map((item) => (
                            <div key={item.id} className='cart-box'>
                            <img src=" " alt="" className='cart-img' />
                            <div className='detail-box'>
                                <div className='cart-product-title'>Black Floral Moon</div>
                                <div className='cart-price'>$25</div>
                                {/* <input type="number" value="1" className='cart-quantity' /> */}
                            </div>
                        </div>
                        ))}
                    </div>
                    {/* Total */}
                    <div className='total'>
                        <div className='total-title'>Total</div>
                        <div className='total-price'>$0</div>
                    </div>
                    {/* Buy Button */}
                    <Button className="btn btn-buy">Buy Now</Button>
                    {/* Cart Close */}
                    <div className='close-cart'>
                        <ion-icon name="close-sharp" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;