import React from 'react'; 
import { Card } from 'react-bootstrap';

function Products() {
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
                    <div className="col mt-5 mb-3">
                        <h2>Clay Earrings</h2>
                    </div>
                </div>
                <div className="row row-content" style={{backgroundColor: '#f1f1f1', borderRadius: 2}}>
                        {earrings}
                </div>
            </div>
        </div>
    )
}

export default Products;
