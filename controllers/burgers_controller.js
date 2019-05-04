let express = require('express'); 
let router = express.Router();
let burger = require("../models/burger");

//Index Redirect
router.get('/', function(req, res) {
    res.redirect('/index');
});

//Index Page
router.get('/index', function(req,res){
    burger.selectAll(function(data){
        let hbsObject = {burgers: data};
        res.render("index", hbsObject); 
    });
});

router.post('/update/:id', function(req, res){
    burger.updateOne([req.params.id], function(){
        res.redirect('/')
    });
});

router.post('/create', function(req, res){
    
    burger.insertOne([req.body.burger_name], function(){
        res.redirect('/')
    });
});


module.exports = router;