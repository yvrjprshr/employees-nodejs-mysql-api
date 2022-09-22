const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Home Page!')
})

// import employees router
const employeeRoutes = require('./src/routes/employee.route');

app.use('/api/v1/employee', employeeRoutes);

app.listen(8080, () => {
    console.log('yayr');
})