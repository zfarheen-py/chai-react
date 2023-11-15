import { useState, useEffect } from 'react'
import axios from 'axios'

// how to fetch apis using axios
const Api = () => {
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
      <div>
        <h1>Hey there!</h1>
        <span>Jokes:{jokes.length}</span>
        {
          jokes.map((joke) => (
              <div key={joke.id}>
                  <h3>{joke.setup}</h3>
                  <p>{joke.punchline}</p>
              </div>
          ))
        }
      </div>
    </>
  )
}

export default Api