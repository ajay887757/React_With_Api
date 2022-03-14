import React, { Component } from "react";
// import { useHistroy } from "react-router-dom"
    
// let history=useHistroy();
// history.push('/home')
class Login extends Component {
    
  constructor(){
    super();
    this.state={
      user_name:null,
      password:null,
    }
  }
  login(){
    
    fetch('http://127.0.0.1:8000/api/token/',{
      method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_name:this.state.user_name,
    password:this.state.password,
  })
    }).then((response)=>{
      response.json().then((result)=>{
        console.warn("result",result);
        localStorage.setItem('login',JSON.stringify({
          login:true,
          token:result.token
        }))
      })
    })
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
                                        onChange={(event)=>{this.setState({user_name:event.target.value})}}></input><span className="login_input_error"></span></div>
                                <div className="form_controls"><label>Password </label><input type="password" name="password"
                                       onChange={(event)=> {this.setState({password:event.target.value})}}></input><span className="login_input_error"></span></div>
                                <div className="other_mandatory_text"><a>Forgot your password?</a>
                                    <div className="remember_me"><input type="checkbox" id="rem_me"></input><label
                                            for="rem_me">Remember me</label></div>
                                </div><button className="btn sign_in_btn" onClick={()=>{this.login()}}>Sign In</button>
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