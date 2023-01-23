import React from 'react'
import { useNavigate } from "react-router-dom"


export default function NotFoundPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <button onClick={goBack}>Go back to home </button>
    </div>
  )
}
