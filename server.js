import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: "yourSecretKey", // Change this to a secure secret
    resave: true,
    saveUninitialized: true
}));

app.set("view engine", "ejs");

// Middleware to make username available in all EJS files
app.use((req, res, next) => {
    res.locals.username = req.session.username || null; // Set username for all views
    next();
});

app.get("/", (req,res) =>{
    res.render("index.ejs");
});

app.get("/about", (req,res) =>{
    res.render("about.ejs");
});

app.get("/postblog", (req,res) =>{
    res.render("writeblog.ejs");
});

app.get("/categories", (req,res) =>{
    res.render("categories.ejs");
});

app.get("/login", (req,res) =>{
    res.render("login.ejs");
});

app.get("/signup", (req,res) =>{
    res.render("signup.ejs");
});

app.post("/login", (req, res) => {
    const username = req.body.username.trim();
    req.session.username = username; // Store username in session
    console.log(`User logged in: ${username}`);
    res.redirect("/");
});

app.post("/signup", (req, res) => {
    const username = req.body.username.trim();
    req.session.username = username; // Store username in session
    console.log(`User logged in: ${username}`);
    res.redirect("/");
});


app.listen(port, () =>{
    console.log(`Listening on Port ${port}`);
});