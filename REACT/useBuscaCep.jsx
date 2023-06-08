import axios from "axios"

async function useBuscaCep(cep) {
  let data = {}
  let error = null

   try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      data = response.data

    } catch (err){
      error = err.message
    }

  // await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  //   .then((res) => res.json())
  //   .then((res) => data = res)
  //   .catch((err) => {
  //     error = err
  //   })

  return { data, error }
}
export default useBuscaCep
