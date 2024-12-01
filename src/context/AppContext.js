import { createContext, useEffect, useState } from "react";
import { baseUrl} from "../baseUrl";



//create
export const Appcontext = createContext();


export default function Appcontextprovider({children}){
    const[loading, setloadig] = useState(false);
    const[posts, setpost] = useState([]);
    const[page, setpage] = useState(1);
    const[totalPages, settotalpage] = useState(null );
  
    //data felling
    async function fetchblogs(page) {
        setloadig(true);

        let url = `${baseUrl}?page=${page}`;

        try {
         const res = await fetch(url);
         const data =  await res.json();
         console.log(data);
         setpage(data.page);
         setpost(data.posts);
         settotalpage(data.totalPages);
            
        } catch (error) {
            console.log("error fetchig data");
            setpage(1);
            setpost([]);
            settotalpage(null);
            
        }

        setloadig(false);
    }

  

    function handlepage(page){
        setpage(page);
        fetchblogs(page);
    }


    const value = {
        loading,
        setloadig,
        posts,
        setpost,
        page,
        setpage,
        totalPages,
        settotalpage,
        handlepage,
        fetchblogs,
       
    }
  //provider
    return <Appcontext.Provider  value= {value}>
     {children}
    </Appcontext.Provider >

}
