var Inventory = require('../models/menu');


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
            //console.log(list);
            res.send(list);
        };


    });
}

exports.add = function(req, res) {

    var hotel = req.body.hotel_name;
    var new_item = req.body.dish_name;
    var new_ingr_1 = req.body.ingr_1;
    var new_ingr_2 = req.body.ingr_2;
    var new_ingr_3 = req.body.ingr_3;
    var new_cost = req.body.cost;

    Inventory.findOneAndUpdate(
        {hotel_name:hotel }, 
        { $push: { dishes:{ dish_name : new_item, ingr_1 :new_ingr_1 , ingr_2 :new_ingr_2 , ingr_3 :new_ingr_3, cost: new_cost  }}},
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log("%");
                 console.log(success);
                 res.send(success);
             }
         });

}

exports.remove = function(req, res) {

    var hotel = req.body.hotel_name;
    var new_item = req.body.dish_nam;

    Inventory.findOneAndUpdate(
        {hotel_name:hotel }, 
        { $pull: { inventory:{ dish_name : new_item }}},
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
    var new_item = req.body.dish_name;
    var new_ingr_1 = req.body.ingr_1;
    var new_ingr_2 = req.body.ingr_2;
    var new_ingr_3 = req.body.ingr_3;
    var new_cost = req.body.cost;
    console.log(req.body.cost);

    Inventory.update(
        {hotel_name:hotel , 'dishes.dish_name' : new_item},
        { $set: {
        'dishes.$.ingr_1': new_ingr_1 ,
        'dishes.$.ingr_2': new_ingr_2 ,
        'dishes.$.ingr_3': new_ingr_3 ,
        'dishes.$.cost': new_cost
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
