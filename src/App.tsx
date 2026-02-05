import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PublicRoutes from './routes/publicRoutes'
import Home from './pages/Home'
import PrivateRoutes from './routes/privateRoutes'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
