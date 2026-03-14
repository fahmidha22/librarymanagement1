import { Link, useNavigate } from "react-router-dom";
import "../Styles/AdminDashboard.css";
import "../Styles/Addbooks.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const AdminDashboard = () => {
    const navigate = useNavigate()
    const[bookCount,setBookCount]=useState(0)
    const[studentCount,setStudentCount]=useState(0)
    const[issuedCount,setIssuedCount]=useState(0)
    useEffect(()=>{
        fetchCounts()
    })
    const fetchCounts = async () => {

        const bookSnap = await getDocs(collection(db,"Book"))
        setBookCount(bookSnap.size)

        const studentSnap = await getDocs(collection(db,"Registration"))
        setStudentCount(studentSnap.size)

        const issuedSnap = await getDocs(collection(db,"BorrowedBooks"))

        const issued = issuedSnap.docs
        .map(doc => doc.data())
        .filter(book => book.status === "Issued")

        setIssuedCount(issued.length)

        }
    
    const logout = () => (
        navigate('/')
    )
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>
        <ul className="sidebar-menu">
            <li><a href="/AdminDashboard">📊Dashboard</a></li>
            <li><a href="/Addbooks">📚Add Books</a></li>
            <li><a href="/Viewbooks">📖View Books</a></li>
            <li><a href ="/Students">👥Students</a></li>
            <li><a href="/Issuebooks">📕Issue Books</a></li>
            <li><a href="/Returnbooks">↩Return Book</a></li>
            <li onClick={logout}>🚪Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Admin Dashboard</h1>
        <div className="dash-card">
            <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="books"/>
            <div>
                <h3>Total Books</h3>
                <p>{bookCount}</p>
            </div>
        </div>
        <div className="dash-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="students"/>
            <div>
                <h3>Total Students</h3>
                <p>{studentCount}</p>
            </div>
        </div>
        <div className="dash-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="issued"/>
            <div>
                <h3>Issued Books</h3>
                <p>{issuedCount}</p>
            </div>
        </div>
       
       
      </div>
    </div>
  )
}

export default AdminDashboard