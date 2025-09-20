import React from 'react';
import MySidebar from '../components/Common_components/Sidebar';
import { Outlet } from 'react-router-dom';

const CustomerLayout = () => (
  <div
    style={{
      display: 'flex',
      minHeight: '100dvh',
      background: '#000000',
    }}
  >
    <MySidebar />
    <main
      style={{
        flex: 1,
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '56rem',
          padding: '0.5rem',
          backgroundColor: '#1a1a1a',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          minHeight: '70vh',
        }}
      >
        <Outlet />
      </div>
    </main>
  </div>
);

export default CustomerLayout;