import { useNavigate } from "react-router-dom"
import "../Styles/Issuebooks.css"
import { useEffect, useState } from "react"
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../Firebase"

const AdminIssuebook = () => {
    const [book, setBook] = useState([])
    const [student, setStudent] = useState([])
    const [bookid, setBookid] = useState("")
    const [studentid, setStudentid] = useState("")
    useEffect(() => {
        fetchBooks()
        fetchStudents()
    }, [])
    const fetchBooks = async () => {
        const snap = await getDocs(collection(db, 'Book'))
        setBook(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    }
    const fetchStudents = async () => {
        const snap = await getDocs(collection(db, 'Registration'))
        setStudent(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    }
    const issuebook = async (e) => {
        e.preventDefault()

    const books = book.find(b => b.id === bookid)
    const students = student.find(s => s.id === studentid)
    if (!books || !students) {
        alert("Please select student and book")
            return
        }
    if (books.Quantity <= 0) {
        alert("Book not available")
            return
        }
    try {
await addDoc(collection(db, "BorrowedBook"), {
        studentName: students.Username,
        studentEmail: students.Email,
        bookId: books.id,
        bookName: books.Name,
        borrowDate: new Date().toLocaleDateString(),
        status: 'Issued',
        returnDate: ''
    })
await updateDoc(doc(db, 'Book', books.id), {
     Quantity: books.Quantity - 1
     })

            alert("Book Issued Successfully")

            setBookid("")
            setStudentid("")

            fetchBooks()

        } catch (error) {
            console.error(error)
            alert("Error issuing book")
        }
    }

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }

    return (
        <div className="admin-container">

            <div className="sidebar">
                <h2 className="sidebar-logo">📚 LMS</h2>

                <ul className="sidebar-menu">
                    <li><a href='/admindashboard'>📊Dashboard</a></li>
                    <li><a href='/addbook'>📚Add Books</a></li>
                    <li><a href='/viewbooks'>📖View Books</a></li>
                    <li><a href='/students'>👥Students</a></li>
                    <li><a href='/issuebook'>📕Issue Books</a></li>
                    <li><a href='/returnbook'>↩Return Book</a></li>
                    <li onClick={logout}>🚪Logout</li>
                </ul>
            </div>

            <div className="main-content">

                <h2>Issue Book</h2>

                <div className="form-container">

                    <form className="add-book-form" onSubmit={issuebook}>
                        <select
                            value={studentid}
                            onChange={(e) => setStudentid(e.target.value)}
                            required
                        >
                            <option value="">Select Student</option>

                            {student.map(s => (
                                <option key={s.id} value={s.id}>
                                    {s.Username}
                                </option>
                            ))}
                        </select>
                        <select
                            value={bookid}
                            onChange={(e) => setBookid(e.target.value)}
                            required>
                            <option value="">Select Book</option>

                            {book.map(b => (
                                <option key={b.id} value={b.id}>
                                    {b.Name} ({b.Quantity})
                                </option>
                            ))}
                        </select>

                        <button type="submit">Issue Book</button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default AdminIssuebook