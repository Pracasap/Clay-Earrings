import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Earrings(props) {

    const addCartToast = (earring) => {
        toast.success(`${earring.name} was added to cart!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const earrings = props.earrings.map(earring => {
        return (
            <div key={earring.id} className="col-md-6 col-lg-4 col-xl-3 p-3">
                <RenderEarrings earring={earring} handleAddProduct={props.handleAddProduct} addCartToast={addCartToast} />
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
                            Clay Earrings
                        </h3>
                        
                    </div>
                </div>
                <div className="row" style={{ borderRadius: 2 }}>
                        {earrings}
                </div>
            </div>
        </div>
    )
}

const RenderEarrings = ({earring, handleAddProduct, addCartToast}) => {
    
    return (
        <Card className="shadow card-img-div">
            <div>
                <img width="100%" src={earring.image} alt={earring.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{earring.name} </h4></CardTitle>
            <CardTitle><h5>${earring.price} </h5></CardTitle>
            <div className='add-to-cart' alt="Add To Cart" onClick={() => {handleAddProduct(earring); addCartToast(earring)}}>
                <ion-icon name="bag-add-sharp" size="large" />
            </div>
            </CardBody>
        </Card>
    )
}

export default Earrings