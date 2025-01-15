import './styles/App.css'
import './styles/buttons.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import {Routes, Route} from 'react-router-dom'
import { MovieProvider} from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MovieProvider>
  )
}

export default App