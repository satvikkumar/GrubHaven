checksum_lib = require("../../utils/checksum.js")

exports.generateChecksum = function (req, res){
    // var params 					= {};
    params = req.body
	params['MID'] 				= 'iAqnCr74514021156008';
	params['WEBSITE']			= 'DEFAULT';
	params['CHANNEL_ID']		= 'WAP';
	params['INDUSTRY_TYPE_ID']	= 'Retail';
	params['ORDER_ID']			= 'TEST_'  + new Date().getTime();
	params['CUST_ID'] 			= 'Customer001';
    // params['TXN_AMOUNT']			= '1.00';
    
    params.CALLBACK_URL = "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=" + params.ORDER_ID;


	checksum_lib.genchecksum(params, "_2NOnBMEh!ktAueq", function (err, checksum) {
        params.CHECKSUM = checksum;
        res.json(params)
    });
}