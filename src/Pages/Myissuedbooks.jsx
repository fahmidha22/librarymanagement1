import { useNavigate } from "react-router-dom";
import "../Styles/Myissuedbooks.css";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase";

const MyissuedBooks = () => {

  const [books,setBooks] = useState([])
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(()=>{
    fetchBooks()
  },[])

  const fetchBooks = async () => {

    if(!user){
      console.log("User not logged in")
      return
    }

    const q = query(
      collection(db,"BorrowedBooks"),
      where("studentEmail","==",user.email)
    )

    const snap = await getDocs(q)

    setBooks(
      snap.docs.map(d => ({
        id:d.id,
        ...d.data()
      }))
    )
  }

  const logout = () =>{
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div className="admin-container">

      <div className="sidebar">
        <h2 className="sidebar-logo">📚 LMS</h2>

        <ul className="sidebar-menu">
          <li><a href="/Studentdashboard">📊Dashboard</a></li>
          <li><a href="/Browsebooks">📚Browse books</a></li>
          <li><a href="/Myissuedbooks">📖My issued books</a></li>
          <li><a href="/Profile">👥Profile</a></li>
          <li onClick={logout}>🚪Logout</li>
        </ul>
      </div>

      <div className="main-content">

        <h1>My Issued Books</h1>

        <table className="booking-table">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Issue Date</th>
              <th>Status</th>
              <th>Returned Date</th>
            </tr>
          </thead>

          <tbody>

            {books.length === 0 ? (
              <tr>
                <td colSpan="4">No issued books</td>
              </tr>
            ) : (
              books.map(b => (
                <tr key={b.id}>
                  <td>{b.bookName}</td>
                  <td>{b.borrowDate}</td>
                  <td>{b.status}</td>
                  <td>{b.returnDate ? b.returnDate : "Not Returned"}</td>
                </tr>
              ))
            )}

          </tbody>
        </table>

      </div>

    </div>
  )
}

export default MyissuedBooks