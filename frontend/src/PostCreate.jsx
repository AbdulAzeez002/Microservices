import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostList from './PostList'
import CommentList from './CommentList'


function PostCreate() {

    const [title,setTitle]=useState('')

    const onSubmit=async(e)=>{
     
        e.preventDefault()
        console.log('submitted')

       const response=await axios.post('http://localhost:4000/posts',{
            title
        })

        console.log('response',response)

        setTitle('')
    }
  return (
    <>

   
    <div className='flex items-center justify-center mt-5'>

    
    <div class="w-full max-w-lg">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
     <div>
        <h1 className='text-center text-3xl text-blue-900 font-bold'>Create Post</h1>
     </div>
    <div class="my-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" >
        Title
      </label>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter the title here..."/>
    </div>
    
    <div class="flex items-center justify-center">
      <button  class="bg-rose-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Submit
      </button>
      
    </div>
  </form>
  
</div>
</div>

<hr class="my-8 w-full h-1 bg-gray-200 rounded border-0 dark:bg-gray-700"/>
      <PostList  submit={onSubmit}/>

</>

  )
}

export default PostCreate