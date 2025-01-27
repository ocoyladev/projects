import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact';
import Main from './pages/main';
import PersonalInfo from './pages/personal-info';
import Projects from './pages/projects';
import Sidebar from './components/sidebar';

function App() {
  // const [count, setCount] = useState(0)

  return (    
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Oscar Coyla</h1>
      <div className="card">
        <h2>About me</h2>
        <p>
          I'm a software engineer, I like to learn new things and I'm always looking for new challenges.
        </p>
      </div>
      <p>Here should be my projects, just wait</p>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/personal-info" element={<PersonalInfo/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </div>
      </div>
    </Router>


  )
}

export default App
