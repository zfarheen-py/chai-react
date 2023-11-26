import {useState, useEffect} from "react"

// custom hook
function useCurrencyInfo(currency){
  const [currencyInfo, setCurrencyInfo] = useState({})
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setCurrencyInfo(res[currency]))
  }, [currency])
  // console.log(currencyInfo)
  return currencyInfo  
}

export default useCurrencyInfo