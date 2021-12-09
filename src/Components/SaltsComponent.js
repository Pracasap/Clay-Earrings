import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Salts(props) {
    const salts = props.salts.map(salt => {
        return (
            <div key={salt.id} className="col-md-6 col-lg-4 p-3">
                <Rendersalts salt={salt} />
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
                            Bath Salts
                        </h3>
                    </div>
                </div>
                <div className="row" style={{ borderRadius: 2 }}>
                        {salts}
                </div>
            </div>
        </div>
    )
}

const Rendersalts = ({salt}) => {
    return (
        <Card className="shadow">
            <div className="card-img-div">
                <img width="100%" src={salt.image} alt={salt.name} />
            </div>
            <CardBody>
            <CardTitle><h4>{salt.name} - {salt.price}</h4></CardTitle>
            <CardText>{salt.description}</CardText>
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

export default Salts;