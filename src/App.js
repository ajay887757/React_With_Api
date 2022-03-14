import Login from './components/login';
import React, {Component} from 'react';
import Home  from './components/home';
import Signup from './components/Signup';
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  // return <Signup />;
  return <Login />;
  // return <Home />;

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