import React from 'react';
import '../css/footer.css';
const Footer=()=>{
    return(
        <React.Fragment>
            <div className="footer-down">
                &copy; Copyright 2021 -- {new Date().getFullYear()} || All rights reserved
                </div>
            
        </React.Fragment>
    );
}

export default Footer;