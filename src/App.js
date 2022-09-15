
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
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>

    </div>
  );
}

export default App;
