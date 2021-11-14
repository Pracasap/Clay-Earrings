import React from 'react'; 
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

function Products(props) {
    const earrings = props.earrings.map(earring => {
        return (
            <div key={earring.id} className="col-md-6 p-3">
                <RenderEarrings earring={earring} />
            </div>
        )
    })
    return (
        <div className="container-fluid products">
            <div className="container mb-5">
                <div className="row">
                    <div className="col mt-5">
                        <h3>Clay Earrings</h3>
                    </div>
                </div>
                <div className="row row-content" style={{backgroundColor: '#f1f1f1', borderRadius: 2}}>
                        {earrings}
                </div>
            </div>
        </div>
    )
}

const RenderEarrings = ({earring}) => {
    return (
        <Card className="shadow">
            <div className="card-img-div">
                <img width="100%" src={earring.image} alt={earring.name} />
            </div>
            <CardBody>
            <CardTitle>{earring.name}</CardTitle>
            <CardText>{earring.description}</CardText>
            <hr />
            {/* <div className="card-icon">
                <RenderIcons project={project} />
            </div> */}
            </CardBody>
        </Card>
    )
}

export default Products;
