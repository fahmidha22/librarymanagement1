import { useNavigate } from "react-router-dom";
import "../Styles/Addbooks.css";
import React from 'react'

const Addbooks = () => {
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
        <div className="form-container">
            <form class="form-fill">
                <input type="text" placeholder="Book title" required/>
                <input type="text" placeholder="Author name" required/>
                <input type="text" placeholder="Category" required/>
                <input type="text" placeholder="Quantity" required/>
                <input type="text" placeholder="Book image URL"/>
                <button type="submit">Add Book</button>


            </form>
           
      </div>
    </div>
    </div>
  )
}
export default Addbooks



      
    
  


