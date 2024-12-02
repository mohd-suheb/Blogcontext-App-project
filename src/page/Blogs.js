import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Appcontext } from '../context/Appcontext';
import { baseUrl } from '../baseUrl';
import Header from '../component/Header';

const Blogs = () => {
    const[blog, setblogs] = useState(null);
    const[relatedblog, setrelatedblogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const{loading, setloading} = useContext(Appcontext);
    const blogid = location.pathname.split("/").at(-1);

    async  function fetchrelatedblogs(){

        setloading(true);
        let url = `${baseUrl}?blogid = ${blogid}`

        try {

            const res = await fetch(url);
            const data = await res.json();
            setblogs(data.blog);
            setrelatedblogs(data.relatedblog);
            
        } catch (error) {
            console.log("error will come");
            setblogs(null);
            setrelatedblogs([]);
            
        }
        
                 
            setloading(false); 
        
       }

       useEffect(()=>{
        if(blogid){
            fetchrelatedblogs();
        }
       }, [location.pathname]);
  return (
    <div>
       <Header/>
       <div>

        <button onClick={()=>navigate(-1)}>
            back
        </button>

       </div>
       {

        loading?(<div>
            <p>loading</p>
        </div>) :
        blog?
        (
            <div>
                
            </div>
        )
       }
      

    </div>
  )
}

export default Blogs