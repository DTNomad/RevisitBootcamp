const express = require("express");
const app = express();

//this matches every single request, so comment out bc res.send stops everything
// app.use((req, res) => {
//     console.log("new request")
//     //res.send("hello, we got your request. this is the response."
//     //res.send({color: 'red'})
//     res.send('<h1>This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
    res.send("this is the homepage")
})

app.post('/cats', (req, res) => {
    res.send('post req, this is dif from a get req')
})

app.get('/cats', (req, res) => {
    res.send("meow")
})

app.get('/dogs', (req, res) => {
    res.send("woof")
})

//generic, doesnt work for /r/cats/dogs, pattern won't match
app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>viewing post id: ${postId} on the ${subreddit} subreddit</h1>`)
})

//query string test
app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send("Nothing found if nothing searched")
    }
    res.send(`Displaying search results for ${q}`)
})

//important that this is at the end because it'll catch the rest
app.get('*', (req, res) => {
    res.send("I don't know that path")
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

