import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
// import Home from '../pages/Home'
// import Contact from '../pages/Contact'
// import About from '../pages/About'
// import Layout from '../pages/Layout'
const Home = lazy(()=> import("../pages/Home"))
const HomePage = lazy(()=> import("../pages/HomePage"))
const Create = lazy(()=> import("../pages/Create"))
const About = lazy(()=> import("../pages/About"))
const Contact = lazy(()=> import("../pages/Contact"))
const Layout = lazy(()=> import("../pages/Layout"))

const RouterMain = () => {
  return (
    <Routes>
        <Route path='/' element={<SuspenseContainer><Layout/></SuspenseContainer>}>
            <Route path='/' element={<SuspenseContainer><HomePage/></SuspenseContainer>}/>
            <Route path='/create' element={<SuspenseContainer><Home/></SuspenseContainer>}/>
            <Route path='/create' element={<SuspenseContainer><Create/></SuspenseContainer>}/>
            <Route path='/about' element={<SuspenseContainer><About/></SuspenseContainer>}/>
            <Route path='/contact' element={<SuspenseContainer><Contact/></SuspenseContainer>}/>
        </Route>
    </Routes>
  )
}

export default RouterMain