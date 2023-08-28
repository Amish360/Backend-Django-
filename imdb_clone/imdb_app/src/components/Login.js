import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom'
import accountCreation from './accountcreation';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();
  const navigate= useNavigate();

  const navigateToAccountCreation = () => {
        navigate('/accountcreate');
  };


  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic here
    history.push('/main');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <label><p>Login:</p></label>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br/>
        <label><p>Password:</p></label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br/>
        <label><p>Re-type Password:</p></label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        <button type="submit">Sign Up</button>
      </form>
      <h2>Dont't have an account yet?,Register now:</h2>
      <button onClick={navigateToAccountCreation}>Crete an account</button>

      <Routes>
          <Route path="/accountcreate" element={accountCreation} />
        </Routes>
    </div>

    
  );
}

export default Login;
