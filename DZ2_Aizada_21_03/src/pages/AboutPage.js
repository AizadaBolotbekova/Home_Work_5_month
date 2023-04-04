import React from 'react';
import {useNavigate,useLocation} from "react-router-dom";

function AboutPage() {
    const navigate=useNavigate()
    const location = useLocation()

    console.log(location)
    return (
        <div>AboutPage
            {/*<button onClick={()=>navigate(-1)}>Back</button>*/}
        </div>


    );
}

export default AboutPage