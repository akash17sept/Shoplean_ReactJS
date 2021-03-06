import React from 'react';

const Carousel = () => {
    return ( 
        <div className="container" style={{width:"100%"}}>
            <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{marginTop:"85px"}}>

                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>


                <div className="carousel-inner" style={{ width: "100%" }}>
                    <div className="item active">
                        <img src="https://shoplane.netlify.app/img/img1.png" alt="Los Angeles" width="100%" />
                    </div>

                    <div className="item">
                        <img src="https://shoplane.netlify.app/img/img2.png" alt="Chicago" width="100%" />
                    </div>

                    <div className="item">
                        <img src="https://shoplane.netlify.app/img/img3.png" alt="New york" width="100%" />
                    </div>

                    <div className="item">
                        <img src="https://shoplane.netlify.app/img/img4.png" alt="New york" width="100%" />
                    </div>
                </div>


                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}
 
export default Carousel;