const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;


const productSchema = new mongoose.Schema({
  title :{
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
    text: true
  },
  slug :{
    type: String,
    unique: true,
    lowercase: true,
    index: true
  },
  description :{
    type: String,
    required: true,
    maxlength: 3200,
    text: true
  },
  price :{
    type: Number,
    required: true,
    maxlength: 32,
  },
  address : {
    type: String,
    required: true,
  },

  landmark : {
    type: String,
    required: true,
  },

  city : {
    type: String,
    required: true,
  },
  
  category: {
    type: ObjectId,
    ref: 'Category',
  },
  subs: [{
    type: ObjectId,
    ref: "Sub",
  }],
  // quantity: Number,
  // sold: {
  //   type: Number,
  //   default: 0
  // },
  images: {
    type : Array,
    required: true,
  },
  // shipping: {
  //   type: String,
  //   enum: ['Yes', 'No'],
  // },
  user_id: {
    type: ObjectId, ref: "User"
  },
  ratings: [{
    star: Number,
    postedBy: {type: ObjectId, ref: "User"},
  },],
}, {timestamps: true});


module.exports = mongoose.model("Product",productSchema );
