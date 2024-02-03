const express = require('express');
const fs = require('fs');
const { dirname } = require('path');
const app = express()

app.set("view engine","ejs")


app.get("/", (req, res) => {
    res.render('index')
})

app.get("/video",(req,res)=>{

    // Request Headers--------------------------------------------------- ja ami request ganar asto 

    const range= req.headers.range
    console.log("this is byte range:",range);
    if(!range){
        res.status(400).send("require range ")     
    }

    const video_path="./tom and jerry.mp4";
    const vedio_size=fs.statSync(video_path).size

    const Chunk_Size=10**6 // kitti data send karcha ahe server madun partak vaya 
    const start=Number(range.replace(/\D/g,""))
    const end=Math.min(start+Chunk_Size ,vedio_size-1)

    // Response Header--------------------------------------------------------
  
    const Content_length=end-start+1;

    const headers={
        "Accept-Ranges": "bytes",
        "Content-Length": Content_length,
        "Content-Range": `bytes ${start}-${end}/${vedio_size}`,
        "Content-Type": "video/mp4",

    }

    res.writeHead(206,headers)
    const video_Streams=fs.createReadStream(video_path,{start ,end})
    video_Streams.pipe(res);

    
})
app.listen(3000)