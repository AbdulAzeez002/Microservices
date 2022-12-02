import axios from 'axios'
import React, { useEffect, useState } from 'react'


function CommentList({postId,submit}) {
 const [comments,setComments]=useState([])

 const fetchComments=async()=>{

    const response=await axios.get(`http://localhost:4001/comments/${postId}`)
    console.log(response.data,'com response')
    setComments(response.data)
 }

 useEffect(()=>{
    fetchComments()
 },[submit])

  return (
    <div>
        {
            comments.length && comments.length>0 ? <><p className='text-center'>Comments</p><ul className='list-disc ml-6'>
            {
                comments.length>0 && comments.map((comment)=>(
                    <li >{comment.content}</li>
                ))
            }
            </ul></> :<><p className='text-center'>Comments</p><p className='ml-2 mt-6'>No Comments yet</p></>
        }
        
        </div>
  )
}

export default CommentList