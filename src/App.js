import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;