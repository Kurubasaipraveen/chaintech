import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  
  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      username,
      email,
      password,
    };
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Registration successful!');
    setUsername('');
    setEmail('');
    setPassword('');
    navigate('/')
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
      <h4>Already U have account 
        <a href='/'>Login</a>
      </h4>
    </form>
  );
};

export default Register;
