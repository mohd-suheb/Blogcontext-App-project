import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';

const Tag = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1).replaceAll("-", "");
  return (
    <div>
        <Header/>

        <div>
        <button onClick={()=>navigate(-1)}>
            back
        </button>
        <h2>
        Blogs Tagged <span>#{tag}</span>
        </h2>
           <Blogs/>
           <Footer/>
       
        </div>

       
    </div>
  )
}

export default Tag