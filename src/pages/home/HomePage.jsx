import React from 'react'
import { useNavigate, useLocation } from "react-router-dom"

export default function HomePage() {

  const location = useLocation();
  const navigate = useNavigate();

  

  console.log("we are in route:", location.pathname)

  const handleClick = () => {
    navigate("/profile")
  }

  
      return (
        <div>
          <h1>Home Page</h1>
          <button onClick={handleClick}>
            Go to Profile
          </button>
        </div>
      )
}


