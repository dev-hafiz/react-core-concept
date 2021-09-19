import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  return (
    <div className="App">
    <LoadUser></LoadUser>
      <MyComponant name="I-phone 13 pro max" price="200000 /=  BTD"></MyComponant>
      <MyComponant  name="I-phone 12 pro max" price="130000 /=  BTD"></MyComponant> 
      <MyComponant name="I-phone 11 pro" price="100000 /=  BTD"></MyComponant>
      <MyComponant name="I-phone 10 Plus" price="80000  /=  BTD"></MyComponant>
      <MyComponant name="I-phone 8 Plus" price="70000 /= BTD" ></MyComponant>
      <button name="Add Points"></button>
      
    </div>
  );
}

function LoadUser() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  },[])
  
  return(
   <div> 
   <h1>Load Users</h1>
    <div className="div-style">
      
      {
        users.map(user => <User title={user.name.title} name= {user.name.first}lastname ={user.name.last} userImg = {user.picture.large} ></User>)
      }
    </div> 
   </div>
  )
}
function User(props) {
  return (
    <div className="single-user">
    <img src ={props.userImg} />
      <h3>User Name : {props.title} {props.name} {props.lastname}</h3>
      
    </div>
  )
}

function MyComponant(props) {
  const [points, setPoints] = useState(1)
  const compoStyle ={
    background: '#1a1a1b',
    color:'wheat',
    fontSize:'30px',
    fontWeight: '900',
    padding:'25px',
    margin:'10px'
  }
  const pointHandlerButtons = () =>{
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return(
    <div style={compoStyle}>
      <h1>World Fast Phone Place</h1>
      <h2>Phone : {props.name}</h2>
      <h2>Phone : {props.price}</h2>
      <h3>Product Point : {points}</h3>
      <button onClick = {pointHandlerButtons} className="points-button">Add Points</button>
      <p>If you are Interested just keep it!</p>
    </div>
  )
}

export default App;
