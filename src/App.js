import Home from "./Components/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Studentlogin from "./Components/Studentlogin";
import Studentregister from "./Components/Studentregister";
import Adminlogin from "./Components/Adminlogin";
import AdminDashboard from "./Pages/AdminDashboard";
import Studentdashboard from "./Pages/Studentdashboard";
import Addbooks from "./Pages/Addbooks";
import Viewbooks from "./Pages/Viewbooks";
import Students from "./Pages/Students";
import IssueBooks from "./Pages/Issuebooks";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Studentlogin" element={<Studentlogin/>}/>
        <Route path="/Studentregister" element={<Studentregister/>}/>
        <Route path="/Adminlogin" element={<Adminlogin/>}/>
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="/Studentdashboard" element={<Studentdashboard/>}/>
         <Route path="/Addbooks" element={<Addbooks/>}/>
         <Route path="/Viewbooks" element={<Viewbooks/>}/>
         <Route path="/Students" element={<Students/>}/>
         <Route path="/Issuebooks" element={<IssueBooks/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;