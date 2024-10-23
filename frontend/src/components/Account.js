import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Account = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUsername(storedUser.username);
      setEmail(storedUser.email);
      setPassword(storedUser.password);
    }
  }, []);
  const logoutbtn=()=>{
    navigate('/')
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUserData = {
      username,
      email,
      password,
    };
    localStorage.setItem('user', JSON.stringify(updatedUserData));
    alert('Account updated successfully!');
  };

  return (
    <div >
      <h2>Welcome  {username} U Can Edit The Account Data</h2>
    <form onSubmit={handleUpdate}>
      <h2>Edit Account</h2>
      
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
      <button type="submit">Update Account</button>
      
      <button onClick={logoutbtn} className='buttonlogout'>Logout</button>
    </form>
    </div>
  );
};

export default Account;
