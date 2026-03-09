import '../Styles/Studentdashboard.css'

const Studentdashboard = () => {
  return (
    <div className='admin-container'>
      <div className='sidebar'>
        <h2 className='sidebar-logo'>📚 LMS</h2>
        <ul className='sidebar-menu'>
           <li><a href="/AdminDashboard">📊Dashboard</a></li>
            <li><a href="/Addbooks">📚Add Books</a></li>
            <li><a href="/Viewbooks">📖View Books</a></li>
            <li><a href ="/Students">👥Students</a></li>
            <li><a href="/Issuebooks">📕Issue Books</a></li>
            <li><a href="/Returnbooks">↩Return Book</a></li>
            <li>🚪Logout</li>
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
                <p>3</p>
            </div>
            <div className='dash-card'>
                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="books"/>
                <h3>Returned Books</h3>
                <p>12</p>
            </div>
            <div className='dash-card'>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="books"/>
                <h3>Pending Fine</h3>
                <p>₹0</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Studentdashboard