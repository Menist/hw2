import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/pre-junior' element={<PreJunior/>}/>
        <Route path='/' element={<Navigate to={'/pre-junior'}/>}/>
        <Route path='/junior' element={<Junior/>}/>
        <Route path='/junior-plus' element={<JuniorPlus/>}/>


        <Route path='/error-404' element={<Error404/>}/>
        <Route path='/*' element={<Navigate to={'/error-404'}/>}/>
      </Routes>
    </div>
  )
}

export default Pages
