import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import FetchApi from './projects/01FetchApi'
import BgChanger from './projects/02BgChanger'
import PasswordGenerator from './projects/03PasswordGenerator'
import CurrencyConverter from './projects/04CurrencyConverter'

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/fetchapi' element={<FetchApi/>}/>
          <Route path='/bgchanger' element={<BgChanger/>}/>
          <Route path='/passwordgenerator' element={<PasswordGenerator/>}/>
          <Route path='/currencyconverter' element={<CurrencyConverter/>}/>
        </Routes>      
      </main>
    </Router>
    
  )
}
