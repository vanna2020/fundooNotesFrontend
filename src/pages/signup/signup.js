import React from "react";
import './signup.css';
import {Register} from '../../../src/services/userservice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import image from '../../image.jpg';
const emailPattern = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const firstNamePattern = /^[A-Z]{1}[a-z]{2,}/;
const lastNamePattern = /^[A-Z]{1}[a-z]{2,}/;

function Signup() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [regexObj, setRegexObj] = React.useState({ firstNameBorder: false, lastNameBorder: false, emailBorder: false, passBorder: false })
    const [regexHelperInfo, setRegexHelper] = React.useState({ firstNameHelperInfo: "", lastNameHelperInfo: "", emailHelperInfo: "", passHelperInfo: "" })

    const getEmail = (event) => {
        setEmail(event.target.value)
    }
    const getFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const getLastName = (event) => {
        setLastName(event.target.value)
    }
    const getPass = (event) => {
        setPass(event.target.value)
    }
    const onSubmit = () => {
        if (email === "" && pass === "" && firstName === "" && lastName === "") {
            setRegexObj({ ...regexObj, firstNameBorder: true, lastNameBorder: true, emailBorder: true, passBorder: true })
            setRegexHelper({ ...regexHelperInfo, firstNameHelperInfo: "enter valid name", lastNameHelperInfo: "enter valid last name", emailHelperInfo: "enter valid email", passHelperInfo: "enter valid password" })
        }
        else {
            const firstNameValidation = firstNamePattern.test(firstName)
            const lastNameValidation = lastNamePattern.test(lastName)
            const emailValidation = emailPattern.test(email)
            const passValidation = passPattern.test(pass)
            if (firstNameValidation) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    firstNameBorder: false
                }))
                console.log("11",regexObj)
                setRegexHelper(regexHelperInfo => ({
                    ...regexHelperInfo,
                    firstNameHelperInfo: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    firstNameBorder: true
                }))
                console.log("22",regexObj)
                setRegexHelper(regexHelperInfo => ({
                    ...regexHelperInfo,
                    firstNameHelperInfo: "enter a valid first name"
                }))
            }
            if (emailValidation) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder: false
                }))
                console.log("33",regexObj)
                setRegexHelper(regexHelperInfo => ({
                    ...regexHelperInfo,
                    emailHelperInfo: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    emailBorder: true
                }))
                console.log("44",regexObj)
                setRegexHelper(regexHelperInfo => ({
                    ...regexHelperInfo,
                    emailHelperInfo: "enter a valid email"
                }))
            }
            if (lastNameValidation) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    lastNameBorder: false
                }))
                console.log("55",regexObj)
                setRegexHelper(regexHelperInfo => ({
                    ...regexHelperInfo,
                    lastNameHelperInfo: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    lastNameBorder: true
                }))
                console.log("66",regexObj)
                setRegexHelper(regexHelperInfo => ({
                    ...regexHelperInfo,
                    lastNameHelperInfo: "enter a valid last name"
                }))
            }
            if (passValidation) {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passBorder: false
                }))
                console.log("77",regexObj)
                setRegexHelper(regexHelperInfo => ({
                    ...regexHelperInfo,
                    passHelperInfo: ""
                }))
            }
            else {
                setRegexObj(regexObj => ({
                    ...regexObj,
                    passBorder: true
                }))
                console.log("88",regexObj)
                setRegexHelper(regexHelperInfo => ({
                    ...regexHelperInfo,
                    passHelperInfo: "enter a valid password"
                }))
            }
            if(emailValidation===true && passValidation===true && firstNameValidation===true && lastNameValidation===true){
                let obj={
                    "firstName":firstName,
                    "lastName" :lastName,
                    "email":email,
                    "password":pass
                }
                Register(obj).then((res)=>{
                    console.log(res);
                })
                .catch((err)=>{
                    console.log(err);
                })
                console.log(obj);
            }
        }

    }

    return (
        <div className="Box">
            <div className="Box1">
                <div className="Box2">
                    <div className='google'>
                        <span className='one'>G</span>
                        <span className='two'>o</span>
                        <span className='three'>o</span>
                        <span className='four'>g</span>
                        <span className='five'>l</span>
                        <span className='Six'>e</span>
                    </div>
                    <div className='heading'>
                        <h3>Create Your Google account</h3>
                    </div>
                    <div className='name'>
                        <div className='firstname'>
                            <TextField id="Name" onChange={getFirstName} error={regexObj.firstNameBorder} label="firstname" size='small' variant="outlined" />
                        </div>
                        <div className='lastname'>
                            <TextField id="Lastname" onChange={getLastName} error={regexObj.lastNameBorder} label="LastName" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='emailtext'>
                        <TextField id="emailtext" onChange={getEmail} error={regexObj.emailBorder} label="username" size='small' variant="outlined" />
                    </div>
                    <div className='textarea'>
                        You can use letters, numbers & periods
                    </div>
                    <div className='password-rectangle'>
                        <div className='password'>
                            <TextField id="password" onChange={getPass} error={regexObj.passBorder} label="password" size='small' variant="outlined" />
                        </div>
                        <div className='confirm'>
                            <TextField id="confirm" error={regexObj.passBorder} label="confirm" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='meta-text'>
                        Use 8 or more characters with a mix of letters,numbers &
                        symbols
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" id="Show password" name="Show password" value="box"></input>
                        <label for="Show password">  Show password</label>
                    </div>
                    <div className='button'>
                        <div className='link'>
                            <h4><a href='sign'>SignIn Instead</a></h4>
                        </div>
                        <div className="button-end">
                            <Button onClick={onSubmit} variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class">
                    <img src={image}>
                    </img>

                </div>
            </div>
        </div>
    )
}
export default Signup