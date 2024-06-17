import React, { useState } from 'react';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      console.log('Registration successful:', data);
    } catch (error) {
      console.error('Error registering user:', error);
      alert("Registration Failed!");
    }
  }

  return (
    <div>
      <form className='register' onSubmit={register}>
        <h1>Register</h1>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
