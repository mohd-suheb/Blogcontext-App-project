import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import Spinner from './Spinner';
import {Card} from "react"

const Blogs = () => {
    //cosume
    const{posts, loading} = useContext(Appcontext);
  return (
    <div className='w-11/12 max-w-[450px] mt-[50px]  mb-[60px] '>
    
    {

        loading ? (<Spinner/>) : 
        (
            posts.length === 0 ? (
             <div>
              <p>no data foud</p>
             </div>
            

        ):
            ( posts.map((post)=>(
                
                <div key={post.id}>
                    <p className='font-bold mt-[25px]'>{post.title}</p>
                    <p className='text-[10px]'>by<span>{post.author}</span> on <span className='font-bold underline'>
                        {post.category}</span>

                    </p>
                    <p className='text-[10px]'>posted on<span>{post.date}</span></p>
                    <p className='text-[15px] w-[600px] mt-[10px]'>{post.content}</p>
                    
                        <div>
                            {post.tags.map((tag, index)=>{
                                return <span key = {index} className='text-xs text-blue-700 text-[9px]'>#${tag}</span>
                            })}
                        </div>

                </div>
            )))
        )
    }
    </div>
  )
}

export default Blogs