import React from 'react'; 
import earring from '../videos/1.mp4';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import background from '../images/1.png'

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col home">
                    <video id="background-video" autoPlay loop muted poster={background}>
                        <source src={earring} type="video/mp4" />
                    </video>
                    <h1>Forever Avenue</h1>
                    <h2>How majestic</h2>
                    <div className="d-flex justify-content-center">
                    <Link to={ `/shop` }>
                        <Button className="btn btn-full btn-lg mr-3">Shop Our Creations</Button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
