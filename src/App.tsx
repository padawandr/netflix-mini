import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { RequireAuth } from './components/RequireAuth'
import { Login } from './pages/Login'
import { MainMovieSelection } from './pages/MainMovieSelection'
import { Metrics } from './pages/Metrics'
import { PlayMovies } from './pages/PlayMovies'
import { Profile } from './pages/Profile'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <MainMovieSelection />
            </RequireAuth>
          }
        />
        <Route
          path='/play/:id'
          element={
            <RequireAuth>
              <PlayMovies />
            </RequireAuth>
          }
        />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path='/metrics'
          element={
            <RequireAuth>
              <Metrics />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
