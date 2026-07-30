import { Link } from 'react-router-dom';

function InstructorDashboard(): JSX.Element {
  return (
    <div className="dashboard-page">
      <h1>Instructor Dashboard</h1>
      <p>Manage your courses and students.</p>
      <nav><ul>
        <li><Link to="/courses">My Courses</Link></li>
        <li><Link to="/students">My Students</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
      </ul></nav>
      {/* TODO: Add instructor-specific course management and grading views */}
    </div>
  );
}

export default InstructorDashboard;
