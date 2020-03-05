import React, {useState, useEffect, useContext} from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';
/*Add css to this file later*/


export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const {loading, error, request, clearError} = useHttp();
    const message = useMessage();
    /*Add more validation to fron end as well, there's basic validation on backend as well*/
    const [form, setForm] = useState({
        email: '', password: ''
    });

    useEffect( () => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    useEffect( () => {
        window.M.updateTextFields();
    }, []);

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value });
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message);
        } catch(e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId);
        } catch(e) {}
    }

    return (
        <div className = "row">
            <div className = "col s6 offset-s3">
                <div className = "card light-gray darken-4">
                    <h3 style={{ color:"gray", opacity: 0.9 }}>Log in</h3>
                </div>            
                <div className="card blue-grey darken-4">

                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        {/*Text Inputs*/}
                        <div>
                            <div className="input-field" >
                                {/*Add text color in the input fields later to one css file*/}
                                <input placeholder="Enter Email" 
                                       id="email" 
                                       type="text" 
                                       name="email"
                                       onChange = {changeHandler}
                                       style = {{color: "white"}}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            {/*Password*/}
                            <div className="input-field">
                                {/*Add text color in the input fields later to one css file*/}
                                <input placeholder="Enter Password" 
                                       id="password" 
                                       type="password"
                                       name="password"
                                       onChange = {changeHandler} 
                                       style = {{color: "white"}}/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    {/*Buttons*/}
                    <div className="card-action">{/*Add seperate css styles later! Leave it inline for now*/}
                        <button className = "btn teal darken-1 accent-4" 
                                disabled = {loading}
                                onClick = {loginHandler}
                                style   = {{marginRight: 10}}
                        >
                            Log In
                        </button>

                        <button className = "btn teal lighten-5 black-text"
                                onClick = {registerHandler}
                                disabled = {loading}    
                        >
                            Register
                        </button>
                    </div>

                </div>           
            </div>
        </div>
    );
}
