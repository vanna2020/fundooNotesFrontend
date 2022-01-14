import React from "react";
import './signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default function Signin() {
    const takeEmail = (e) => {
        console.log(e.target.value);
    }
    const takePass = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className="Box">
            <div className="Box1">
                <div className='Title'>
                    <span className='one'>G</span>
                    <span className='two'>o</span>
                    <span className='three'>o</span>
                    <span className='four'>g</span>
                    <span className='five'>l</span>
                    <span className='Six'>e</span>
                </div>
                <div className='sign'>
                    <h2>Sign In</h2>
                </div>
                <div className='pqr'>
                    <h5>Use Your Account Here</h5>
                </div>
                <div className='email'>
                    <TextField id="Email" onChange={takeEmail} label="Email or Phone" size='small' variant="outlined" />
                </div>
                <div className="password">
                    <TextField id="password" onChange={takePass} label="Password" size='small' variant="outlined" />
                </div>
                <div className='textletter'>
                    Not your computer? Use Guest mode to sign in privately.</div>
                <div className='account'>
                    <h2 className='accountcolor'><a id="GFG" href='SignIn.css'>Create account</a></h2>
                    <div className='btm'>
                        <Button variant="contained" size='small'>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}