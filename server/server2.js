import express from 'express'
import { auth }  from  "express-openid-connect"

const app = express();


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:5000',
  clientID: 'vWUSdofpWa7QeaDKliiMuF3kkKGnEpbh',
  issuerBaseURL: 'https://dev-4a2oi4s0kc7uimju.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


app.listen(5000, () =>{
        console.log('port 5000')
})