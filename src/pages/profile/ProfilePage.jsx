import React from 'react'
import { User } from '../../models/user.class'
import {useNavigate} from "react-router-dom"

export default function ProfilePage({user}) {

    const navigate = useNavigate();

    const goBack = ()=>{
        navigate(-1);
    }

    const goTasks = ()=>{
        navigate("/tasks")
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={goTasks}>Tasks</button>
            <button onClick={goBack}>Go back </button>
        </div>
    )
}
