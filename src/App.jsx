import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import FetchApi from './projects/FetchApi'
import PasswordGenerator from './projects/PasswordGenerator'

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/fetchapi' element={<FetchApi/>}/>
          <Route path='/passwordgenerator' element={<PasswordGenerator/>}/>
        </Routes>      
      </main>
    </Router>
    
  )
}
