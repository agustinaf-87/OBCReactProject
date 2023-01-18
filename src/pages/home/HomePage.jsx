import React from 'react'
import { useNavigate, useLocation } from "react-router-dom"

export default function HomePage() {

  const location = useLocation();
  const navigate = useNavigate();

  console.log("we are in route:", location.pathname)

  const handleClick = () => {
    navigate("/")
  }

  const goBack = () => {
    navigate(-1);
  }

  const goForward = () => {
    navigate(1);
  }
      return (
        <div>
          <h1>Home Page</h1>
          <button onClick={handleClick}>
            Go to Profile
          </button>
          <button onClick={goBack}>
            Go back
          </button>
          <button onClick={goForward}>
            Go forward
          </button>
        </div>
      )
}


