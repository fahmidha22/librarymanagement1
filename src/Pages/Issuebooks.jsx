import "../Styles/Issuebooks.css"
import React from 'react'

const IssueBooks = () => {
  return (
    <div>
        <div className="admin-container">
            <div className="sidebar">
            <h2 className="sidebar-logo">📚 LMS</h2>
            <ul className="sidebar-menu">
                <li><a href='/admindashboard'>📊Dashboard</a></li>
                <li><a href='/addbook'>📚Add Books</a></li>
                <li><a href='/viewbooks'>📖View Books</a></li>
                <li><a href='/students'>👥Students</a></li>
                <li><a href='/issuebook'>📕Issue Books</a></li>
                <li><a href='/returnbooks'>↩Return Book</a></li>
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