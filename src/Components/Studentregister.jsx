import{ useState} from "react"
import "../Styles/Studentregister.css"
import { Link } from 'react-router-dom'
import {auth, db} from "../Firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import{ doc,setDoc} from "firebase/firestore"
  
  const Studentregister = ()=>{
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[department,setDepartment]=useState("")
    const register = async(e) =>{
      e.preventDefault()
      try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user
        await setDoc(doc(db,"Registration",user.uid),{
          Username:username,
          Email:email,
          Department:department,
          Role:"student"
        })
        alert("Registered successfully")
      }
      catch(e){
        alert(e.message)
      }
    }
  
  return(
      <div>
      <div className="login-page">
        <div className="login-box">
            <h2>Student Register</h2>
            <form onSubmit={register}>
                <div className="input-group">
                    <label>User Name</label>
                    <input type="text" onChange={(e)=>setUsername(e.target.value)}placeholder="Enter your name"/>
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email"/>
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
                </div>
                <div className="input-group">
                    <label>Department</label>
                    <input type="text"  onChange={(e)=>setDepartment(e.target.value)} placeholder="Enter your Department"/>
                </div>
                <button className="register-btn">Register</button>
                </form> 
        </div>
      </div>
    </div>
  )
}

export default Studentregister
