import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { RegisterFormState } from './types.ts';

function Register(): JSX.Element {
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterFormState>({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof RegisterFormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    }
  };

  return (
    <div className="auth-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={form.name} onChange={handleChange('name')} required />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={form.email} onChange={handleChange('email')} required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={form.password} onChange={handleChange('password')} required />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange('confirmPassword')} required />
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
}

export default Register;
