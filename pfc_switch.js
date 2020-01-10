module.exports = function(RED) {
    var exec = require("child_process").exec;
    function PFC_SWITCH(config) {
		RED.nodes.createNode(this, config);
        var node = this;
		if (config.pinnumber) {
			while (true) {
				exec('python2 "' + __dirname + '/pfc_switch.py" ' + config.pinnumber, function(err, stdout, stderr) {
					if (err) {
						node.error(err, msg); 
					} else {
						if (stdout.indexOf("true") != -1) {
							msg2 = { payload: true };
							node.send(msg2);
						} else {
							node.error("Unknown Error", msg);
						}
					}
				});
			}
		} else {
			node.error("Please set the pin number", msg); 
		}
        this.on("close", function() {
        });
    }
    RED.nodes.registerType("pfc_switch", PFC_SWITCH);
}