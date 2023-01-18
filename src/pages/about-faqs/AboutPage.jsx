import React from 'react'
import {useLocation, useNavigate} from "react-router-dom"



export default function AboutPage() {

    const location = useLocation();
    const navigate = useNavigate();

    console.log("we are in route:", location.pathname)

    const handleClick = () =>{
        navigate("/")
    }

    const goBack = ()=>{
        navigate(-1);
    }

    const goForward = ()=>{
        navigate(1);
    }

    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={handleClick}>
                    Go to Home
                </button>
                <button onClick={goBack}>
                    Go back
                </button>
                <button onClick={goForward}>
                    Go forward
                </button>
            </div>
        </div>
    )
}
