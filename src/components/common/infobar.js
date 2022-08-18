import React from 'react';
import {FaPhone, FaHeart, FaCartArrowDown} from 'react-icons/fa';
import '../css/infobar.css';
const InfoBar=()=>{
    return(
        <React.Fragment>
            <div className="top-nav">
            <FaPhone style={{marginLeft:"12px",marginRight:"12px"}} />
            Tel: 01-5172007, Mo: 9841905799
            <FaHeart style={{marginLeft:"12px",marginRight:"12px"}}/> WishList
            <FaCartArrowDown style={{marginLeft:"12px",marginRight:"12px"}}/> Cart
            </div>
        </React.Fragment>
    );
}

export default InfoBar;