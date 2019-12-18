const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const postSchema = new Schema({

    title:{
        type:String,
        required:true
    },

    description: {
        type: String,
        required: true,
    },

    content:{
        type: String,
        required: true
    },

    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Posts', postSchema);