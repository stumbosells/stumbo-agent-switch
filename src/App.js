
import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ name: '', email: '', brokerage: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Stumbo & CO: Agent Switch Kit</h1>
      {!submitted ? (
        <div>
          <input name="name" placeholder="Your Name" onChange={handleChange} /><br/>
          <input name="email" placeholder="Email" onChange={handleChange} /><br/>
          <input name="brokerage" placeholder="Brokerage Name" onChange={handleChange} /><br/>
          <button onClick={() => setSubmitted(true)}>Generate</button>
        </div>
      ) : (
        <div>
          <h2>Checklist</h2>
          <ul>
            <li>Update license</li>
            <li>Notify REALTOR® board</li>
            <li>Update online profiles</li>
          </ul>
          <p>Welcome to {form.brokerage}, {form.name}!</p>
        </div>
      )}
    </div>
  );
}

export default App;
