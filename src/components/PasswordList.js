import React from 'react';

const PasswordList = ({ passwords }) => {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Saved Passwords</h2>

      {passwords.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No passwords saved yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {passwords.map((entry, index) => (
            <li
              key={index}
              style={{
                backgroundColor: '#f4f4f4',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>
                <strong style={{ color: '#007bff' }}>{entry.website}</strong>
              </span>
              <span style={{ fontFamily: 'monospace', color: '#555' }}>{entry.password}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PasswordList;
