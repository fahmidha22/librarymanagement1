import React from "react";
import '../Styles/Home.css'
import { Link } from "react-router-dom";
function Home(){
    return(
        <div>
            <nav className="navbar">
                <div className='logo'>
                    <h2>📚Library LMS</h2>
                </div>
                <ul className="nav-links">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#feature">Features</a></li>
                    <li><a href="#books">Books</a></li>
                    <li><Link to='/Adminlogin'>Admin Login</Link></li>
                    <li><Link to='/Studentlogin'>Student Login</Link></li>
                </ul>
                <Link to="/Studentregister" className=".register-btn"> Register</Link>
            </nav>
        <section class="Base">
                <div class="base-content">
                    <h1>Digital Library Platform</h1>
                    <p>Discover thosands of books,managing,borrowing,experience a smartdigital library.</p>    
                <div class="base-buttons">
                        <button class="Browse Books">Browse Books</button>
                        <button class="Student Login">Student Login</button>
                </div>
        </div>
        </section>
            <section class="stats">
            <div class="stat-box">
                <h2>📖5000+</h2>
                <p>Books Available</p>
        </div>
            <div class="stat-box">
                <h2>🧑‍🎓1200+</h2>
                <p>Students</p>
            </div>
        <div class="stat-box">
                <h2>👩‍💻350+</h2>
                <p>Daily Readers</p>
        </div>
            <div class="stat-box">
                <h2>🗂50+</h2>
                <p>Categories</p>
            </div>
        </section>  
            <section class="features" id ="feature">
                <h2>Library features</h2>
                <div class="features-grid">
                    <div class="features-card">
                        <h3>🔍Smart Book Search</h3>
                        <p>Find books by tile,author,and category.</p>
                    </div>
                    
                    <div class="features-card">
                        <h3>📖 ↩Easy issue & return</h3>
                        <p>Issue and return books digitally.</p>
                    </div>
                    
                    <div class="features-card">
                        <h3>📊Admin Dashboard</h3>
                        <p>Monitor library activities & reports.</p>
                    </div>
                    <div class="features-card">
                        <h3>💰Fine management</h3>
                        <p>Automated overdue fine tracking.</p>
                    </div>
                </div>
            </section>
            <div>
        <section class="Category">
            <h2>Book Categories</h2>
            <div class="category-box">
                <button class="cat box1">Programming</button>
                <button class="cat box2">Science</button>
                <button class="cat box3">Technology</button>
                <button class="cat box4">History</button>
                <button class="cat box5">Education</button>
                <button class="cat box6">Mathematics</button>
             
            </div>
        </section>
    </div>
            <div class="books" id="books">
                <h2>Popular Books</h2>
                <div class="book-grid">
                    <div class="book-box">
                    <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"/>
                <h1>React Development</h1>
                </div>
                <div class="book-box">
                    <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"/>
                    <h1>Data Structures</h1>
                    </div>
                    <div class="book-box">
                    <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"/>
                    <h1>Machine Learning</h1>
                    </div>
                    <div class="book-box">
                    <img src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"/>
                        <h1>Artificial Intelligenece</h1>
                    </div>
                    </div>
            <section className="footer">
                 <h2>Start Your Learning Journey Today</h2>
                <p>Join our digital library and explore unlimited books.</p>
            
                   
            </section>
                </div>
            </div>
            
           
          );

}
export default Home;