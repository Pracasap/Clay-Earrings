import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Salts(props) {

    const addCartToast = (salt) => {
        toast.success(`${salt.name} was added to cart!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const salts = props.salts.map(salt => {
        return (
            <div key={salt.id} className="col-md-6 col-lg-4 col-xl-3 p-3">
                <RenderSalts salt={salt} handleAddProduct={props.handleAddProduct} addCartToast={addCartToast} />
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
                            Bath Salts
                        </h3>
                        
                    </div>
                </div>
                <div className="row contactBox" style={{ borderRadius: 2 }}>
                        {salts}
                </div>
            </div>
        </div>
    )
}

const RenderSalts = ({salt, handleAddProduct, addCartToast}) => {
    
    return (
        <Card className="shadow">
            <div>
                <img width="100%" src={salt.image} alt={salt.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{salt.name} </h4></CardTitle>
            <CardTitle><h5>${salt.price} </h5></CardTitle>
            <div className='add-to-cart' alt="Add To Cart" onClick={() => {handleAddProduct(salt); addCartToast(salt)}}>
                <ion-icon name="bag-add-sharp" size="large" />
            </div>
            </CardBody>
        </Card>
    )
}

export default Salts