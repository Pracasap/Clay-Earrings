import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Oils(props) {
    const oils = props.oils.map(oil => {
        return (
            <div key={oil.id} className="col-md-4 p-3">
                <RenderOils oil={oil} />
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
                        <h3>
                            Essential Oils
                        </h3>
                    </div>
                </div>
                <div className="row" style={{ borderRadius: 2 }}>
                        {oils}
                </div>
            </div>
        </div>
    )
}

const RenderOils = ({oil}) => {
    return (
        <Card className="shadow">
            <div className="card-img-div">
                <img width="100%" src={oil.image} alt={oil.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{oil.name} - {oil.price}</h4></CardTitle>
            <CardText>{oil.description}</CardText>
            <hr></hr>
            <div className="d-flex justify-content-center">
                <Link to={ `/shop` }>
                    <Button className="btn btn-full btn-lg">Add To Cart</Button>
                </Link>
            </div>
            </CardBody>
        </Card>
    )
}

export default Oils;