import React, { useEffect, useState } from 'react'
import '../Styles/Edit.css'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase'
const EditBook = () => {
    const[name,setName]=useState("")
    const[author,setAuthor]=useState("")
    const[category,setCategory]=useState("")
    const[quantity,setQuantity]=useState("")
    const {id} = useParams()
    const navigate = useNavigate()
    const fetchBooks = async(e) =>{
        const docRef=doc(db,"Book",id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const data = docSnap.data()
            setName(data.Name);
            setAuthor(data.Author);
            setCategory(data.Category);
            setQuantity(data.Quantity);
        }
    };
    useEffect(()=>{
        fetchBooks();
    },[])
    const updateBook= async(e) =>{
        e.preventDefault()
        const bookRef=doc(db,"Book",id);
        await updateDoc(bookRef,{
            Name:name,
            Author:author,
            Category:category,
            Quantity:quantity
        })
        alert("Book updated successfully")
        navigate('/Viewbooks')
    } 
    const logout = ()=>{
        navigate("/")
    }

  return (
      <div>
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
                    <h1>Edit Book</h1>
                    <div className="form-container">
                        <form class="form-fill"onSubmit={updateBook}>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Book title" required/>
                            <input type="text"  value={author} onChange={(e)=>setAuthor(e.target.value)}placeholder="Author name" required/>
                            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}placeholder="Category" required/>
                            <input type="text"  value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder="Quantity" required/>
                            <button type="submit">Update</button>

                        </form>
                    
                    </div>
                </div>
        </div>

    </div>
  )
}

export default EditBook
