    var Until={
        getClientIp:function(req) {
            var ipAddress;
            var forwardedIpsStr = req.header('HTTP_X_FORWARDED_FOR'); 
            console.log(forwardedIpsStr);
            if (forwardedIpsStr) {
                var forwardedIps = forwardedIpsStr.split(',');
                ipAddress = forwardedIps[0];
            }
            if (!ipAddress) {
                ipAddress = req.connection.remoteAddress;
            }
            console.log(ipAddress);
            return ipAddress;
        }
    }

    module.exports=Until;