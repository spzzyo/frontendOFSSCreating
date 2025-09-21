import { useState } from 'react';

const SavingsCalculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    category: '',
    cardType: '',
    purchaseValue: '',
    paymentType: '',
    tenure: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCalculatorData({
      ...calculatorData,
      [name]: value
    });
  };

  const calculateSavings = () => {
    const amount = parseFloat(calculatorData.purchaseValue);
    if (!amount || amount <= 0) {
      alert('Please enter a valid purchase amount');
      return;
    }

    let interestRate = 0;
    let processingFee = 0;
    let tenureMonths = parseInt(calculatorData.tenure) || 3;
    let savings = 0;

    switch (calculatorData.cardType) {
      case 'Gold':
        interestRate = 0.014;
        processingFee = amount * 0.02;
        savings = amount * 0.15;
        break;
      case 'Titanium':
        interestRate = 0.012;
        processingFee = amount * 0.015;
        savings = amount * 0.18;
        break;
      default:
        interestRate = 0.016;
        processingFee = amount * 0.025;
        savings = amount * 0.12;
    }

    const monthlyInterest = amount * interestRate;
    const totalInterest = monthlyInterest * tenureMonths;
    const totalPayable = amount + totalInterest + processingFee;
    const monthlyEMI = totalPayable / tenureMonths;
    const netSavings = savings - totalInterest - processingFee;

    setResult({
      principal: amount,
      totalInterest,
      processingFee,
      totalPayable,
      monthlyEMI,
      tenureMonths,
      savings: savings,
      netSavings: netSavings > 0 ? netSavings : 0
    });
  };

  const resetCalculator = () => {
    setCalculatorData({
      category: '',
      cardType: '',
      purchaseValue: '',
      paymentType: '',
      tenure: ''
    });
    setResult(null);
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
        maxWidth: '450px',
        margin: '0 auto'
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: '#10b981',
            marginBottom: '0.5rem',
            lineHeight: '1.2'
          }}>
            Savings Calculator
          </h1>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '0.95rem',
            lineHeight: '1.4'
          }}>
            Calculate your EMI savings with our card benefits
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Category Selection */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#d1d5db',
              marginBottom: '0.5rem'
            }}>
              Choice Your Category
            </label>
            <select
              name="category"
              value={calculatorData.category}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#0a0a0a',
                border: '1px solid #047857',
                borderRadius: '0.5rem',
                color: calculatorData.category ? 'white' : '#6b7280',
                fontSize: '0.9rem',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1rem',
                paddingRight: '2.5rem'
              }}
            >
              <option value="">Select Option</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home Appliances</option>
              <option value="travel">Travel</option>
              <option value="shopping">Shopping</option>
            </select>
          </div>

          {/* Card Type Selection */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#d1d5db',
              marginBottom: '0.5rem'
            }}>
              Select Your Card Type
            </label>
            <select
              name="cardType"
              value={calculatorData.cardType}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#0a0a0a',
                border: '1px solid #047857',
                borderRadius: '0.5rem',
                color: calculatorData.cardType ? 'white' : '#6b7280',
                fontSize: '0.9rem',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1rem',
                paddingRight: '2.5rem'
              }}
            >
              <option value="">Select Option</option>
              <option value="Gold">Gold Card</option>
              <option value="Titanium">Titanium Card</option>
            </select>
          </div>

          {/* Purchase Value - FIXED ALIGNMENT */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#d1d5db',
              marginBottom: '0.5rem'
            }}>
              Enter Your Purchase Value
            </label>
            <div style={{ 
              position: 'relative',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                position: 'absolute',
                left: '0.75rem',
                color: '#6b7280',
                fontSize: '0.9rem',
                zIndex: 1,
                pointerEvents: 'none'
              }}>
                ₹
              </span>
              <input
                type="number"
                name="purchaseValue"
                value={calculatorData.purchaseValue}
                onChange={handleChange}
                placeholder="Amount in Rs."
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2rem',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #047857',
                  borderRadius: '0.5rem',
                  color: 'white',
                  fontSize: '0.9rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Payment Type */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: '#d1d5db',
              marginBottom: '0.5rem'
            }}>
              Select Payment Type
            </label>
            <select
              name="paymentType"
              value={calculatorData.paymentType}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#0a0a0a',
                border: '1px solid #047857',
                borderRadius: '0.5rem',
                color: calculatorData.paymentType ? 'white' : '#6b7280',
                fontSize: '0.9rem',
                appearance: 'none',
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1rem',
                paddingRight: '2.5rem'
              }}
            >
              <option value="">Select Option</option>
              <option value="emi">EMI</option>
              <option value="full">Full Payment</option>
            </select>
          </div>

          {/* Tenure Selection (if EMI) */}
          {calculatorData.paymentType === 'emi' && (
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: '#d1d5db',
                marginBottom: '0.5rem'
              }}>
                Select Tenure Period
              </label>
              <select
                name="tenure"
                value={calculatorData.tenure}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #047857',
                  borderRadius: '0.5rem',
                  color: calculatorData.tenure ? 'white' : '#6b7280',
                  fontSize: '0.9rem',
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1rem',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="">Select Tenure</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="9">9 Months</option>
                <option value="12">12 Months</option>
              </select>
            </div>
          )}

          {/* Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            marginTop: '1rem',
            borderTop: '1px solid #047857',
            paddingTop: '1.5rem'
          }}>
            <button
              onClick={calculateSavings}
              style={{
                flex: 1,
                backgroundColor: '#10b981',
                color: 'white',
                fontWeight: '600',
                padding: '0.875rem',
                borderRadius: '0.5rem',
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
            >
              CALCULATE
            </button>
            <button
              onClick={resetCalculator}
              style={{
                flex: 1,
                backgroundColor: '#374151',
                color: 'white',
                fontWeight: '600',
                padding: '0.875rem',
                borderRadius: '0.5rem',
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#4b5563'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
            >
              RESET
            </button>
          </div>

          {/* Results */}
          {result && (
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: '#064e3b20',
              border: '1px solid #047857',
              borderRadius: '0.5rem'
            }}>
              <h3 style={{
                color: '#10b981',
                marginBottom: '1rem',
                textAlign: 'center',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                Calculation Results
              </h3>
              
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#d1d5db', fontSize: '0.85rem' }}>Principal Amount:</span>
                  <span style={{ color: '#10b981', fontWeight: '600', fontSize: '0.85rem' }}>₹{result.principal.toLocaleString('en-IN')}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#d1d5db', fontSize: '0.85rem' }}>Total Interest:</span>
                  <span style={{ color: '#ef4444', fontWeight: '600', fontSize: '0.85rem' }}>₹{result.totalInterest.toLocaleString('en-IN', {maximumFractionDigits: 2})}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#d1d5db', fontSize: '0.85rem' }}>Processing Fee:</span>
                  <span style={{ color: '#ef4444', fontWeight: '600', fontSize: '0.85rem' }}>₹{result.processingFee.toLocaleString('en-IN', {maximumFractionDigits: 2})}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#d1d5db', fontSize: '0.85rem' }}>Monthly EMI:</span>
                  <span style={{ color: '#f59e0b', fontWeight: '600', fontSize: '0.85rem' }}>₹{result.monthlyEMI.toLocaleString('en-IN', {maximumFractionDigits: 2})}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#d1d5db', fontSize: '0.85rem' }}>Total Payable:</span>
                  <span style={{ color: '#10b981', fontWeight: '600', fontSize: '0.85rem' }}>₹{result.totalPayable.toLocaleString('en-IN', {maximumFractionDigits: 2})}</span>
                </div>

                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  borderTop: '1px solid #047857', 
                  paddingTop: '0.75rem', 
                  marginTop: '0.75rem' 
                }}>
                  <span style={{ color: '#d1d5db', fontWeight: '600', fontSize: '0.9rem' }}>Total Savings:</span>
                  <span style={{ 
                    color: result.netSavings > 0 ? '#10b981' : '#ef4444', 
                    fontWeight: 'bold', 
                    fontSize: '0.95rem' 
                  }}>
                    ₹{result.netSavings.toLocaleString('en-IN', {maximumFractionDigits: 2})}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;