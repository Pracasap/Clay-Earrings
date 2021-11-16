import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Earrings(props) {
    const earrings = props.earrings.map(earring => {
        return (
            <div key={earring.id} className="col-md-4 p-3">
                <RenderEarrings earring={earring} />
            </div>
        )
    })
    return (
        <div className="container-fluid products">
            <div className="container pb-5">
                <div className="row">
                    <div className="col mt-5">
                        <h3>Clay Earrings</h3>
                    </div>
                </div>
                <div className="row row-content contactBox" style={{ borderRadius: 2 }}>
                        {earrings}
                </div>
            </div>
        </div>
    )
}

const RenderEarrings = ({earring}) => {
    return (
        <Card className="shadow d-flex align-items-center">
            <div className="card-img-div">
                <img width="100%" src={earring.image} alt={earring.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{earring.name} - {earring.price}</h4></CardTitle>
            <CardText>{earring.description}</CardText>
            <hr></hr>
            <Link to={ `/shop/` }>
                <Button className="btn btn-full btn-lg">Add To Cart</Button>
            </Link>
            </CardBody>
        </Card>
    )
}

export default Earrings