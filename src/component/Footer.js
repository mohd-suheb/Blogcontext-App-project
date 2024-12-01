import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Footer = () => {
    const{page,  totalPages, handlepage} = useContext(Appcontext);
  return (
    <div className='w-full flex justify-center items-center  border-2 fixed bottom-0 bg-white'>
    

    
     
            
    <div className='flex justify-between w-11/12 max-w-[650px] items-center py-2'>
    <div className='flex gap-x-2'>
    { 
         page >1 &&  
           ( <button onClick={()=>handlepage(page-1)} className='rounded-md bg-white border py-2 px-1' >
           previous
       </button>)
        }

      { 
         page<totalPages &&
           ( <button onClick={()=>handlepage(page+1)} className='rounded-md bg-white border py-4 px-2'>
           next
       </button>)
        }
    </div>
       
        </div>

       
    <p className='font-bold ' >
        page {page} of {totalPages}
    </p>
    </div>
  
  )
}

export default Footer