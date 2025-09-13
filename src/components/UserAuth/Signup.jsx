import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // NEW: file state
  const [selectedFile, setSelectedFile] = useState(null);
  const onFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

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
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log('[handleSubmit] fired');

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    console.log('[handleSubmit] blocked: passwords mismatch');
    return;
  }
  if (!selectedFile) {
    alert("Please upload a document");
    console.log('[handleSubmit] blocked: no file');
    return;
  }
  if (!formData.agreeTerms) {
    alert("Please agree to the terms");
    console.log('[handleSubmit] blocked: terms unchecked');
    return;
  }

  console.log('[handleSubmit] success, navigating to joiningfee');

  navigate('/joiningfee');
};



  const canNextFrom1 = useMemo(() => {
    const { name, username, email, phoneNo, dateOfBirth, address } = formData;
    return !!(name && username && email && phoneNo && dateOfBirth && address);
  }, [formData]);

  const canNextFrom2 = useMemo(() => {
    const { cardType, bankName, accountNumber, ifscCode } = formData;
    return !!(cardType && bankName && accountNumber && ifscCode);
  }, [formData]);

  const canSubmit = useMemo(() => {
    return (
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword &&
      formData.agreeTerms &&
      !!selectedFile
    );
  }, [formData, selectedFile]);

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#d1d5db',
    marginBottom: '0.5rem',
  };
  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#0a0a0a',
    border: '1px solid #047857',
    borderRadius: '0.5rem',
    color: 'white',
    fontSize: '0.9rem',
    boxSizing: 'border-box',
  };
  const sectionHeader = (title) => (
    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
      <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#10b981', marginBottom: '0.5rem' }}>
        {title}
      </h2>
      <div style={{ width: '3rem', height: '0.15rem', backgroundColor: '#10b981', margin: '0 auto' }} />
    </div>
  );
  const StepIndicator = () => (
    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          style={{
            height: '8px',
            width: '48px',
            borderRadius: '999px',
            backgroundColor: step >= s ? '#10b981' : '#064e3b',
            border: '1px solid #047857',
          }}
        />
      ))}
    </div>
  );

  return (
    
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: '#0a0a0a',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: '#0a0a0a',
          border: '2px solid #047857',
          borderRadius: '1rem',
          padding: '2rem',
          width: '100%',
          maxWidth: '50rem',
          margin: '0 1rem',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>
            Create Your Account
          </h1>
          <p style={{ color: '#d1d5db', fontSize: '1rem' }}>Join us to manage your finances efficiently</p>
        </div>

        <StepIndicator />

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* STEP 1: PERSONAL */}
          {step === 1 && (
            <div>
              {sectionHeader('PERSONAL INFORMATION')}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {[
                  { label: 'FULL NAME *', name: 'name', type: 'text' },
                  { label: 'USERNAME *', name: 'username', type: 'text' },
                  { label: 'EMAIL *', name: 'email', type: 'email' },
                  { label: 'PHONE NUMBER *', name: 'phoneNo', type: 'tel' },
                  { label: 'DATE OF BIRTH *', name: 'dateOfBirth', type: 'date' },
                  { label: 'ADDRESS *', name: 'address', type: 'text' },
                ].map((field) => (
                  <div key={field.name} style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: BANKING */}
          {step === 2 && (
            <div>
              {sectionHeader('BANKING INFORMATION')}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>CARD TYPE *</label>
                  <select
                    name="cardType"
                    value={formData.cardType}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, color: formData.cardType ? 'white' : '#6b7280' }}
                  >
                    <option value="" style={{ color: '#6b7280' }}>
                      Select card type
                    </option>
                    <option value="Gold" style={{ color: 'white' }}>
                      Gold
                    </option>
                    <option value="Titanium" style={{ color: 'white' }}>
                      Titanium
                    </option>
                  </select>
                </div>
                {[
                  { label: 'BANK NAME *', name: 'bankName', type: 'text' },
                  { label: 'ACCOUNT NUMBER *', name: 'accountNumber', type: 'text' },
                  { label: 'IFSC CODE *', name: 'ifscCode', type: 'text' },
                ].map((field) => (
                  <div key={field.name} style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              {sectionHeader('SECURITY')}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                {[
                  { label: 'PASSWORD *', name: 'password', type: 'password' },
                  { label: 'CONFIRM PASSWORD *', name: 'confirmPassword', type: 'password' },
                ].map((field) => (
                  <div key={field.name} style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>

              

              {formData.password &&
                formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p style={{ color: '#fca5a5', marginTop: '0.75rem' }}>Passwords do not match.</p>
                )}

              <div style={{ marginTop: '2rem' }}>
                {sectionHeader('DOCUMENT UPLOAD')}
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <div>
                    <label style={labelStyle}>Upload ID/Address proof (PDF/PNG/JPG/WEBP) *</label>
                    <input
                      type="file"
                      accept=".pdf,image/png,image/jpeg,image/jpg,image/webp"
                      onChange={onFileChange}
                      style={inputStyle}
                      required
                    />
                  </div>

                  
                <div
                style={{
                    border: '1px solid #047857',
                    borderRadius: '0.5rem',
                    padding: '0.5rem 0.75rem',
                    background: '#0a0a0a',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                }}
                >
                
                <div
                    style={{
                    height: 28,
                    width: 28,
                    borderRadius: 6,
                    border: '1px solid #047857',
                    display: 'grid',
                    placeItems: 'center',
                    color: '#10b981',
                    fontSize: 10,
                    background: '#062e25',
                    flexShrink: 0,
                    }}
                >
                    {selectedFile ? (selectedFile.type === 'application/pdf' ? 'PDF' : 'DOC') : '—'}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                    <div
                    style={{
                        color: selectedFile ? '#d1d5db' : '#9ca3af',
                        fontSize: '0.85rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                    title={selectedFile ? selectedFile.name : 'No file chosen'}
                    >
                    {selectedFile ? selectedFile.name : 'Choose a file to upload.'}
                    </div>

                    {selectedFile && (
                    <div style={{ display: 'flex', gap: '0.4rem', marginLeft: 'auto' }}>
                        <span
                        style={{
                            fontSize: '0.72rem',
                            color: '#9ce5c9',
                            background: '#062e25',
                            border: '1px solid #047857',
                            borderRadius: '999px',
                            padding: '0.1rem 0.45rem',
                            lineHeight: 1.2,
                        }}
                        >
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                        <span
                        style={{
                            fontSize: '0.72rem',
                            color: '#9ce5c9',
                            background: '#062e25',
                            border: '1px solid #047857',
                            borderRadius: '999px',
                            padding: '0.1rem 0.45rem',
                            lineHeight: 1.2,
                            textTransform: 'uppercase',
                        }}
                        >
                        {selectedFile.type?.split('/').pop() || 'FILE'}
                        </span>
                    </div>
                    )}
                </div>
                </div>

                  <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: '#064e3b20',
                  borderRadius: '0.5rem',
                  border: '1px solid #047857',
                  marginBottom: '1rem',
                }}
              >
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
                    cursor: 'pointer',
                  }}
                />
                <label style={{ color: '#d1d5db', fontSize: '0.85rem', fontWeight: '500' }}>
                  I agree to the terms and conditions *
                </label>
              </div>
                </div>
              </div>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: 'space-between',
              marginTop: '0.5rem',
            }}
          >
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              style={{
                backgroundColor: step === 1 ? '#064e3b' : '#0a0a0a',
                color: '#d1d5db',
                padding: '0.85rem 1.25rem',
                borderRadius: '0.5rem',
                border: '1px solid #047857',
                cursor: step === 1 ? 'not-allowed' : 'pointer',
                minWidth: '120px',
              }}
            >
              Back
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                disabled={(step === 1 && !canNextFrom1) || (step === 2 && !canNextFrom2)}
                style={{
                  backgroundColor:
                    (step === 1 && !canNextFrom1) || (step === 2 && !canNextFrom2) ? '#064e3b' : '#10b981',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor:
                    (step === 1 && !canNextFrom1) || (step === 2 && !canNextFrom2) ? 'not-allowed' : 'pointer',
                  minWidth: '120px',
                }}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canSubmit}
                style={{
                  backgroundColor: !canSubmit ? '#064e3b' : '#10b981',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: !canSubmit ? 'not-allowed' : 'pointer',
                  minWidth: '160px',
                }}
              >
                CREATE ACCOUNT
              </button>
              
            )}
            
          </div>
        </form>

        <div
          style={{
            textAlign: 'center',
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid #047857',
          }}
        >
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            Already have an account?{' '}
            <button
              onClick={() => navigate("/login")}
              style={{
                color: '#10b981',
                fontWeight: '600',
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.9rem',
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