async function useBuscaCep(cep) {
  let data = {}
  let error = null

  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.json())
    .then((res) => data = res)
    .catch((err) => {
      error = err
    })

  return { data, error }
}
export default useBuscaCep
