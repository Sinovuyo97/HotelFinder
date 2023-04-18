const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const useData = require('../server/data/hotels');

server.get('/api/hotels',(req,res,next)=>{
    res.status(200).send(useData.getHotel);
});

server.listen(58760,()=>{
    console.log("JSON Server Listening on port 58760");
})