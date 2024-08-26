const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.set ('views', './views')

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/login', function(req, res) {
    res.render('login')
})

app.get('/counseling', function(req, res) {
    res.render('counseling')
})

app.get('/agecareer', function(req, res) {
    res.render('agecareer')
})

app.get('/signup', function(req, res) {
    res.render('signup')
})

app.get('/mypage', function(req, res) {
    res.render('mypage')
})

app.post('/signupform', function(req, res) {
    const username = req.body.username
    const password = req.body.password
    const passwordconfirm = req.body.passwordConfirm

    if (password == passwordconfirm)
        console.log(`Sign Up Success => ID: ${username}, PASSWORD: ${password}`)
    else
        console.log(`Sign Up Failed  => Confirm Password Incorrect.`)
})

app.post('/submitlogin', function(req, res) {
    const username = req.body.username
    const password = req.body.password

    console.log(`Login Request | ID: ${username}, PASSWORD: ${password}`)
})

app.use(function(req, res) {            // Page Not Found
    res.status(404).render('error', { errorCode: 404 });
});

app.use(function(err, req, res, next) { // Internal Server Error
    console.error(err.stack);
    res.status(500).render('error', { errorCode: 500 });
});

app.listen(port, () => {
    console.log(`Hosting at port ${port}`)
})