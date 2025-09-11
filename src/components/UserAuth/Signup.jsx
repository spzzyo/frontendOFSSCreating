import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phoneNo: '',
    address: '',
    dateOfBirth: '',
    cardType: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: '#0a0a0a',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: '#0a0a0a',
        border: '2px solid #047857',
        borderRadius: '1rem',
        padding: '2rem',
        width: '100%',
        maxWidth: '50rem',
        margin: '0 1rem'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#10b981',
            marginBottom: '0.5rem'
          }}>
            Create Your Account
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '1rem' }}>
            Join us to manage your finances efficiently
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Personal Information */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#10b981',
                marginBottom: '0.5rem'
              }}>
                PERSONAL INFORMATION
              </h2>
              <div style={{
                width: '3rem',
                height: '0.15rem',
                backgroundColor: '#10b981',
                margin: '0 auto'
              }}></div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                { label: 'FULL NAME *', name: 'name', type: 'text' },
                { label: 'USERNAME *', name: 'username', type: 'text' },
                { label: 'EMAIL *', name: 'email', type: 'email' },
                { label: 'PHONE NUMBER *', name: 'phoneNo', type: 'tel' },
                { label: 'DATE OF BIRTH *', name: 'dateOfBirth', type: 'date' },
                { label: 'ADDRESS *', name: 'address', type: 'text' }
              ].map((field) => (
                <div key={field.name} style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    color: '#d1d5db',
                    marginBottom: '0.5rem'
                  }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #047857',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Banking Information */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#10b981',
                marginBottom: '0.5rem'
              }}>
                BANKING INFORMATION
              </h2>
              <div style={{
                width: '3rem',
                height: '0.15rem',
                backgroundColor: '#10b981',
                margin: '0 auto'
              }}></div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  color: '#d1d5db',
                  marginBottom: '0.5rem'
                }}>
                  CARD TYPE *
                </label>
                <select
                  name="cardType"
                  value={formData.cardType}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #047857',
                    borderRadius: '0.5rem',
                    color: formData.cardType ? 'white' : '#6b7280',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="" style={{ color: '#6b7280' }}>Select card type</option>
                  <option value="Gold" style={{ color: 'white' }}>Gold</option>
                  <option value="Titanium" style={{ color: 'white' }}>Titanium</option>
                </select>
              </div>

              {[
                { label: 'BANK NAME *', name: 'bankName', type: 'text' },
                { label: 'ACCOUNT NUMBER *', name: 'accountNumber', type: 'text' },
                { label: 'IFSC CODE *', name: 'ifscCode', type: 'text' }
              ].map((field) => (
                <div key={field.name} style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    color: '#d1d5db',
                    marginBottom: '0.5rem'
                  }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #047857',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Security Section */}
          <div>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                color: '#10b981',
                marginBottom: '0.5rem'
              }}>
                SECURITY
              </h2>
              <div style={{
                width: '3rem',
                height: '0.15rem',
                backgroundColor: '#10b981',
                margin: '0 auto'
              }}></div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              {[
                { label: 'PASSWORD *', name: 'password', type: 'password' },
                { label: 'CONFIRM PASSWORD *', name: 'confirmPassword', type: 'password' }
              ].map((field) => (
                <div key={field.name} style={{ marginBottom: '1rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    color: '#d1d5db',
                    marginBottom: '0.5rem'
                  }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: '#0a0a0a',
                      border: '1px solid #047857',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '0.9rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Terms and Conditions */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem', 
              padding: '1rem',
              backgroundColor: '#064e3b20',
              borderRadius: '0.5rem',
              border: '1px solid #047857'
            }}>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                style={{
                  width: '1.1rem',
                  height: '1.1rem',
                  backgroundColor: formData.agreeTerms ? '#10b981' : '#0a0a0a',
                  border: '1px solid #047857',
                  borderRadius: '0.25rem',
                  cursor: 'pointer'
                }}
              />
              <label style={{ 
                color: '#d1d5db', 
                fontSize: '0.85rem',
                fontWeight: '500'
              }}>
                I agree to the terms and conditions *
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              type="submit"
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                fontWeight: '600',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '300px'
              }}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>

        <div style={{
          textAlign: 'center',
          marginTop: '2.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #047857'
        }}>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            Already have an account?{' '}
            <button
              onClick={() => navigate('/userauth')}
              style={{
                color: '#10b981',
                fontWeight: '600',
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
