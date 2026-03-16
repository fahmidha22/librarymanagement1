import React, { useEffect, useState } from "react";
import '../Styles/Home.css';
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

function Home() {

    const [totalBooks,setTotalBooks] = useState(0)
    const [members,setMembers] = useState(0)
    const [issues,setIssues] = useState(0)
    useEffect(()=>{

        fetchCounts()

    },[])

    const fetchCounts = async () => {

        // Total Books
        const bookSnap = await getDocs(collection(db,"Book"))
        setTotalBooks(bookSnap.size)

        // Active Members
        const studentSnap = await getDocs(collection(db,"Registration"))
        setMembers(studentSnap.size)

        // Daily Issues
        const issueSnap = await getDocs(collection(db,"BorrowedBooks"))
        const issuedBooks = issueSnap.docs.filter(doc => doc.data().status === "Issued")
        setIssues(issuedBooks.length)

        
    }

    return (
        <div className="home-container">

            {/* Navigation */}
            <nav className="navbar">
                <div className='logo'>
                    <span className="logo-icon">📚</span>
                    <h2>Libre<span>Flow</span></h2>
                </div>

                <ul className="nav-links">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#feature">Features</a></li>
                    <li><a href="#books">Books</a></li>
                </ul>

                <div className="nav-auth">
                    <Link to='/Adminlogin' className="register-btn">Admin</Link>
                    <Link to="/Studentregister" className="register-btn">Get Started</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-content">

                    <h1>Your Digital Gateway to <span>Knowledge</span></h1>

                    <p>
                        Streamline borrowing, automate tracking, and empower your learning journey with our integrated smart platform.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">Browse Library</button>
                        <Link to='/Studentlogin' className="btn-secondary">Student Login</Link>
                    </div>
                </div>
            </header>

            {/* Stats Dashboard */}
            <section className="stats-container">

                <div className="stat-card">
                    <h3>{totalBooks}</h3>
                    <p>Total Books</p>
                </div>

                <div className="stat-card">
                    <h3>{members}</h3>
                    <p>Active Members</p>
                </div>

                <div className="stat-card">
                    <h3>{issues}</h3>
                    <p>Books Issues</p>
                </div>

                

            </section>

            {/* Features */}
            <section className="features-section" id="feature">
                <div className="section-header">
                    <h2>Advanced Capabilities</h2>
                    <p>Everything you need to manage a modern library.</p>
                </div>

                <div className="features-grid">

                    <div className="feature-card">
                        <div className="icon">🔍</div>
                        <h3>Smart Search</h3>
                        <p>Instant filtering by ISBN, Author, or Genre.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon">🔄</div>
                        <h3>Digital Workflow</h3>
                        <p>One-click book issuing and contactless returns.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon">📊</div>
                        <h3>Real-time Analytics</h3>
                        <p>Detailed insights into library circulation.</p>
                    </div>

                    <div className="feature-card">
                        <div className="icon">💳</div>
                        <h3>Automated Fines</h3>
                        <p>System-generated alerts for overdue items.</p>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="footer-cta">
                <h2>Ready to digitize your library?</h2>
                <p>Join over 1,000 institutions worldwide.</p>
                <button className="btn-primary">Register Now</button>
            </footer>

        </div>
    );
}

export default Home;