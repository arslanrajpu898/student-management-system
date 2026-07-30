import { Link } from 'react-router-dom';

function Dashboard(): JSX.Element {
  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <p>Welcome back. Choose a section to manage:</p>
      <nav><ul>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/courses">Courses</Link></li>
      </ul></nav>
    </div>
  );
}

export default Dashboard;
