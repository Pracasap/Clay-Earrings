import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Earrings(props) {
    const earrings = props.earrings.map(earring => {
        return (
            <div key={earring.id} className="col-md-6 col-lg-4 p-3">
                <RenderEarrings earring={earring} />
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

const RenderEarrings = ({earring}) => {
    return (
        <Card className="shadow card-img-div">
            <div>
                <img width="100%" src={earring.image} alt={earring.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{earring.name} - {earring.price}</h4></CardTitle>
            <CardText>{earring.description}</CardText>
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

export default Earrings