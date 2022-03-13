import React from "react";
import { Routes, Route, Link,useHistory } from "react-router-dom";
import Home from "./home";
import {browserHistory} from 'react-router';

class Login extends React.Component{
    state={
        userName:"",
        password:""
    }
    onchangeHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        }
        )

    }

        clickHandler = () => {
            // browserHistory.push("/Home");
        }

    render(){
        return (
        <div>
            
            <div id="root">
        <div className="App">
            <div className="Toastify"></div>
            <div className="LoginContainer">
                <div className="vertical_container"><img className="main_logo" src="/assets/media/kaido_logo_light.6db858fb.svg" alt="logo_kaido"></img>
                    <p className="welcome_note">Welcome to Your Gifting Sidekick</p>
                    <div className="form_wrapper">
                        <div className="form_container">
                            <h3> Welcome </h3>
                    
                                <div className="form_controls"><label>Username </label><input type="text" name="userName"
                                        onChange={(e)=> this.onchangeHandler(e)} value={this.state.userName}></input><span className="login_input_error"></span></div>
                                <div className="form_controls"><label>Password </label><input type="password" name="password"
                                       onChange={(e)=> this.onchangeHandler(e)} value={this.state.password}></input><span className="login_input_error"></span></div>
                                <div className="other_mandatory_text"><a>Forgot your password?</a>
                                    <div className="remember_me"><input type="checkbox" id="rem_me"></input><label
                                            for="rem_me">Remember me</label></div>
                                </div><button className="btn sign_in_btn" onClick={this.clickHandler}>Sign In</button>
                            <div className="submit_request_section">
                                <a href=""> Don't have an account yet?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        );
    }
}
export default Login;