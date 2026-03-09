import { Link, useNavigate } from "react-router-dom";
import "../Styles/AdminDashboard.css";
import "../Styles/Addbooks.css";

const AdminDashboard = () => {
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
        <h1>Admin Dashboard</h1>
        <div className="dash-card">
            <img src="https://cdn-icons-png.flaticon.com/512/29/29302.png" alt="books"/>
            <div>
                <h3>Total Books</h3>
                <p>5000+</p>
            </div>
        </div>
        <div className="dash-card">
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="students"/>
            <div>
                <h3>Total Students</h3>
                <p>1200+</p>
            </div>
        </div>
        <div className="dash-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="issued"/>
            <div>
                <h3>Issued Books</h3>
                <p>350+</p>
            </div>
        </div>
        <div className="dash-card">
            <img src="https://cdn-icons-png.flaticon.com/512/482/482631.png" alt="category"/>
            <div>
                <h3>Categories</h3>
                <p>50+</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard