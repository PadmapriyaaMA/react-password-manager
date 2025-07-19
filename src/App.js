import React, { useState } from 'react';
import PasswordForm from './components/PasswordForm';
import PasswordList from './components/PasswordList';

function App() {
  const [passwords, setPasswords] = useState([]);

  const addPassword = (entry) => {
    setPasswords([...passwords, entry]);
  };

  return (
    <div className="App">
      <h1>Password Manager</h1>
      <PasswordForm onAdd={addPassword} />
      <PasswordList passwords={passwords} />
    </div>
  );
}

export default App;
