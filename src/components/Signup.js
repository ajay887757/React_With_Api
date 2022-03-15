import React from "react";

class Signup extends React.Component {
    constructor(){
        super();
        this.state={
          user_name:null,
          password:null,
          password2:null,
        }
      }
      signup(){
        if(this.state.password==this.state.password2){
        fetch('http://127.0.0.1:8000/api/user/create/',{
          method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name:this.state.user_name,
        password:this.state.password,
        password2:this.state.password2,
      })
        }).then((response)=>{
          response.json().then((result)=>{
            console.warn("result",result);
            localStorage.setItem('Signup',JSON.stringify({
              login:true,
              token:result.token
            }))
          })
        })
      }
      else{
        alert("Both Password Not Match")
      }
    }
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


                                        <div className="form_controls"><label>Username </label><input type="text" onChange={(event)=>{this.setState({user_name:event.target.value})}}
                                             placeholder="Enter Username"></input><span className="login_input_error" ></span></div>
                                        <div className="form_controls"><label>Password </label><input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}
                                            placeholder="Enter Password"></input><span className="login_input_error" ></span></div>
                                        <div className="form_controls"><label>Conform Password </label><input type="password" onChange={(event)=>{this.setState({password2:event.target.value})}}
                                             placeholder="Enter Conform Password"></input><span className="login_input_error" ></span></div>
                                        <button className="btn sign_in_btn" onClick={()=>{this.signup()}}>Signup</button>
                                        



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