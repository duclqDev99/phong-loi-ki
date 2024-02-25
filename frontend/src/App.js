import React, { useEffect } from 'react';
// import './App.css';
import HomePage from './pages/UserPage/HomePage';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
      <div className="App">
        <HomePage/>
      </div>
  );
}

export default App;
