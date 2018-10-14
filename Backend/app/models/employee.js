var mongoose = require('mongoose');

// Models
var emp = mongoose.model('employees', {
   name: String,
   type: String
});
