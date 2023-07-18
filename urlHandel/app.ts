import express from 'express';
import fetch from 'node-fetch';
const baseUrl = 'http://127.0.0.1:8080/unsafe/'
const app = express()
app.use((req, res, next) => {
  const { width, height } = req.query
  res.setHeader('Content-Type', 'image/jpeg')
  fetch(`${baseUrl}rs:fit:${width || ''}:${height || ''}:1/plain/s3:/${req.path}`, { method: 'get' }).then(data => {
    data.body.pipe(res)
  })
})

app.listen(10000, '127.0.0.1', () => {
  console.log('listen port in 10000')
})