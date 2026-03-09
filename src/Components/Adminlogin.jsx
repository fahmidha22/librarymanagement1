import { useState } from "react"
import "../Styles/Adminlogin.css"
import { Link, useNavigate } from 'react-router-dom'

const Adminlogin = () => {
    const[username,setuserName]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate("")
    const login = ()=>{
        if(username==="admin" && password==="admin123")
        {
            navigate('/AdminDashboard')
        } 
        else{
            alert("invalid username or password")
        }
    };
    

  return (
    <div>
      <div class="login-page">
        <div class="login-box">
            <h2>Admin Login</h2>
            <form>
                <div class="input-group" >
                    <label>User name</label>
                    <input type="username" onChange={(e)=>setuserName(e.target.value)}placeholder="Enter your username"/>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)}placeholder="Enter your password"/>
                </div>
                <button class="login-btn"onClick={login}>Login</button>
                <p className="login-txt">Back to <Link to="/">Home</Link></p>
                </form>
        </div>
      </div>
    </div>
  )
}
  


export default Adminlogin
