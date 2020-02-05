const express = require('express')
const app = express()
const routes = require('./routes')

/** 
 *  In the header file of the request, 
 *  include Content-Type: application/json
*/

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// http://localhost:3000/api/
app.use('/api/', routes)

app.listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
    
})

