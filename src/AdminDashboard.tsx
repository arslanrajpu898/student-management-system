import { Link } from 'react-router-dom';

function AdminDashboard(): JSX.Element {
  return (
    <div className="dashboard-page">
      <h1>Admin Dashboard</h1>
      <p>Administrative overview and controls.</p>
      <nav><ul>
        <li><Link to="/students">Manage Students</Link></li>
        <li><Link to="/courses">Manage Courses</Link></li>
        <li><Link to="/instructors">Manage Instructors</Link></li>
      </ul></nav>
      {/* TODO: Add admin-specific stats, user management, and system controls */}
    </div>
  );
}

export default AdminDashboard;
