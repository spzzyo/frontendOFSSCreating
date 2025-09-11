import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown, FaExclamationCircle, FaHandHoldingUsd, FaUndoAlt, FaBalanceScale } from 'react-icons/fa';

const transactions = [
  {
    category: 'Newest',
    items: [
      {
        name: 'Monthly EMI - September',
        date: '2025-09-10T08:00:00',
        amount: -1500,
        type: 'emi',
      },
      {
        name: 'Refund - Overpayment',
        date: '2025-09-09T14:30:00',
        amount: 300,
        type: 'refund',
      },
      {
        name: 'Penalty - Late Fee',
        date: '2025-09-08T10:15:00',
        amount: -50,
        type: 'penalty',
      },
    ],
  },
  {
    category: 'Older',
    items: [
      {
        name: 'Monthly EMI - August',
        date: '2025-08-10T08:00:00',
        amount: -1500,
        type: 'emi',
      },
      {
        name: 'Adjustment - Account Correction',
        date: '2025-08-15T11:00:00',
        amount: 100,
        type: 'adjustment',
      },
    ],
  },
];

const typeLabels = {
  positive: 'Credit',
  negative: 'Debit',
  pending: 'Pending',
  emi: 'EMI',
  penalty: 'Penalty',
  adjustment: 'Adjustment',
  refund: 'Refund',
};

const subtleGreen = "#A8C5A5"; // Subtle green tint for borders and accents

const Transactions = () => {
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const allItems = transactions.flatMap(section => section.items);

  const filteredItems = allItems.filter(item =>
    filterType === 'all' ? true : item.type === filterType
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'date') {
      return sortOrder === 'asc'
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'amount') {
      return sortOrder === 'asc' ? a.amount - b.amount : b.amount - a.amount;
    }
    return 0;
  });

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const renderIcon = (type) => {
    switch (type) {
      case 'positive':
        return <FaArrowUp color={subtleGreen} />;
      case 'negative':
        return <FaArrowDown color={subtleGreen} />;
      case 'pending':
        return <FaExclamationCircle color={subtleGreen} />;
      case 'emi':
        return <FaHandHoldingUsd color={subtleGreen} />;
      case 'penalty':
        return <FaExclamationCircle color={subtleGreen} />;
      case 'adjustment':
        return <FaBalanceScale color={subtleGreen} />;
      case 'refund':
        return <FaUndoAlt color={subtleGreen} />;
      default:
        return <FaExclamationCircle color={subtleGreen} />;
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
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'normal' }}>Your Transactions</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
          style={{
            padding: '8px 12px',
            borderRadius: '6px',
            border: `1px solid ${subtleGreen}`,
            background: '#000000',
            color: '#FFFFFF',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          <option value="all">All</option>
          <option value="emi">EMI</option>
          <option value="penalty">Penalty</option>
          <option value="adjustment">Adjustment</option>
          <option value="refund">Refund</option>
          <option value="positive">Credit</option>
          <option value="negative">Debit</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${subtleGreen}` }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', cursor: 'pointer' }} onClick={() => toggleSort('name')}>
                Name
              </th>
              <th style={{ textAlign: 'left', padding: '12px 8px', cursor: 'pointer' }} onClick={() => toggleSort('date')}>
                Date {sortBy === 'date' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
              <th style={{ textAlign: 'right', padding: '12px 8px', cursor: 'pointer' }} onClick={() => toggleSort('amount')}>
                Amount {sortBy === 'amount' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: `1px solid ${subtleGreen}`,
                  backgroundColor: '#000000'
                }}
              >
                <td style={{ display: 'flex', alignItems: 'center', padding: '10px 8px' }}>
                  <div style={{ width: 30, textAlign: 'center' }}>{renderIcon(item.type)}</div>
                  <div style={{ marginLeft: '10px' }}>
                    <div style={{ fontWeight: '500', fontSize: '14px' }}>{item.name}</div>
                    <div style={{ fontSize: '12px', opacity: 0.7 }}>{typeLabels[item.type] || 'Other'}</div>
                  </div>
                </td>
                <td style={{ padding: '10px 8px', fontSize: '14px' }}>
                  {new Date(item.date).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
                </td>
                <td style={{
                  textAlign: 'right',
                  padding: '10px 8px',
                  fontWeight: '500',
                  fontSize: '14px',
                  color: subtleGreen
                }}>
                  {item.type === 'pending' ? 'Pending' : `Rs.${Math.abs(item.amount).toLocaleString()}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
