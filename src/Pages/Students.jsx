import { useNavigate } from "react-router-dom";
import "../Styles/Student.css";
import React, { useEffect, useState } from 'react'
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../Firebase"


const Students = () => {
  const[student,setStudent]=useState([])
  useEffect(()=>{
    fetchStudent()
  })
  const fetchStudent= async()=>{
    const snap= await getDocs(collection(db, 'Registration'))
    const list = snap.docs.map(doc=>({
      id:doc.id,
      ...doc.data()
    }))
    setStudent(list)

  }
  const navigate=useNavigate()
    const logout = () => {
      navigate('/')
    }
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
        <h1>Registered Students</h1>
        <table className="booking-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
              {student.map(a=>(
                <tr key={a.id}>
                  <td>{a.Username}</td>
                  <td>{a.Email}</td>
                  <td>{a.Department}</td>
                  <td>{a.Role}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students