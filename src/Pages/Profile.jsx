import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "../Firebase"
import { onAuthStateChanged } from "firebase/auth"
import "../Styles/Profile.css"
import { useNavigate } from "react-router-dom"

function Profile(){

  const [profile,setProfile] = useState(null)
  const navigate = useNavigate();
  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        fetchProfile(user)
      }else{
        console.log("User not logged in")
      }
    })

    return ()=>unsubscribe()

  },[])

  const fetchProfile = async (user) => {

    try{
      const docRef = doc(db,"Registration",user.uid)
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()){
        setProfile(docSnap.data())
      }else{
        console.log("No profile found")
      }
    }
    catch(error){
      console.error(error)
    }

  }

  if(!profile){
    return <p>Loading profile...</p>
  }
  const logout = () => {
    navigate('/')
  }
  return(
    <div className='admin-container'>

      <div className='sidebar'>
        <h2 className='sidebar-logo'>📚 LMS</h2>

        <ul className='sidebar-menu'>
            <li><a href='/studentdashboard'>📊 Dashboard</a></li>
            <li><a href='/browsebooks'>📚 Browse Books</a></li>
            <li><a href='/myissuedbooks'>📖 My Issued Books</a></li>
            <li><a href='/profile'>👤 Profile</a></li>
            <li onClick={logout}>🚪 Logout</li>
        </ul>
      </div>

      <div className='main-content'>
        <div className="profile-container">

          <h2>My Profile</h2>

          <div className="profile-card">
            <div className="avatar">
              {profile.Username?.charAt(0).toUpperCase()}
            </div>
            <p><strong>Name:</strong> {profile.Username}</p>
            <p><strong>Email:</strong> {profile.Email}</p>
            <p><strong>Department:</strong> {profile.Department}</p>
            <p><strong>Role:</strong> {profile.Role}</p>

          </div>

        </div>
      </div>

    </div>
  )

}

export default Profile

