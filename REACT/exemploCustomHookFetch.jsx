import { useEffect, useState } from "react"
import axios from "axios"

const api = axios.create({
  baseURL: "https://api.github.com"
})

const useUserInfo = () => {
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  const fetchData = async () => {
    await fetch('https://api.github.com/users/Bruno-Costa-fig')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => {
        setError(error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { userInfo: data, error }
}

export default useUserInfo
