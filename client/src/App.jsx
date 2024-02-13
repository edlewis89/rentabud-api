import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import AppRoutes from './components/AppRoutes';
import NavBar from './components/NavBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">
        <h1>React on Rails Blog</h1>
          <p>Find this application layout in the client/src/App.jsx</p>
          <NavBar />
          <AppRoutes />
      </div>
    </Router>
  )
}

export default App
