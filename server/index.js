const express = require('express');
const app = express()
const corse = require('corse')

app.use(corse())

app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.listen(1300, () => {
    console.log('server started on 1300')
})
