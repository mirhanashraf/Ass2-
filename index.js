
const http = require('http');
const fs = require('fs');
const Router = require('router');
const router=Router();
const finalhandler=require('finalhandler');

router.get('/', function (req, res) {
    // res.setHeadre(200, { 'Content-Type': 'application/json; charset=utf-8' });
    fs.readdir('./assets',  (err, data)=> {
        res.end(JSON.stringify(data));
    })
})
router.get('/:id', function (req, res) {
    fs.readFile(`./assets/${req.params.id}`,  (err, data)=> {

        res.end(data);

    })
})

http.createServer((req, res) => {
    router(req, res,finalhandler(req,res));
}).listen(3001,()=>{
    console.log('jhbhm');
});