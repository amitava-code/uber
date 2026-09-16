const http = require('http')
const app = require('./src/app')
const port = process.env.PORT || 3000
const connectDB = require("./src/db/db")

const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])

connectDB()







const server = http.createServer(app)

server.listen(port, ()=>{
    console.log(`server is listening on ${port}`)
})