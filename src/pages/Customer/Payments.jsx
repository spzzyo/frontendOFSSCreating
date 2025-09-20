import React, { useState, useEffect } from 'react';
import { FaCreditCard, FaCheckCircle, FaExclamationTriangle, FaHistory, FaBell } from 'react-icons/fa';

const subtleGreen = "#A8C5A5";
const darkGreen = "#2C5F2D";

const bankAccounts = [
  { id: 1, name: 'State Bank of India - 1234', balance: 10000 },
  { id: 2, name: 'HDFC Bank - 5678', balance: 25000 },
  { id: 3, name: 'ICICI Bank - 9012', balance: 5000 },
];

const PaymentsAutoPay = () => {
  const [selectedAccount, setSelectedAccount] = useState(bankAccounts[0].id);
  const [autoPayAccount, setAutoPayAccount] = useState(null);
  const [autoPayEnabled, setAutoPayEnabled] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [recentPayments, setRecentPayments] = useState([]);
  const [undoTimer, setUndoTimer] = useState(null);
  const [showUndo, setShowUndo] = useState(false);
  const [notifications, setNotifications] = useState({
    sms: true,
    email: true,
    push: false,
  });

  const selectedBank = bankAccounts.find(acc => acc.id === selectedAccount);

  // Handle real-time suggestion
  const suggestedAmount = Math.min(5000, selectedBank.balance);

  const handlePayment = () => {
    if (!paymentAmount || isNaN(paymentAmount) || Number(paymentAmount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    if (Number(paymentAmount) > selectedBank.balance) {
      alert('Insufficient balance!');
      return;
    }
    const newPayment = {
      amount: Number(paymentAmount),
      date: new Date().toLocaleDateString(),
      account: selectedBank.name
    };
    setRecentPayments([newPayment, ...recentPayments]);
    setPaymentSuccess(true);
    setTimeout(() => setPaymentSuccess(false), 3000);
    setPaymentAmount('');
  };

  const handleEnableAutoPay = () => {
    setShowConfirm(true);
  };

  const confirmAutoPay = () => {
    setAutoPayAccount(selectedAccount);
    setAutoPayEnabled(true);
    setShowConfirm(false);
    setShowUndo(true);
    const timer = setTimeout(() => {
      setShowUndo(false);
    }, 5000);
    setUndoTimer(timer);
  };

  const cancelAutoPay = () => {
    setShowConfirm(false);
  };

  const undoAutoPay = () => {
    setAutoPayEnabled(false);
    setAutoPayAccount(null);
    setShowUndo(false);
    clearTimeout(undoTimer);
  };

  const toggleNotification = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  useEffect(() => {
    return () => clearTimeout(undoTimer); // Cleanup timer on unmount
  }, [undoTimer]);

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'normal' }}>Payments & Auto-Pay</h1>

      {/* Current Payment Status */}
      <div style={{
        backgroundColor: '#1A1A1A',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaCreditCard size={24} color={subtleGreen} />
          <h3 style={{ marginLeft: '10px', fontWeight: '500' }}>Current Payment Status</h3>
        </div>
        <p style={{ margin: '6px 0' }}>
          Auto-Pay: {autoPayEnabled ? <span style={{ color: subtleGreen }}>Enabled</span> : <span style={{ color: '#FF6347' }}>Disabled</span>}
        </p>
        {autoPayEnabled && (
          <p style={{ margin: '6px 0', fontSize: '14px' }}>
            Bank: {bankAccounts.find(acc => acc.id === autoPayAccount)?.name}
          </p>
        )}
      </div>

      {/* One-time Payment Section */}
      <div style={{
        backgroundColor: '#1A1A1A',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ marginBottom: '10px', fontWeight: '500' }}>Make a Payment</h3>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontSize: '14px', opacity: 0.8 }}>Select Bank Account</label><br />
          <select
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '6px',
              border: `1px solid ${subtleGreen}`,
              background: '#000000',
              color: '#FFFFFF',
              fontSize: '14px',
              marginTop: '4px'
            }}
          >
            {bankAccounts.map(account => (
              <option key={account.id} value={account.id}>{account.name}</option>
            ))}
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontSize: '14px', opacity: 0.8 }}>Amount (Rs.)</label><br />
          <input
            type="number"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
            placeholder={`Suggested: ₹${suggestedAmount}`}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '6px',
              border: `1px solid ${subtleGreen}`,
              background: '#000000',
              color: '#FFFFFF',
              fontSize: '14px',
              marginTop: '4px'
            }}
          />
        </div>
        <button
          onClick={handlePayment}
          style={{
            padding: '10px 20px',
            backgroundColor: subtleGreen,
            border: 'none',
            borderRadius: '6px',
            color: '#000',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Pay Now
        </button>
        {paymentSuccess && (
          <p style={{ color: subtleGreen, marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <FaCheckCircle style={{ marginRight: '6px' }} /> Payment successful!
          </p>
        )}
      </div>

      {/* Auto-Pay Section */}
      <div style={{
        backgroundColor: '#1A1A1A',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        marginBottom: '20px'
      }}>
        <h3 style={{ marginBottom: '10px', fontWeight: '500' }}>Enable Auto-Pay</h3>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontSize: '14px', opacity: 0.8 }}>Select Bank Account</label><br />
          <select
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(Number(e.target.value))}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '6px',
              border: `1px solid ${subtleGreen}`,
              background: '#000000',
              color: '#FFFFFF',
              fontSize: '14px',
              marginTop: '4px'
            }}
          >
            {bankAccounts.map(account => (
              <option key={account.id} value={account.id}>{account.name}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleEnableAutoPay}
          style={{
            padding: '10px 20px',
            backgroundColor: subtleGreen,
            border: 'none',
            borderRadius: '6px',
            color: '#000',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
          disabled={autoPayEnabled}
          title={autoPayEnabled ? "Auto-Pay is already enabled" : "Enable Auto-Pay"}
        >
          {autoPayEnabled ? "Auto-Pay Enabled" : "Enable Auto-Pay"}
        </button>
        {showConfirm && (
          <div style={{
            marginTop: '10px',
            backgroundColor: '#333',
            padding: '10px',
            borderRadius: '6px'
          }}>
            <p>Are you sure you want to enable Auto-Pay for {selectedBank.name}?</p>
            <button onClick={confirmAutoPay} style={{
              padding: '6px 12px',
              backgroundColor: subtleGreen,
              border: 'none',
              borderRadius: '4px',
              marginRight: '10px',
              cursor: 'pointer'
            }}>Confirm</button>
            <button onClick={cancelAutoPay} style={{
              padding: '6px 12px',
              backgroundColor: '#FF6347',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>Cancel</button>
          </div>
        )}
        {showUndo && (
          <p style={{ color: subtleGreen, marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <FaCheckCircle style={{ marginRight: '6px' }} /> Auto-Pay enabled! <button onClick={undoAutoPay} style={{
              marginLeft: '10px',
              background: 'none',
              border: '1px solid #fff',
              borderRadius: '4px',
              padding: '4px 8px',
              color: '#fff',
              cursor: 'pointer'
            }}>Undo</button>
          </p>
        )}
      </div>

      {/* Notifications Section */}
      <div style={{
        backgroundColor: '#1A1A1A',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        marginBottom: '20px'
      }}>
        <h3 style={{ marginBottom: '10px', fontWeight: '500' }}>Notification Preferences</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['sms', 'email', 'push'].map(type => (
            <div key={type} style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={notifications[type]}
                onChange={() => toggleNotification(type)}
                id={type}
                style={{ marginRight: '8px' }}
              />
              <label htmlFor={type} style={{ fontSize: '14px', opacity: 0.8 }}>
                {type.toUpperCase()} Notifications
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Payments Section */}
      <div style={{
        backgroundColor: '#1A1A1A',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ marginBottom: '10px', fontWeight: '500' }}><FaHistory style={{ marginRight: '6px' }} /> Recent Payments</h3>
        {recentPayments.length === 0 ? (
          <p style={{ fontSize: '14px', opacity: 0.8 }}>No payments made yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
            {recentPayments.map((payment, index) => (
              <li key={index} style={{ marginBottom: '8px', fontSize: '14px' }}>
                <span style={{ color: subtleGreen }}>₹{payment.amount}</span> – {payment.date} – {payment.account}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PaymentsAutoPay;
