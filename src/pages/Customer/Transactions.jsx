import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown, FaExclamationCircle, FaHandHoldingUsd, FaUndoAlt, FaBalanceScale, FaFileInvoice, FaTimes } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const subtleGreen = "#A8C5A5";

const typeLabels = {
  emi: "EMI Payment",
  refund: "Refund",
  penalty: "Penalty",
  adjustment: "Adjustment",
  positive: "Credit",
  negative: "Debit",
  pending: "Pending",
};

const transactions =  [ { category: 'Newest', items: [ { name: 'Monthly EMI - September', date: '2025-09-10T08:00:00', amount: -1500, type: 'emi', }, { name: 'Refund - Overpayment', date: '2025-09-09T14:30:00', amount: 300, type: 'refund', }, { name: 'Penalty - Late Fee', date: '2025-09-08T10:15:00', amount: -50, type: 'penalty', }, ], }, { category: 'Older', items: [ { name: 'Monthly EMI - August', date: '2025-08-10T08:00:00', amount: -1500, type: 'emi', }, { name: 'Adjustment - Account Correction', date: '2025-08-15T11:00:00', amount: 100, type: 'adjustment', }, ], }, ];

// Transactions component
const Transactions = () => {
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [invoiceUrl, setInvoiceUrl] = useState(null);

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

  const generateInvoice = (item) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Invoice', 14, 22);

    doc.setFontSize(12);
    doc.text(`Transaction: ${item.name}`, 14, 40);
    doc.text(`Type: ${typeLabels[item.type] || 'Other'}`, 14, 50);
    doc.text(`Date: ${new Date(item.date).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}`, 14, 60);
    doc.text(`Amount: Rs.${Math.abs(item.amount).toLocaleString()}`, 14, 70);

    // Create PDF blob and URL
    const blob = doc.output('blob');
    const url = URL.createObjectURL(blob);
    setInvoiceUrl(url);
  };

  const closeModal = () => {
    if (invoiceUrl) {
      URL.revokeObjectURL(invoiceUrl);
    }
    setInvoiceUrl(null);
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
              <th style={{ padding: '12px 8px' }}>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>No transactions found</td>
              </tr>
            ) : (
              sortedItems.map((item, index) => (
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
                  <td style={{ textAlign: 'center', padding: '10px 8px' }}>
                    <button
                      onClick={() => generateInvoice(item)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: subtleGreen,
                        cursor: 'pointer'
                      }}
                      title="Generate Invoice"
                    >
                      <FaFileInvoice />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Viewer */}
      {invoiceUrl && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            position: 'relative',
            width: '80%',
            maxWidth: '800px',
            height: '80%',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer'
              }}
              title="Close"
            >
              <FaTimes />
            </button>
            <iframe
              src={invoiceUrl}
              style={{ width: '100%', height: '100%' }}
              title="Invoice Preview"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
