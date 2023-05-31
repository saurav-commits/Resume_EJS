import express from 'express';
import web from './routes/web.js';
const app = express()
const port = process.env.port || '3000'

// Set template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));

// Load routes
app.use('/', web);

app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`)
})

