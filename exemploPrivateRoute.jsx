const PrivateRoute = () => {
  let auth = true

  return (
    auth ? <Outlet /> : <Navigate to="/login" />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route exact path='/' element={<App />}>
          <Route exact path='/sobre' element={<Sobre />} />
          <Route exact path='/contatos' element={<Contatos />} />
        </Route>
      </Route>
      <Route exact path='/login' element={<h1>Página de login</h1>} />
    </Routes>
  </BrowserRouter>
)
