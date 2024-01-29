import React from 'react'
import Header from './Components/Header And Footer/Header'
import Footer from './Components/Header And Footer/Footer'
import {Outlet} from 'react-router-dom'

export default function Root() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
