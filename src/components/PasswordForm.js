import React, { useState } from 'react';
import { generatePassword } from '../utils/passwordGenerator';

const PasswordForm = ({ onAdd }) => {
  const [website, setWebsite] = useState('');
  const [password, setPassword] = useState('');

  const handleGenerate = () => {
    const newPass = generatePassword();
    setPassword(newPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (website && password) {
      onAdd({ website, password });
      setWebsite('');
      setPassword('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: '30px auto',
        padding: '30px',
        borderRadius: '12px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>Add Password</h2>

      <input
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        required
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '16px',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
        <button
          type="button"
          onClick={handleGenerate}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Generate
        </button>

        <button
          type="submit"
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default PasswordForm;
