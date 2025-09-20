// InvoiceViewer.jsx
import React from 'react';
import { jsPDF } from 'jspdf';
import { FaTimes, FaFileInvoiceDollar } from 'react-icons/fa';

const subtleGreen = "#A8C5A5";

const typeLabels = {
  positive: 'Credit',
  negative: 'Debit',
  pending: 'Pending',
  emi: 'EMI',
  penalty: 'Penalty',
  adjustment: 'Adjustment',
  refund: 'Refund',
};

const InvoiceGenerator = ({ transaction, onClose }) => {

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Invoice', 105, 20);
    doc.setFontSize(12);
    doc.text(`Transaction Name: ${transaction.name}`, 20, 40);
    doc.text(`Category: ${typeLabels[transaction.type] || 'Other'}`, 20, 50);
    doc.text(`Date: ${new Date(transaction.date).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}`, 20, 60);
    doc.text(`Amount: Rs.${Math.abs(transaction.amount).toLocaleString()}`, 20, 70);
    doc.text(`Status: ${transaction.type === 'pending' ? 'Pending' : 'Completed'}`, 20, 80);
    doc.save(`invoice-${transaction.name.replace(/\s+/g, '_')}.pdf`);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '20px',
        borderRadius: '8px',
        width: '300px',
        position: 'relative',
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          color: subtleGreen,
          cursor: 'pointer'
        }}>
          <FaTimes size={20} />
        </button>

        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'normal' }}>Invoice</h2>

        <div style={{ fontSize: '14px', marginBottom: '10px' }}>
          <strong>Name:</strong> {transaction.name}
        </div>
        <div style={{ fontSize: '14px', marginBottom: '10px' }}>
          <strong>Category:</strong> {typeLabels[transaction.type] || 'Other'}
        </div>
        <div style={{ fontSize: '14px', marginBottom: '10px' }}>
          <strong>Date:</strong> {new Date(transaction.date).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
        </div>
        <div style={{ fontSize: '14px', marginBottom: '20px' }}>
          <strong>Amount:</strong> Rs.{Math.abs(transaction.amount).toLocaleString()}
        </div>

        <button onClick={generatePDF} style={{
          width: '100%',
          padding: '10px',
          borderRadius: '6px',
          border: `1px solid ${subtleGreen}`,
          background: 'none',
          color: subtleGreen,
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <FaFileInvoiceDollar style={{ marginRight: '8px' }} /> Download PDF
        </button>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
