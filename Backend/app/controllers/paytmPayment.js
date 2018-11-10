checksum_lib = require("../../utils/checksum.js")
let url = "http://18.136.208.244:8080";


exports.initiatePayment = function (req, res){
    var params 					= {};
    // params = req.body
	params['MID'] 				= 'iAqnCr74514021156008';
	params['WEBSITE']			= 'DEFAULT';
	params['CHANNEL_ID']		= 'WAP';
	params['INDUSTRY_TYPE_ID']	= 'Retail';
	params['ORDER_ID']			= 'ORDER_'  + new Date().getTime();
	params['CUST_ID'] 			= 'USER_'  + new Date().getTime();
    params['TXN_AMOUNT']			= req.query.amount;
    params.CALLBACK_URL = url.concat("/api/paytm/transactionComplete");

	checksum_lib.genchecksum(params, "_2NOnBMEh!ktAueq", function (err, checksum) {
        // res.json(params)

        // var txn_url = "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
		var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for prod
		
		var form_fields = "";
		for(var x in params){
			form_fields += "<input type='hidden' name='"+x+"' value='"+params[x]+"' >";
		}
		form_fields += "<input type='hidden' name='CHECKSUMHASH' value='"+checksum+"' >";

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="'+txn_url+'" name="f1">'+form_fields+'</form><script type="text/javascript">document.f1.submit();</script></body></html>');
		res.end();


    });
}

exports.transactionComplete = function(req, res) {
    if (req.body.STATUS == "TXN_SUCCESS") {
        var txn_id = response.TXNID;
        var paymentmode = response.PAYMENTMODE;
        res.send(req.body.STATUS)
        // other details and function after payment transaction
    } else {
        // error code will be available in RESPCODE
        // error list page https://docs.google.com/spreadsheets/d/1h63fSrAmEml3CYV-vBdHNErxjJjg8-YBSpNyZby6kkQ/edit#gid=2058248999
        res.send("Transaction Failed for reason " + response.RESPMSG);
    }    
}   