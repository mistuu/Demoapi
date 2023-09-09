const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
   // id:{
   //    type:
   // },
   uName: {
      type: String,
      require: true
   },
   uEmail: {
      type: String,
      require: true
   },
   uNumber: {
      type: String,
      require: true
   },
   date: {
      type: Date,
      default: Date.now
   }

})

module.exports = mongoose.model('Post', PostSchema)