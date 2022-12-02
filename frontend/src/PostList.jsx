import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'



function PostList({submit}) {

    const [posts,setPosts]=useState([])
    const[comment,setComment]=useState(false)

    const fetchPosts=async()=>{
        const {data}=await axios.get('http://localhost:4000/posts')
        console.log(data,'data')
        setPosts(data)
    }

    useEffect(()=>{
     fetchPosts()
    },[submit])


  return (
    <>
      <h1 className='text-center font-bold text-2xl'>Posts List</h1>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">

        {
            posts.length>0 && posts.map((post)=>(
                <div class="rounded overflow-hidden border border-black">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{post.title}</div>
                  
                </div>
{/* 
                <div>
                    <CommentList postId={post.id} />
                </div> */}
                <div className='p-3'>
              <CommentCreate  postId={post.id}/>
                

                </div>
                
                
                
                
                
                
              </div>
              
            ))
        }
  
    
    
    

    
  </div>

    
    </>
  )
}

export default PostList