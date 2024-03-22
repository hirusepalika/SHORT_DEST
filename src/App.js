import React, { useState } from "react";
import "./App.css";
import { hot } from "react-hot-loader";
import Button from 'react-bootstrap/Button';
import mainLogo from './assets/images/short_dest_main.png';
import ShortenModal from "./Modal";

const App = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        console.log("ami here??")
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
   
    return (
        <div class="container">
            <img src={mainLogo} alt="ShortDest logo" />
            <Button onClick={handleOpen}>Click here to shorten url!</Button>
            {open ? <ShortenModal handleClose={handleClose} /> : null}
        </div>
    );
}

export default hot(module)(App);