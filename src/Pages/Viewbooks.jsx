import { useNavigate } from "react-router-dom";
import "../Styles/Viewbook.css";
import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

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
  const editBook = (id)=>{
    navigate(`/EditBook/${id}`)

  }  
  const deleteBook = async(id)=>{
    const confirmDelete = window.confirm("Are you sure want to delete this book?")  
  if(confirmDelete){
    await deleteDoc(doc(db,"Book",id))
    fetchBooks()
  }
}                        
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2 className="si debar-logo">📚 LMS</h2>
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
        <h1>Add new book</h1>
        <table className="booking-table">
            <thead>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Action</th>
            </thead>
            <tbody>
              {books.map((book,index)=>(
                <tr key={book.id}> 
                  <td>{index + 1}</td>
                  <td>{book.Name}</td>
                  <td>{book.Author}</td>
                  <td>{book.Category}</td>
                  <td>{book.Quantity}</td>
                  <td>
                    <button className="edit-btn" onClick={()=>editBook(book.id)}>Edit</button>
                    <button className="delete-btn"onClick={()=>deleteBook(book.id)}>Delete</button>
                  </td>
                </tr>
                ))}
            </tbody>
        </table>
</div>

</div>
  )
};

export default Viewbooks
