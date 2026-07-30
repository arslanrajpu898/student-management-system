import { useEffect, useState } from 'react';
import type { Student } from './types.ts';

function Students(): JSX.Element {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => { setStudents([]); setLoading(false); }, []);
  return (
    <div className="list-page">
      <h1>Students</h1>
      {loading ? <p>Loading...</p> : (
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Enrolled Courses</th></tr></thead>
          <tbody>
            {students.map((s) => (<tr key={s.id}><td>{s.name}</td><td>{s.email}</td><td>{s.enrolledCourseIds.length}</td></tr>))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Students;
