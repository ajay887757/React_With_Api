import Login from './components/login';
import React, {Component} from 'react';
import Home  from './components/home';
import Signup from './components/Signup';
import {Route,Switch,BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Error from './components/ERROR';

function App() {
  // return <Signup / >;
  // return <Login />;
  // return <Home />;
  return (
    <>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/home' component={Home}/>
      <React component={Error} />

    </Switch>
      {/* <Login />
      <Signup />
      <Home /> */}
    </>
  )

}



export default App;


// const api=axios.create({
//   baseURL:'http://127.0.0.1:56/api/user/create/'
// })

// class App extends Component{
//   state={
//     courses:[]
//   }
//     constructor(){
//       super();
//       api.get('/').then(res=>{
//         console.log(res.data)
//       })
//   }
// render(){

// }