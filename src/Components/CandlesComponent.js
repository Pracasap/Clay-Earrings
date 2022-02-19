import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Candles(props) {

    const addCartToast = (candle) => {
        toast.success(`${candle.name} was added to cart!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const candles = props.candles.map(candle => {
        return (
            <div key={candle.id} className="col-md-6 col-lg-4 col-xl-3 p-3">
                <RenderCandles candle={candle} handleAddProduct={props.handleAddProduct} addCartToast={addCartToast} />
            </div>
        )
    })
    return (
        <div className="container-fluid products">
            <div className="container pb-5">
                <div className="row pt-5">
                    <div className="col-2 col-md-1 backIcon">
                        <Link to={ `/shop` }>
                            <ion-icon name="chevron-back-outline" />
                        </Link>
                    </div>
                    <div className="col">
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={true}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                        <h3>
                            Scented Candles
                        </h3>
                        
                    </div>
                </div>
                <div className="row contactBox" style={{ borderRadius: 2 }}>
                        {candles}
                </div>
            </div>
        </div>
    )
}

const RenderCandles = ({candle, handleAddProduct, addCartToast}) => {
    
    return (
        <Card className="shadow">
            <div>
                <img width="100%" src={candle.image} alt={candle.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{candle.name} </h4></CardTitle>
            <CardTitle><h5>${candle.price} </h5></CardTitle>
            <div className='add-to-cart' alt="Add To Cart" onClick={() => {handleAddProduct(candle); addCartToast(candle)}}>
                <ion-icon name="bag-add-sharp" size="large" />
            </div>
            </CardBody>
        </Card>
    )
}

export default Candles