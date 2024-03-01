const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./usersRoute');
const permissions = require('../middleware/permissions')
const app = express();
const port = 3000;

app.use(permissions);
// app.use(bodyParser.json());
console.log(usersRoute); 
// Sử dụng usersRoute
app.use('/admin/users', usersRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
