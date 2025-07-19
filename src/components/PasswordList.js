import React from 'react';

const PasswordList = ({ passwords }) => {
  return (
    <div>
      <h2>Saved Passwords</h2>
      <ul>
        {passwords.map((entry, index) => (
          <li key={index}>
            <strong>{entry.website}:</strong> {entry.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordList;
