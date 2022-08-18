import React from 'react';
import {FaCartPlus, FaCaretDown} from 'react-icons/fa';

const FeatureCard=({data})=>{
    
    return(
        <React.Fragment>
            <div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" src={data.imagePath} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.description}</p>
    <small>{data.price}</small>
    <a href="#" className="btn btn-primary">
        <FaCartPlus style={{marginRight:"12px"}}/>Add to Cart</a>
  </div>
</div>
        </React.Fragment>
    );
}

export default FeatureCard;