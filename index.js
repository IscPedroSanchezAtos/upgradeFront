const express = require('express')
const pa11y = require('pa11y')
const PORT = process.env.PORT || 5500

const app = express()

app.use(express.static('public'))

app.get('/api/test', async (req, res) =>{
    if(!req.query.url){
        res.status(400).json({error: 'url is required'})
    }else {
        const results = awaitpa11y(req.query.url)
        res.status(200).json(results)
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))