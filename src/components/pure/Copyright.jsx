import React from 'react'
import Link from "@mui/material/Link";
import Typography from '@mui/material/Typography';

export default function Copyright() {
    return (
        <Typography variant="body2" color="GrayText" align="center">
            {"Copyright (C) "}
            <Link color="inherit" href="https://imaginaformacion.com">
                Imagina Formacion
            </Link>
            {" "}
            {new Date().getFullYear()}
        </Typography>
    )
}
