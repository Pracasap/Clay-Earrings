import React from 'react'; 
import earring from '../videos/1.mp4';
import { Button } from 'reactstrap';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
                        <source src={earring} type="video/mp4" />
                    </video>
                    <h1>Forever Creating</h1>
                    <h2>How majestic</h2>
                    <div className="d-flex justify-content-center">
                    {/* <Link to={ `/projects` }> */}
                    <Button className="btn btn-full btn-lg mr-3">Shop My Creations</Button>
                    {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
