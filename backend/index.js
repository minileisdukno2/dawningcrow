const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');

app.use(cors({
    origin:"*",
}))

app.use(express.json());

app.post('/auth/login', (req,res) => {
    const email = req.body.email;
    
    console.log(email);
    const token = jwt.sign(
    {
        email: email,
        
    },
    "MY_PRIVATE_KEY", 
    { 
        expiresIn: 3600,
    }
);
res.json({
    email: email,

    token: token,
})
});


app.listen(5001, () => {
    console.log('listening on 5001...');
});