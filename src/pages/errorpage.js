import React from 'react';
import unfound from '../components/images/unfound.png';
const ErrorPage=()=>{
    return(
    <React.Fragment>
        <div className="p-4 text-center">
        <img src={unfound} alt="404" style={{height:"400px",width:"400px",objectFit:"contain"}} />
        <legend className="text-center">Oops, The page is not found</legend>
        </div>
    </React.Fragment>
        );
}

export default ErrorPage;