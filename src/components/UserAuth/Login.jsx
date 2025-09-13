import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: '#0a0a0a'
    }}>
      <div style={{
        backgroundColor: '#0a0a0a',
        border: '2px solid #047857',
        borderRadius: '1rem',
        padding: '2.5rem',
        width: '100%',
        maxWidth: '28rem',
        margin: '0 2rem'
      }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            color: '#10b981',
            marginBottom: '1rem'
          }}>
            Welcome Back
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '1.125rem' }}>
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#d1d5db',
                marginBottom: '0.5rem'
              }}>
                USERNAME *
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#0a0a0a',
                  border: '2px solid #047857',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div>
              <label style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#d1d5db',
                marginBottom: '0.5rem'
              }}>
                PASSWORD *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#0a0a0a',
                  border: '2px solid #047857',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                fontWeight: '600',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              SIGN IN
            </button>
          </div>
        </form>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #047857'
        }}>
          <p style={{ color: '#9ca3af' }}>
            Don't have an account?{' '}
            <button
              onClick={() => navigate("/signup")}
              style={{
                color: '#10b981',
                fontWeight: '600',
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;