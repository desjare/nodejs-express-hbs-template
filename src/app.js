
const path = require("path")
const express = require("express")
const hbs = require("hbs")

const app = express()
const port = process.env.PORT || 3000

// define paths for express config
const publicPath = path.join(__dirname, "..", "public")
const viewsPath = path.join(__dirname, "..", "templates", "views")
const partialsPath = path.join(__dirname, "..", "templates", "partials")


// setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to server
app.use(express.static(publicPath))

app.get("", (req, res) => {
    res.render("index", { 
      title: "Template App"
    })
})

app.get("*", (req, res) => {
    res.statusCode = 404
    res.render("404", {
        title: "404"
    })
})

app.listen(port, () => {
    console.log("Listening on port " + port)
})
