import React from 'react'
import { List, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import {Home, Settings } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const getIcon =(icon) => {
        switch (icon){
            case "HOME":
                return (<Home/>)
            case "TASKS":
                    return (<Home/>)
            case "SETTINGS":
                return (<Settings/>)
            default:
                return (<Home/>)
        }
    }


    const MenuListItems =({list}) =>{
        
        const navigate = useNavigate();

        const handleClick =(path)=>{
            navigate(path)
        }

        return(
            <List>
                {list.map(({text, path, icon}, index)=>
                    (<ListItemButton key={index} onClick={handleClick(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text}></ListItemText>
                    </ListItemButton>)
                )}
            </List>
        )
    }

    export default MenuListItems;

