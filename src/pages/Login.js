// // src/pages/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';
// import './css/Login.css';

// Modal.setAppElement('#root'); // Specify the root element for accessibility

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post('/api/auth/login', { email, password });
//       localStorage.setItem('userInfo', JSON.stringify(data));
//       navigate('/home'); // Redirect to /home after successful login
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const resetPasswordHandler = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/auth/forgot-password', { email: resetEmail });
//       alert('Password reset link sent to your email');
//       closeModal();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="login-container" style={{ backgroundImage: "url('https://res.cloudinary.com/dzurqbpi6/image/upload/Purple_Background_HD_WallpaperTag_zcnhxw.jpg')" }}>
//       <div className="login-form-container">
//         <h1>Login</h1>
//         <form className="login-form" onSubmit={submitHandler}>
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
//           <button type="submit">Login</button>
//         </form>
//         <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
//         <p><a href="#" onClick={openModal}>Forgot Password?</a></p>
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Forgot Password"
//         className="modal-content"
//       >
//         <h2>Did you forget your password?</h2>
//         <form onSubmit={resetPasswordHandler}>
//           <label>Email Address</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={resetEmail}
//             onChange={(e) => setResetEmail(e.target.value)}
//           />
//           <button type="submit">Request Reset Link</button>
//         </form>
//         <p><a href="#" onClick={closeModal}>Back to login</a></p>
//       </Modal>
//     </div>
//   );
// }

// export default Login;


// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import './css/Login.css';

Modal.setAppElement('#root'); // Specify the root element for accessibility

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/home'); // Redirect to /home after successful login
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/forgot-password', { email: resetEmail });
      alert('Password reset link sent to your email');
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: "url('https://res.cloudinary.com/dzurqbpi6/image/upload/Purple_Background_HD_WallpaperTag_zcnhxw.jpg')" }}>
      <div className="login-form-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={submitHandler}>
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        <p><a href="#" onClick={openModal}>Forgot Password?</a></p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Forgot Password"
        className="modal-content"
      >
        <h2>Did you forget your password?</h2>
        <form onSubmit={resetPasswordHandler}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
          />
          <button type="submit">Request Reset Link</button>
        </form>
        <p><a href="#" onClick={closeModal}>Back to login</a></p>
      </Modal>
    </div>
  );
}

export default Login;
