const mongoose=require("mongoose");

const movieSchema=new mongoose.Schema({
    original_title:{type:String,required:true},
    poster_path:{type:String,required:true},
    imdb:{type:Number,required:true},
    original_lang:{type:String,required:false},
    overview:{type:String,required:false},
})

const Movie=mongoose.model("movie",movieSchema);

module.exports=Movie