import { useNavigate } from "react-router-dom";
import "../Styles/Addbooks.css";
import React, { useState } from 'react'
import {db} from "../Firebase"
import { addDoc, collection } from "firebase/firestore";

const Addbooks = () => {
  const[author,setAuthor]=useState("")
    const[category,setCategory]=useState("")
    const[name,setName]=useState("")
    const[quantity,setQuantity]=useState("")
    const navigate = useNavigate()
    const logout = ()=>(
      navigate('/')
    )
    const addbook = async(e)=>{
        e.preventDefault()
        try{
            await addDoc(collection(db, "Book"), {
              Name: name,
              Author: author,
              Category: category,
              Quantity: quantity
            });
            alert("Book added sucessfully")
        }
        catch(e){
            alert(e.message);
            
        } 
    }
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
        <h1>Add new book</h1>
        <div className="form-container">
            <form class="form-fill">
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Book title" required/>
                <input type="text" onChange={(e)=>setAuthor(e.target.value)}placeholder="Author name" required/>
                <input type="text" onChange={(e)=>setCategory(e.target.value)}placeholder="Category" required/>
                <input type="text" onChange={(e)=>setQuantity(e.target.value)} placeholder="Quantity" required/>
                
                <button type="submit" onClick={addbook}>Add Book</button>


            </form>
           
      </div>
    </div>
    </div>
  )
}
export default Addbooks



      
    
  


