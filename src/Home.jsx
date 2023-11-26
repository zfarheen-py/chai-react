import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center py-5'>
      <h1 className='text-3xl font-bold'>React.js mini projects!</h1>
      <ul className='list-decimal'>
        <li>
          <Link to="/fetchapi">Fetch Api</Link>
        </li>
        <li>
          <Link to="/bgchanger">Bg Changer</Link>
        </li>
        <li>
          <Link to="/passwordgenerator">Password Generator</Link>
        </li>
        <li>
          <Link to="/currencyconverter">Currency Converter</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home