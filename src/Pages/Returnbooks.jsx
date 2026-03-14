import { useNavigate } from "react-router-dom";
import "../Styles/Returnbooks.css";
import React from 'react'

const Returnbooks = () => {
   const navigate = useNavigate()
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
        <h1>Return books</h1>
        <table class="booking-table">
            <thead>
                <th>ID</th>
                <th>Student Name</th>
                <th>Book Name</th>
                <th>Issue Date</th>
                <th>Return Date</th>
                 <th>Action</th>
            </thead>
        </table>
</div>

</div>
  )
};

export default Returnbooks
