import React from "react";

class Signup extends React.Component {
    render() {
        return (
            <div>

<div id="root">
        <div className="App">
            <div className="Toastify"></div>
            <div className="LoginContainer">
                <div className="vertical_container"><img className="main_logo" src="/assets/media/kaido_logo_light.6db858fb.svg" alt="logo_kaido"></img>
                    <p className="welcome_note">Signup page</p>
                    <div className="form_wrapper">
                        <div className="form_container">
                            <h3> Welcome </h3>

                        
                                <div className="form_controls"><label>Username </label><input type="text"
                                        value="" placeholder="Enter Username"></input><span className="login_input_error" ></span></div>
                                <div className="form_controls"><label>Password </label><input type="password"
                                        value="" placeholder="Enter Password"></input><span className="login_input_error" ></span></div>
                                <div className="form_controls"><label>Conform Password </label><input type="Conform_password"
                                        value="" placeholder="Enter Conform Password"></input><span className="login_input_error" ></span></div>
                                <button className="btn sign_in_btn">Signup</button>
                            

                
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
    export default Signup;