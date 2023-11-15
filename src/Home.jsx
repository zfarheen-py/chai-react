import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center py-5'>
      <ul className='list-disc'>
        <li>
          <Link to="/fetchapi">Fetch Api</Link>
        </li>
        <li>
          <Link to="/passwordgenerator">Password Generator</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home