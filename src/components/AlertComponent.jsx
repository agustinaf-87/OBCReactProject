import React from 'react'
import Alert from 'react-bootstrap/Alert';
import{ useState } from 'react';
import { Link } from 'react-router-dom';

export default function AlertComponent({ text, path }) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Link to={path} style={{textDecoration:"none"}}>
                <Alert variant="warning" onClose={() => setShow(false)} dismissible>
                    {text}
                </Alert>
            </Link>
        )
    }
    
}
