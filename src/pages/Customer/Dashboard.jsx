import React from 'react';
import { FaCreditCard, FaChartLine, FaGift, FaClock, FaWallet } from 'react-icons/fa';
import cardImage from '../../assets/billing-background-card.png'; // Adjust the path as needed

const subtleGreen = "#A8C5A5"; // subtle green for accents
const darkGreen = "#2C5F2D";   // darker shade of green for overlay or text

// Sample data
const currentCard = {
  type: 'gold', // or 'titanium'
  name: 'Platinum Gold Card',
  limit: 50000,
  used: 32000,
  available: 18000,
};

const spendingSummary = {
  thisMonth: 15000,
  lastMonth: 12000,
};

const offers = [
  { title: '10% Cashback on Groceries', expires: '2025-09-30' },
  { title: 'Balance Transfer Offer', expires: '2025-10-15' },
];

const Dashboard = () => {

  // Determine overlay color based on card type
  const getCardOverlay = (type) => {
    switch (type) {
      case 'gold':
        return 'rgba(40, 95, 40, 0.6)'; // dark green overlay
      case 'titanium':
        return 'rgba(34, 77, 34, 0.6)';
      default:
        return 'rgba(0, 0, 0, 0.6)';
    }
  };

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
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'normal' }}>Dashboard</h1>

      {/* Current Credit Card with background image */}
      <div style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        height: '200px',
        backgroundImage: `url(${cardImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {/* Overlay for readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: getCardOverlay(currentCard.type),
        }} />

        {/* Card Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          padding: '20px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 style={{ margin: 0 }}>{currentCard.name}</h2>
              <p style={{ margin: '4px 0', opacity: 0.8 }}>Credit Limit: Rs.{currentCard.limit.toLocaleString()}</p>
            </div>
            <FaCreditCard size={40} />
          </div>

          <div>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>Used Credit</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Rs.{currentCard.used.toLocaleString()}</div>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>Available Credit</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Rs.{currentCard.available.toLocaleString()}</div>
            </div>
            <div style={{ height: '8px', background: '#555', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{
                width: `${(currentCard.used / currentCard.limit) * 100}%`,
                background: subtleGreen,
                height: '100%'
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Other Cards in Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {/* Spending Insights */}
        <div style={{
          backgroundColor: '#1A1A1A',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FaChartLine size={24} color={subtleGreen} />
            <h3 style={{ marginLeft: '10px', fontWeight: '500' }}>Spending Insights</h3>
          </div>
          <div>
            <p style={{ margin: '6px 0' }}>This Month: <strong>Rs.{spendingSummary.thisMonth.toLocaleString()}</strong></p>
            <p style={{ margin: '6px 0' }}>Last Month: <strong>Rs.{spendingSummary.lastMonth.toLocaleString()}</strong></p>
          </div>
        </div>

        {/* Offers */}
        <div style={{
          backgroundColor: '#1A1A1A',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FaGift size={24} color={subtleGreen} />
            <h3 style={{ marginLeft: '10px', fontWeight: '500' }}>Offers</h3>
          </div>
          <div>
            {offers.map((offer, index) => (
              <p key={index} style={{ margin: '6px 0', fontSize: '14px' }}>
                {offer.title} <br />
                <span style={{ fontSize: '12px', opacity: 0.7 }}>Expires: {new Date(offer.expires).toLocaleDateString()}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Upcoming Payments */}
        <div style={{
          backgroundColor: '#1A1A1A',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FaClock size={24} color={subtleGreen} />
            <h3 style={{ marginLeft: '10px', fontWeight: '500' }}>Upcoming Payments</h3>
          </div>
          <p style={{ margin: '6px 0' }}>Next payment due in 5 days</p>
        </div>

        {/* Wallet Summary */}
        <div style={{
          backgroundColor: '#1A1A1A',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <FaWallet size={24} color={subtleGreen} />
            <h3 style={{ marginLeft: '10px', fontWeight: '500' }}>Wallet</h3>
          </div>
          <p style={{ margin: '6px 0' }}>Balance: <strong>Rs. 25,000</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
