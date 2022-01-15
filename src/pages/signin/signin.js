import React from "react";
import './signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const emailPattern = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default function Signin() {
    const [email, setEmail] = React.useState("");
    const [pass, setPassword] = React.useState("");
    const [regexObj, setRegexObj] = React.useState({ emailBorder: false, emailHelperText: "", passwordBorder: false, passwordHelperText: "" })

    const getEmail = (event) => {
        setEmail(event.target.value);
    }
    const getPass = (event) => {
        setPassword(event.target.value);
    }
    const onSubmit = () => {
        if (email === "" && pass === "") {
            setRegexObj({ ...regexObj, emailBorder: true, emailHelperText: "enter the email", passwordBorder: true, passwordHelperText: "enter the valid password" })
        }
        else {
            const emailTesting = emailPattern.test(email)
            const passTesting = passPattern.test(pass)
            if (emailTesting) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder: false,
                    emailHelperText: ""
                }))
                console.log(regexObj)
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder:true,
                    emailHelperText:"enter a valid email"
                }))
                console.log(regexObj)
            }
            if (passTesting) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passwordBorder:false,
                    passwordHelperText:""
                }))
                console.log(regexObj)
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passwordBorder:true,
                    passwordHelperText:"enter valid password"
                }))
                console.log(regexObj)
            }
        }
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
                    <TextField id="Email" helperText={regexObj.emailHelperText} onChange={getEmail} error={regexObj.emailBorder} label="Email or Phone" size='small' variant="outlined" />
                </div>
                <div className="password">
                    <TextField id="password" helperText={regexObj.passwordHelperText} onChange={getPass} error={regexObj.passwordBorder} label="Password" size='small' variant="outlined" />
                </div>
                <div className='textletter'>
                    Not your computer? Use Guest mode to sign in privately.</div>
                <div className='account'>
                    <h2 className='accountcolor'><a id="GFG" href='SignIn.css'>Create account</a></h2>
                    <div className='btm'>
                        <Button onClick={onSubmit} variant="contained" size='small'>Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}