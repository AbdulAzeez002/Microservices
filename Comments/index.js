const express=require('express')
const {randomBytes}=require('crypto')
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express()
app.use(bodyParser.json())
app.use(cors())

const commentsByPostId={

}
 

app.get('/comments/:id',(req,res)=>{
    console.log('get')
    res.send(commentsByPostId[req.params.id] || [])
})

app.post('/comments/:id',(req,res)=>{
    console.log('post')
    const commentId=randomBytes(4).toString('hex')

    const {content}=req.body
    console.log(req.body,'body') 

    const comments=commentsByPostId[req.params.id] || []
    const newComment={commentId,content}

    comments.push(newComment)
    
    console.log(comments,'comments')
    commentsByPostId[req.params.id]=comments
 
    
    res.status(201).send(newComment)
})




app.listen(4001,()=>{
    console.log('server running on port 4001')
})