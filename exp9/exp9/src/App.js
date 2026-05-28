import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {

    e.preventDefault();

    if (name === '') {

      setMessage('Name cannot be empty');

    }

    else if (!email.includes('@')) {

      setMessage('Email must contain @');

    }

    else if (password.length < 6) {

      setMessage('Password must be at least 6 characters');

    }

    else {

      setMessage('Registration Successful');

    }

  }

  return (

    <div className="container">

      <div className="card">

        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p>{message}</p>

      </div>

    </div>

  );

}

export default App;