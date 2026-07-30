import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login.tsx';
import Register from './Register.tsx';
import Dashboard from './Dashboard.tsx';
import Students from './Students.tsx';
import Courses from './Courses.tsx';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
