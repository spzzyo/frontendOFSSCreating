import React from 'react';
import { Outlet } from 'react-router-dom';
import MySidebar from '../components/Common_components/Sidebar';

const CustomerLayout = () => (
  <div style={{ display: 'flex', height: '100vh', background: "#000000" }}>
    {/* Sidebar only takes the width it needs */}
    <div style={{ flex: '0 0 auto' }}>
      <MySidebar />
    </div>
    {/* Main content fills remaining space, with padding */}
    <main style={{
      flex: 1,
      padding: '32px', // You can adjust padding as needed
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      boxSizing: 'border-box',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '900px',
        padding: '5px',
        backgroundColor: '#1a1a1a',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
      }}>
        <Outlet />
      </div>
    </main>
  </div>
);

export default CustomerLayout;