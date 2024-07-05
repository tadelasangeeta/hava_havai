import React from 'react'
import './App.css' // Example for styling import

// Import your components
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import AirportDetails from './components/AirportDetails'
import Services from './components/Services'
import Others from './components/Others' // Example import

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Sidebar />
        <main>
          <AirportDetails />
          <Services />
          <Others /> {/* Render other components as needed */}
        </main>
      </div>
    </div>
  )
}

export default App
