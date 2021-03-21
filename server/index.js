const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const posts = require('./db/posts')

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'makina onur'
    })
})

app.get('/posts', (req, res) => {
    posts.getAll().then(posts => {
        res.json(posts)
    })
})

app.post('/posts', (req, res) => {
    console.log(req.body)
    posts.create(req.body).then((post) => {
        res.json(post)
    }).catch((err) => {
        res.status(500);
        res.json(err);
    })
})

app.delete('/posts', (req,res) => {
    posts.remove(req.body).then(post => {
        res.json(post)
    })
})

const port = process.env.PORT || 1234

app.listen(port, () => {
    console.log(`listenin on ${port}`)
})