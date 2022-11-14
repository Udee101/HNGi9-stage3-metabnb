import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './container/Layout'
import Home from './pages/Home'
import PlaceToStay from './pages/PlaceToStay'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="placetostay" element={<PlaceToStay />} />
      </Route>
    </Routes>
  )
}

export default App