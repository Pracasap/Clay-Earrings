import React, { useLayoutEffect } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function Products(props) {
    
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const ourProducts = props.ourProducts.map(product => {
        return (
            <div key={product.id} className="col-md-6 col-lg-3 p-3">
                <Link to={ `/shop/${product.id}` }>
                    <RenderProducts product={product} />
                </Link>
            </div>
        )
    })
    return (
        <div className="container-fluid products">
            <div className="container pb-5">
                <div className="row">
                    <div className="col mt-5">
                        <h3>Our Products</h3>
                    </div>
                </div>
                <div className="row" style={{ borderRadius: 2 }}>
                    {ourProducts}
                </div>
            </div>
        </div>
    )
}

const RenderProducts = ({product}) => {
    return (
        <Card className="shadow">
            <div>
                <img width="100%" src={product.image} alt={product.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{product.name}</h4></CardTitle>
            <CardText>{product.description}</CardText>
            <hr />
            <div className='d-flex justify-content-center'>
                <button className='btn btn-full btn-lg'>Shop</button>
            </div>
            </CardBody>
        </Card>
    )
}

export default Products;
