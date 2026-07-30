import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import type { LoginFormState } from './types.ts';

function Login(): JSX.Element {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginFormState>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof LoginFormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    }
  };

  return (
    <div className="auth-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={form.email} onChange={handleChange('email')} required />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" value={form.password} onChange={handleChange('password')} required />
        {error && <p className="error-text">{error}</p>}
        <button type="submit">Log In</button>
      </form>
      <p>No account? <Link to="/register">Register here</Link></p>
    </div>
  );
}

export default Login;
