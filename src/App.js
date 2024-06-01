// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import SignupForm from './components/Signup';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home/*" element={<Home />} />
//         <Route path="/signup" element={<SignupForm />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SignupForm from './components/Signup';
import { StateProvider } from './components/StateContext';  // Import StateProvider
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <StateProvider>  {/* Wrap the StateProvider here */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
