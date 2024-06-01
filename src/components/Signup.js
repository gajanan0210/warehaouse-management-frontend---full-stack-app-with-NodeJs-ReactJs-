
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../pages/css/Login.css';

// function SignupForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Use useNavigate hook

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       console.log(data); // Handle response from backend
//       // Redirect to /home after successful signup
//       navigate('/home');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form-container">
//         <h1>Sign Up</h1>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Sign Up</button>
//         </form>
//         <p>Already have an account? <Link to="/">Go to Login</Link></p>
//       </div>
//     </div>
//   );
// }

// export default SignupForm;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../pages/css/Login.css';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', { // Correct the endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }), // Include name in the request body
      });
      const data = await response.json();
      console.log(data); // Handle response from backend
      // Redirect to /home after successful signup
      navigate('/home');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1>Sign Up</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/">Go to Login</Link></p>
      </div>
    </div>
  );
}

export default SignupForm;
