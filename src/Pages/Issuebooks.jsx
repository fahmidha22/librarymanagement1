import "../Styles/Issuebooks.css"
import React from 'react'

const IssueBooks = () => {
  return (
    <div>
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
            <h1>Issue Book</h1>
            <div className="form-container">
                <form className="add-book-form">
                    <label>Select Student</label>
                    <option></option>

                    <label>Select Book</label>
                    <option></option>

                    <label>Issue Date</label>
                    <input type="date"/>

                    <label>Return Date</label>
                    <input type="date"/>

                    <button type="submit">Issue Book</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default IssueBooks