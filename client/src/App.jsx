import { useState } from 'react'

import './App.css'
import PostsList from './features/posts/PostsList';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <h1>React on Rails Blog</h1>
          <p>Find this application layout in the client/src/App.jsx</p>
          <PostsList />
      </div>
    </>
  )
}

export default App
