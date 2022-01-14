import React from "react";
import './signup.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import image from '../../image.jpg';

function Signup() {
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
                            <TextField id="Name" label="firstname" size='small' variant="outlined" />
                        </div>
                        <div className='lastname'>
                            <TextField id="Lastname" label="LastName" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='emailtext'>
                        <TextField id="emailtext" label="username" size='small' variant="outlined" />
                    </div>
                    <div className='textarea'>
                        You can use letters, numbers & periods
                    </div>
                    <div className='password-rectangle'>
                        <div className='password'>
                            <TextField id="password" label="password" size='small' variant="outlined" />
                        </div>
                        <div className='confirm'>
                            <TextField id="confirm" label="confirm" size='small' variant="outlined" />
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
                            <Button variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class">
                    <img src= {image}> 
                    </img>

                </div>
            </div>
        </div>
    )
}
export default Signup