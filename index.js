const http = require("http");
const server = http.createServer((request, response)=>{
    const userDetails = [{name:"janaki", age:14},{name:"Lalsa", age:5}]
    const user = {name:"Lalsa", age:5}
    response.write("Hello world !!")
    response.write("<h1> http modules</h1>")
    response.write(JSON.stringify(userDetails))
    response.end();
})

server.listen(5000);