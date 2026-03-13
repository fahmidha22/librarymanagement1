import { useNavigate } from "react-router-dom";
import "../Styles/Browsebooks.css";
import React, { useEffect, useState } from 'react'
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";

const Viewbooks = () => {
   const navigate = useNavigate()
    const logout =() => {
      navigate('/')
    }
     const[books,setBooks]=useState([])
      const fetchBooks = async () =>{
        const querySnapshot = await getDocs(collection(db,"Book"));
        const data = querySnapshot.docs.map(doc => ({
          id:doc.id,
          ...doc.data() 
        }));
        setBooks(data);
      };
      useEffect(()=>{
        fetchBooks();
      },[]);             
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
            <li onClick={logout}>🚪Logout</li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Browse books</h1>
        <table class="booking-table">
            <thead>
                <th>ID</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Quantity</th>
                   <th>Action</th>
                
            </thead>
            <tbody>
              {books.map((book,index)=>(
                <tr key={book.id}> 
                  <td>{ index + 1}</td>
                  <td>{book.Name}</td>
                  <td>{book.Author}</td>
                  <td>{book.Category}</td>
                  <td>{book.Quantity}</td>
                </tr>
                ))}

            </tbody>
        </table>
</div>

</div>
  )
};

export default Viewbooks
