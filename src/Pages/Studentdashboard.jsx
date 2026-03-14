import '../Styles/Studentdashboard.css'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../Firebase'
import { collection, getDocs } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

const  Studentdashboard  = () => {

  const [issued,setIssued] = useState(0)
  const [returned,setReturned] = useState(0)

  const navigate = useNavigate()

  useEffect(()=>{

    const unsubscribe = onAuthStateChanged(auth, (user)=>{

      if(user){
        fetchData(user.email)
      }

    })

    return ()=> unsubscribe()

  },[])

  const fetchData = async (email) => {

    const snap = await getDocs(collection(db,"BorrowedBooks"))

    const myBooks = snap.docs
      .map(doc => doc.data())
      .filter(book => book?.studentEmail === email)

    setIssued(myBooks.filter(b => b.status === "Issued").length)

    setReturned(myBooks.filter(b => b.status === "Returned").length)

  }

  const logout = () => {
    navigate('/')
  }

  return (
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

        <h1>Student Dashboard</h1>

        <div className='dashboard-cards'>

            <div className='dash-card'>
                <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png" alt="books"/>
                <h3>Available Books</h3>
                <p>5000+</p>
            </div>

            <div className='dash-card'>
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="issued"/>
                <h3>My Issued Books</h3>
                <p>{issued}</p>
            </div>

            <div className='dash-card'>
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="books"/>
                <h3>Returned Books</h3>
                <p>{returned}</p>
            </div>

        </div>

      </div>

    </div>
  )
}

export default Studentdashboard