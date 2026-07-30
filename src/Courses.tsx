import { useEffect, useState } from 'react';
import type { Course } from './types.ts';

function Courses(): JSX.Element {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => { setCourses([]); setLoading(false); }, []);
  return (
    <div className="list-page">
      <h1>Courses</h1>
      {loading ? <p>Loading...</p> : (
        <table>
          <thead><tr><th>Title</th><th>Description</th><th>Instructor ID</th></tr></thead>
          <tbody>
            {courses.map((c) => (<tr key={c.id}><td>{c.title}</td><td>{c.description}</td><td>{c.instructorId}</td></tr>))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Courses;
