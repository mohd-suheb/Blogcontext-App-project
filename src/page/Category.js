import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer';

import { useLocation, useNavigate } from 'react-router-dom'

const Category = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1).replaceAll("-", "");
  return (
    <div>

        <Header/>
        <div>
        <button onClick={()=>navigate(-1)}>
            back
        </button>

        <h2>
        Blogs on <span>#{Category}</span>
        </h2>
           <Blogs/>
           <Footer/>
        </div>
    </div>
  )
}

export default Category;