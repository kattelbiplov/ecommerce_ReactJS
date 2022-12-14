import React from "react";

const Carousel=()=>{
    return(
        <React.Fragment>
    <div id="homepageCarousel" class="carousel slide" data-ride="carousel" data-interval="4000">
        <div className="carousel-inner">
          <div className="carousel-item active">
              <img className="d-block w-100" src="http://nitsnepal.com.np/open/image/cache/catalog/HIKVISION-1140x380.jpg" alt="First slide"/>
            </div>
         <div className="carousel-item">
            <img className="d-block w-100" src="http://nitsnepal.com.np/open/image/cache/catalog/demo/compaq_presario-1140x380.jpg" alt="Second slide"/>
         </div>
         <div className="carousel-item">
            <img className="d-block w-100" src="http://nitsnepal.com.np/open/image/cache/catalog/PABX1-1140x380.jpg" alt="Third slide"/>
          </div>
        </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </React.Fragment>
    );
}


export default Carousel;