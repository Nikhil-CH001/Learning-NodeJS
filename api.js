const http = require("http")
const data = require("./data")

const server = http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type":"application/json"})
    res.write(JSON.stringify(data))
    res.end()
})

server.listen(4444, ()=> {
    console.log("Server is running on port 4444")
    console.log("Visits: http://localhost:4444")
})