import { useNavigate } from "react-router-dom";
import "../Styles/Returnbooks.css";
import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";
const Returnbooks = () => {
  const [borrowed,setBorrowed]=useState([])
    const navigate = useNavigate()
    useEffect (()=>{
      fetchBorrowed()
    },[])
  const fetchBorrowed = async()=>{
    const snap = await getDocs(collection(db,'BorrowedBooks'))
      setBorrowed(snap.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }))) 
    }
    const returnBook = async(borrow)=>{
      const bookRef = doc(db,'Book',borrow.bookId)
      const bookSnap = await getDoc(bookRef)
      const bookData = bookSnap.data()
      
      await updateDoc(doc(db,'BorrowedBooks',borrow.id),{
        status:'Returned',
        returnDate:new Date().toLocaleDateString()
      })
      await updateDoc(bookRef,{
        Quantity:bookData.Quantity+1
      })
    alert("Book Returned")
    fetchBorrowed()
    }
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
        <table className="booking-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Book Name</th>
                <th>Borrow Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {borrowed.map(b => (
                <tr key={b.id}>
                  <td>{b.studentName}</td>
                  <td>{b.bookName}</td>
                  <td>{b.borrowDate}</td>
                  <td>{b.status}</td>
                  <td>
                    {b.status === 'Issued' && (
                      <button onClick={() => returnBook(b)}>
                        Return
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Returnbooks
