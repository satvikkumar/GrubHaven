var Inventory = require('../models/inventory');


exports.list = function(req, res) {

    // use mongoose to get all employees
    var hotel = req.body.hotel_name;
    //console.log(req.body)

    Inventory.findOne({
        hotel_name : hotel
    }, function (err, list) {

        if (err) {
            return next(err);
        }

        else {
            console.log(list);
            res.send(list);
        };


    });
}

exports.add = function(req, res) {

    var hotel = req.body.hotel_name;
    var new_item = req.body.ing_name;
    var new_quant = req.body.ing_quant;
    var new_supplier = req.body.ing_supplier;

    Inventory.findOneAndUpdate(
        {hotel_name:hotel }, 
        { $push: { inventory:{ ing_name : new_item , ing_quant : new_quant , ing_supplier : new_supplier}}},
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
                 res.send(success);
             }
         });

}

exports.remove = function(req, res) {

    var hotel = req.body.hotel_name;
    var new_item = req.body.ing_name;

    Inventory.findOneAndUpdate(
        {hotel_name:hotel }, 
        { $pull: { inventory:{ ing_name : new_item }}},
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
                 res.send(success);
             }
         });

}

exports.edit = function(req, res) {

    var hotel = req.body.hotel_name;
    var new_item = req.body.ing_name;
    var new_quant = req.body.ing_quant;
    var new_supplier = req.body.ing_supplier;

    Inventory.update(
        {hotel_name:hotel , 'inventory.ing_name' : new_item},
        { $set: {
        'inventory.$.ing_quant': new_quant ,
        'inventory.$.ing_supplier': new_supplier
        }
        },
        function (error, success) {
            if (error) {
                console.log(error);
            } else {
                console.log(success);
                res.send(success);
            }
        }
        )

}
