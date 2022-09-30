import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';



import Login from './components/login';
import Signup from './components/signup';
import Addcourse from './components/Addcourse';
import Admincourse from './components/Admincourse';
import Editcourse from './components/Editcourse';
import Enrolled from './components/Enrolledcourse';

import Adminstudent from './components/Adminstudent';
import Addstudent from './components/Addstudent';
import Editstudent from './components/Editstudent';


import Academydetail from './components/Academydetail';
import Viewacademy from './components/Viewacademy'



// // import Adminacademy from './components/Adminacademy';
// // import Addacademy from './components/Addacademy';
// import Editacademy from './components/Editacademy';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/addcourse' element={<Addcourse/>}></Route>
        <Route path="/admincourse" element={<Admincourse/>}></Route>
        <Route path='/editcourse' element={<Editcourse/>}></Route>
        <Route path="/viewacademy" element={<Viewacademy/>}></Route>
        <Route path="/viewacademy/:acaid" element={<Academydetail/>}></Route>
         <Route path="/enrolled" element={<Enrolled/>}></Route>
        {/* <Route path="/enrolledcourse" element={<Enrolledcourse/>}></Route>  */}
        {/* <Route path="/adminacademy" element={<Adminacademy/>}></Route> */}
                {/* <Route path="/addacademy" element={<Addacademy/>}></Route> */}
        {/* <Route path='/editacademy' element={<Editacademy/>}></Route> */}

        <Route path="/adminstudents" element={<Adminstudent/>}></Route>
        <Route path='/addstudent' element={<Addstudent/>}></Route>
        <Route path='/editstudent' element={<Editstudent/>}></Route>         
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

