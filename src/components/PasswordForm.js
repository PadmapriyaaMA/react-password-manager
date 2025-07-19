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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="button" onClick={handleGenerate}>Generate</button>
      <button type="submit">Save</button>
    </form>
  );
};

export default PasswordForm;
