import React, { useContext } from 'react'
import Header from './component/Header'
import Blogs from './component/Blogs'
import Footer from './component/Footer'
import './App.css'
import { Appcontext } from './context/Appcontext'
import { useEffect } from 'react'
import { Route, useLocation, useSearchParams } from 'react-router-dom'

const App = () => {
  const{fetchblogs} = useContext(Appcontext);

  useEffect(()=>{
    const[searchparam, setsearchparam] = useSearchParams();
    const location = useLocation();

    const page = searchparam.get("page")??1;

    if(location.pathname.includes("tag")){
      //iska matlab tag wala page show kara hai
      const tag = location.pathname.split("/").at(-1).replace("-", "");
      fetchblogs(Number(page), tag);
    }
else if(location.pathname.includes("catogories")){

  const category = location.pathname.split("/").at(-1).replaceAll("-", "");
  fetchblogs(Number(page), null, category);
}
else{

  fetchblogs(Number(page));
}

   
},[location.pathname, location.search]);
  return (
    <div >


<Routes>
  <Route path='/' element ={<Home/>}/>
  <Route path='/blogs/:blogsid' element ={<Blogspage/>}/>
  <Route path='/tags/:tag' element ={<Tagpage/>}/>
  <Route path='/categories/:category' element ={<categorypage/>}/>
  
</Routes>
     
    </div>
  )
}

export default App

