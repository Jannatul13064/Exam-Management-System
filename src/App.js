
import './App.css';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import Invigilator from './pages/Invigilator/Invigilator';
import NotFound from './pages/NotFound/NotFound';
import Registration from './pages/Registration/Registration';
import Rooms from './pages/Rooms/Rooms';
import Students from './pages/Students/Students';
import Teachers from './pages/Teachers/Teachers';
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import TeacherDetail from './pages/TeacherDetail/TeacherDetail';
import StudentDetails from './pages/StudentDetails/StudentDetails';
import Footer from './components/Footer/Footer';
import AddInvigilator from './pages/AddInvigilator/AddInvigilator';
import AddStudent from './pages/AddStudent/AddStudent';
import AddRoom from './pages/AddRoom/AddRoom';
import GenerateRoutine from './pages/GenerateRoutine/GenerateRoutine';
import AddTeacher from './pages/AddTeacher/AddTeacher';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/admin' element={<Admin></Admin>} />
        <Route path='/students' element={<Students></Students>} />
        <Route path='/students/:studentId' element={<StudentDetails></StudentDetails>} />
        <Route path='/rooms' element={<Rooms></Rooms>} />
        <Route path='/invigilator' element={<Invigilator></Invigilator>} />
        <Route path='/teachers' element={<Teachers></Teachers>} />
        <Route path='/teacher/:teacherId' element={<TeacherDetail></TeacherDetail>} />
        <Route path='/registration' element={<Registration></Registration>} />
        <Route path='/addInvigilator' element={<AddInvigilator></AddInvigilator>} />
        <Route path='/addStudent' element={<AddStudent></AddStudent>} />
        <Route path='/addRoom' element={<AddRoom></AddRoom>} />
        <Route path='/generateRoutine' element={<GenerateRoutine></GenerateRoutine>} />
        <Route path='/addTeacher' element={<AddTeacher></AddTeacher>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
