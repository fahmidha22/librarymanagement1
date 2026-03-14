import { doc, getDoc } from "firebase/firestore"
import "../Styles/Studentlogin.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../Firebase"

const Studentlogin = () => {  
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("") 
    const navigate = useNavigate()
    const login = async(e) =>{
      e.preventDefault()

      try{

        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;

        const docRef = doc(db,'Registration',user.uid);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){

          const studentData = docSnap.data()

          localStorage.setItem("user", JSON.stringify({
            email: studentData.Email,
            name: studentData.Username,
            uid: user.uid
          }))

          navigate("/Studentdashboard")

        } else {
          alert("Not Registered")
        }

      }
      catch(e){
        alert(e.message)
      }
    }
  return (
    <div>
      <div class="login-page">
        <div class="login-box">
            <h2>Student Login</h2>
            <form>
                <div class="input-group">
                    <label>Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
                </div>
                <button type ="submit" class="login-btn" onClick={login}>Login</button>

                <p class="login-text"> Don't have an account?<span>
                <Link to="/Studentregister">Register</Link></span></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Studentlogin
