const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get the list of ninjas from the db
router.get('/ninjas',function(req,res,next){
    console.log('Get Ninjas');
    res.send({type:'GET'});
});

//add a new ninjas to the db
router.post('/ninjas',function(req,res,next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// edit or updata ninjas in the db
router.put('/ninjas/:id',function(req,res,next){
    console.log('Put Ninjas');
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(ninja){
       Ninja.findOne({_id:req.params.id}).then(function(ninja){
         res.send(ninja);
       });
       
    });

});

// Delete ninjas from the db
router.delete('/ninjas/:id',function(req,res,next){
    console.log('Delete Ninjas');
    console.log(req.params.id);
    //res.send({type:'DELETE'});
    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports = router;