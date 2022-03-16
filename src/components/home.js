import React from "react";
import {withRouter} from 'react-router-dom';
import axios from "axios";

class Home extends React.Component {

  componentDidMount(){
    this.verifyToken()
  }

  verifyToken=()=>{
    let loginData= JSON.parse(localStorage.getItem('login'));
    

    axios.post("http://127.0.0.1:8000/api/token/verify/",{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token:loginData.token.access
      })
    
     
    })
    .then(res=>{
      if(!res.verified){
        this.props.history.push("/login");
      }
    })
  }

  logout(){
    let loginData= JSON.parse(localStorage.getItem('login'));
    fetch('http://127.0.0.1:8000/api/user/logout/blacklist/',{
      method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  
  body: JSON.stringify({
    refresh:loginData.token.access
  })
})
  this.props.history.push("/login");
}
  
    render() {
        return (
            <div>
                <div id="root">

                    <div className="App">
      <div className="Toastify"></div>
      <div className="Dashboard_Container">
        <div className="layout_wrapper">
          <div className="sidebar_container">
            <div className="sidebar_header">
              <div className="logo_container"><img src="/assets/media/kaido_logo_primary.bb3c0596.svg"
                  alt="Kaido Logo Primary" ></img></div>
            </div>
            <div className="sidebar_content">
              <ul>
                <li><a className="sidebar_link_active"><img src="/assets/media/home_icon_active.cd64509a.svg"
                      alt="section_icon"></img>
                    <p> Home </p>
                  </a></li>
                <li><a className=""><img src="/assets/media/user_icon.372a5ed4.svg" alt="section_icon"></img>
                    <p> Users </p>
                  </a></li>
                <li><a className=""><img src="/assets/media/profile_icon.c181623d.svg" alt="section_icon"></img>
                    <p> Profile </p>
                  </a></li>
              </ul>
            </div>
          </div>
          <div className="main_conatiner">
            <div className="Home_container">
              <div className="main-heading-container">
                <div className="main_heading-left"></div>
                <div className="main_heading">
                  <h3> Ajay Kumar Mandal </h3>
                </div>
                <div className="main-heading-right"><button className="sign" onClick={()=>{this.logout()}}>sign out</button></div>
              </div>
              <div className="main_sub_heading">
                <p>Hello Ajay</p>
              </div>
              <div className="active_festivals">
                <div className="running_container">
                  <div className="event_container">
                    <div className="card_header">
                      <div className="header_heading"><img src="/assets/media/kaido_bullet_icon.2b846d97.svg"
                          alt="kaido_icon_bulet"></img>
                        <p> Oodles NY Gift </p>
                      </div>
                      <div className="status_section"><span> Status -</span><span className="active-green"> Active </span></div>
                    </div>
                    <div className="card_content">
                      <ul>
                        <li>
                          <div className="single_container"><img src="/assets/media/sent_arrow_icon.8905547b.svg"
                              className="bullet_icon" alt="small_icon"></img> <span className="card_title_container"> Gift Emails Sent
                            </span> <span> 8 </span></div>
                        </li>
                        <li>
                          <div className="single_container"><img src="/assets/media/delivered_icon.47049487.svg"
                              className="bullet_icon" alt="small_icon"></img> <span className="card_title_container"> Gifts Claimed
                            </span> <span> 2 </span></div>
                        </li>
                        <li>
                          <div className="single_container"><img src="/assets/media/budget_icon.1eb32ec9.svg"
                              className="bullet_icon" alt="small_icon"></img> <span className="card_title_container"> Budget </span>
                            <span> $1000 </span></div>
                        </li>
                        <li>
                          <div className="single_container"><img src="/assets/media/delivery_truck_icon.703a800c.svg"
                              className="bullet_icon" alt="small_icon"></img><span className="card_title_container"> Gifts Delivered
                            </span> <span> 0 </span></div>
                        </li>
                        <li>
                          <div className="single_container"><img src="/assets/media/campaign_type.7a3865b3.svg"
                              className="bullet_icon" alt="small_icon"></img> <span className="card_title_container"> Type </span>
                            <span> Manual </span></div>
                        </li>
                        <li>
                          <div className="single_container"><img src="/assets/media/campaign_sub_type.b5b706ce.svg"
                              className="bullet_icon" alt="small_icon"></img> <span className="card_title_container"> Sub Type </span>
                            <span> Manual </span></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="get_in_touch">
                <p> Get in touch with your gifting sidekick </p><a className="btn_primary a_btn" target="_blank"
                  rel="noreferrer" href="https://calendly.com/heyrania/meetkaido">Book a meeting</a>
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
export default Home;