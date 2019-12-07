const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// "geometry":{
//     "type":"Point",
//     "co0rdinate":[125.6,10.1] 
// }
// create geolocation schema
const GeoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere" 
    }
});

// Create ninja Schema and model
const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    rank:{
        type:String
    },
    available:{
        type:Boolean,
        default:false 
    },

    // add a geo location
    geometry:GeoSchema
});

// Create model 
 const Ninja = mongoose.model('ninja',NinjaSchema);  // ninja is collection here 

 module.exports = Ninja;