import React, {useState} from 'react';
import "./ShortenModal.css";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ShortenModal = () => {
    const [enteredURL, setEnteredURL] = useState('');
    const [shortenedURL, setShortenedURL] = useState('');
    
    const onChange = (e) => {
        setEnteredURL(e.target.value);   
    }
    const onShortenClick = () => {
        console.log("enteredURL", enteredURL);
        axios.post("http://localhost:8000/shorten", {longURL: enteredURL})
        .then(res => {
            console.log("resssss, ", res);
            const shortenedID = res?.data?.shortURL;
            setShortenedURL(`http://${shortenedID}.com`);
        })
    };

    return (
        <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Shorten your URL here</h1>
                    </div>
                    <div className="modal-body">
                        <input type="text" name="namername" placeholder="Enter the long URL here" defaultValue={enteredURL} onChange={(e) => onChange(e)}/>
                        <h4>Your short URL: <a href={enteredURL} onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>{shortenedURL}</a></h4>
                        <Button onClick={onShortenClick}>Shorten!</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShortenModal;

