import { useNavigate } from "react-router-dom";
import "../Styles/Myissuedbooks.css";
import React from 'react'

const Viewbooks = () => {
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>
        <ul className="sidebar-menu">
            <li><a href="/Studentdashboard">📊Dashboard</a></li>
            <li><a href="/Browsebooks">📚Browse books</a></li>
            <li><a href="/Myissuedbooks">📖My issued books</a></li>
             <li><a href="/Returnbooks">↩Return Book</a></li>
            <li><a href ="/Profile">👥Profile</a></li>
            <li>🚪Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>My Issued Books</h1>
        <table class="booking-table">
            <thead>
                <th>ID</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Issue Date</th>
                <th>Return Date</th>
                 
            </thead>
        </table>
</div>

</div>
  )
};

export default Viewbooks
