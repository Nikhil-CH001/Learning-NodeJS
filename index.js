const http = require("http")
const server = http.createServer( (req, res) => {
    res.write("Welcome to server side")
    res.end()
})

server.listen(4444, ()=> {
    console.log("Server is running on port 4444")
    console.log("Visits: http://localhost:4444")
})