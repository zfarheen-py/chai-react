import { useState, useEffect } from 'react'
import axios from 'axios'

// how to fetch apis using axios
const FetchApi = () => {
    const [jokes, setJokes] = useState([])

    const url = 'https://official-joke-api.appspot.com/random_ten'
  
    useEffect(() => {
      axios.get(url)
      .then((respose) => {
          setJokes(respose.data)
      })
      .catch((error) => {
          console.log(error)
      })
    },[])
  
    return(
    <>
      <div className='flex flex-col items-center py-5'>
        <h1 className='bg-slate-700 px-5 py-2 rounded-lg'>Hey there! Jokes API</h1>
        <span>Jokes:{jokes.length}</span>
        <ol className='list-decimal'>
          {
            jokes.map((joke) => (
                <li key={joke.id}>
                    <h3>{joke.setup}</h3>
                    <p>{joke.punchline}</p>
                </li>
            ))
          }
        </ol>       
      </div>
    </>
  )
}

export default FetchApi