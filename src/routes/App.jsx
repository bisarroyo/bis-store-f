import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Layout from '../containers/Layout'
import Home from '../pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
