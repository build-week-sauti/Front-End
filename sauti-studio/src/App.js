import React from 'react';
import './App.css';

import PrivateRoute from './'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token';))
  return (
    <div className="App">
      Sauti Studio
    </div>
  );
}

export default App;
