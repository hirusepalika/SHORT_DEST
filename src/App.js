import React, { useState } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import Button from 'react-bootstrap/Button';
import mainLogo from './assets/images/short_dest_main.png';
import ShortenModal from "./Modal";

const App = () => {
    // state management
    const [open, setOpen] = useState(false);

    // handle modal open
    const handleOpen = () => {
        setOpen(true);
    }

    // handle modal close
    const handleClose = () => {
        setOpen(false);
    }
   
    // load container with main button and modal
    return (
        <div class="container">
            <img src={mainLogo} alt="ShortDest logo" />
            <Button onClick={handleOpen}>Click here to shorten url!</Button>
            {open ? <ShortenModal handleClose={handleClose} /> : null}
        </div>
    );
}

export default hot(module)(App);