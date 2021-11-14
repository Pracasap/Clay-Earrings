import React from 'react'; 
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

function Products(props) {
    const ourProducts = props.ourProducts.map(product => {
        return (
            <div key={product.id} className="col-md-6 p-3">
                <RenderProducts product={product} />
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
                <div className="row row-content" style={{backgroundColor: 'white', borderRadius: 2 }}>
                        {ourProducts}
                </div>
            </div>
        </div>
    )
}

const RenderProducts = ({product}) => {
    return (
        <Card className="shadow">
            <div className="card-img-div">
                <img width="100%" src={product.image} alt={product.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{product.name}</h4></CardTitle>
            <CardText>{product.description}</CardText>
            </CardBody>
        </Card>
    )
}

export default Products;
