import { useNavigate } from "react-router-dom";
import "../Styles/Viewbook.css";
import React from 'react'

const Viewbooks = () => {
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
            <li>🚪Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Add new book</h1>
        <table class="booking-table">
            <thead>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Quantity</th>
                <th>Action</th>
            </thead>
        </table>
</div>

</div>
  )
};

export default Viewbooks
