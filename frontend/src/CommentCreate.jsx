import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostList from './PostList'

import { BiMessageRoundedMinus} from 'react-icons/bi';
import CommentList from './CommentList';


function CommentCreate({postId}) {

    const [content,setContent]=useState('')
    const [open,setOpen]=useState(false)

    const onSubmit=async(e)=>{
     
        e.preventDefault()
        console.log('submitted')

       const response=await axios.post(`http://localhost:4001/comments/${postId}`,{
            content
        })

        console.log('response',response)

        setContent('')
    }
  return (
    <>

    
<div>
                    <CommentList postId={postId} submit={onSubmit}/>
                </div>

    {
        open && open ?<div className='flex items-center justify-center mt-5'>

    
        <div class="w-full max-w-lg">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
         
        <div class="my-4">
          
          <input value={content} onChange={(e)=>setContent(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your comment here..."/>
        </div>
        
        <div class="flex items-center justify-center">
          <button  class="bg-rose-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
          
        </div>
      </form>
      
    </div>
    </div>:<div><button onClick={()=>setOpen(true)} className="bg-emerald-800 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded flex items-center justify-end"><span className='mr-2'>Comment</span><BiMessageRoundedMinus/></button></div>
    }


   
    


</>

  )
}

export default CommentCreate