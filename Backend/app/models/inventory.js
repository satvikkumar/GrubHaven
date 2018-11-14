var mongoose = require('mongoose');

var Inventory = new mongoose.Schema();


Inventory.add({
    
    ing_name: {
	    type: String,
	    required: true
    },
    ing_quant: {
        type: String,
        required: true
    },
    ing_supplier: {
        type: String
    }
});

var InventorySchema = new mongoose.Schema({ 
    hotel_name: {
        type: String
    },
    
    inventory : [Inventory]
});

module.exports = mongoose.model('Inventory', InventorySchema);

