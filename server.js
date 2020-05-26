const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// app.get('/',(req, res)=>{
//   res.status(200).json({
//     success: true,
//     data: 'Welcome to the contactKeeper API....'
//   });
// });

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));


app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});