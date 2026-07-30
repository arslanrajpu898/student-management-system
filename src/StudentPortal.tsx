import { Link } from 'react-router-dom';

function StudentPortal(): JSX.Element {
  return (
    <div className="dashboard-page">
      <h1>Student Portal</h1>
      <p>View your courses, grades, and schedule.</p>
      <nav><ul>
        <li><Link to="/courses">My Courses</Link></li>
        <li><Link to="/grades">Grades</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
      </ul></nav>
      {/* TODO: Add student-specific enrollment, progress tracking, and grade views */}
    </div>
  );
}

export default StudentPortal;
