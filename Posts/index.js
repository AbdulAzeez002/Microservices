const express=require('express')
const {randomBytes}=require('crypto')
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express()
app.use(bodyParser.json())
app.use(cors())

const posts=[]



app.get('/posts',(req,res)=>{
    console.log('get')
    res.send(posts) 
})

app.post('/posts',(req,res)=>{

    const {title}=req.body
    console.log('post')
    const id=randomBytes(4).toString('hex')

    newPost={id,title}
    posts.push(newPost)
    

    res.status(201).send(newPost)
})








app.listen(4000,()=>{
    console.log('server running on port 4000')
})