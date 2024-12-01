import React, { useContext } from 'react'
import Header from './component/Header'
import Blogs from './component/Blogs'
import Footer from './component/Footer'
import './App.css'
import { Appcontext } from './context/Appcontext'
import { useEffect } from 'react'

const App = () => {
  const{fetchblogs} = useContext(Appcontext);
  useEffect(()=>{
    fetchblogs();
},[]);
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>

      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App

