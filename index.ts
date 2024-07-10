import express from 'express';


const app = express()

app.get('/', (req, res) => {
    res.send("Hello World, this is vince, testing my express server with NGINX")
})

app.get('/api', (req, res) => {
    res.send("Hello, I'm an endpoint")
})


app.listen(1337, () => {
    console.log("listening on port 7777") 
})