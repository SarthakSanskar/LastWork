const mongoose =  require('mongoose');
const {ObjectId} = mongoose.Schema;


const profileSchema = new mongoose.Schema({
  name : {
      type: String,
      required: true,
  },
  email: {
    type: email,
    required: true,
    index: true,
  },
  phone_no : {
      type: Number,
      required: true,
  },

  reset_password: {
    type: String,
  },
//   address: String,
  // wishlist: [{type:ObjectId , ref: "Product"}],
}, {timestamps: true}
);


module.exports = mongoose.model('Profile', profileSchema);