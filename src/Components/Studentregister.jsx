import{ useState} from "react"
import "../Styles/Studentregister.css"
import { Link } from 'react-router-dom'

const Studentregister= async  () => {
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[department,setDepartment]=useState("")
  const register = async(e) => {
    e.preventDefault()
    try{
      const userCredential = await 

    }

  }
  return (
    <div>
      <div class="login-page">
        <div class="login-box">
            <h2>Student Register</h2>
            <form>
                <div class="input-group">
                    <label>User Name</label>
                    <input type="text" onChange={(e)=>setUsername(e.target.value)}placeholder="Enter your name"/>
                </div>
                <div class="input-group">
                    <label>Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"/>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
                </div>
                <div class="input-group">
                    <label>Department</label>
                    <input type="password"  onChange={(e)=>setDepartment(e.target.value)} placeholder="Enter your Department"/>
                </div>
                <button class="register-btn">Register</button>
                </form>
        </div>
      </div>
    </div>
  )
}

export default Studentregister
