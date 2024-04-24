import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>Home</Layout>} />
      <Route path="/profile" element={<div>About</div>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
