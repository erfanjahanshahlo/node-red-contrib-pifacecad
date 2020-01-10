module.exports = function(RED) {
    var exec = require("child_process").exec;
    function PFC_LiquidCrystal(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on("input", function(msg) {
			text = msg.payload.replace(" ", "#/@$%");
			exec('python2 "' + __dirname + '/pfc_lcd.py" ' + text, function(err, stdout, stderr) {
				if (err) {
					node.error(err, msg); 
					node.status({fill: "red", shape: "dot", text: "ERROR"});
				} else {
					node.status({fill: "green", shape: "dot", text: "OK"});
				}
			});
        });
        this.on("close", function() {
        });
    }
    RED.nodes.registerType("pfc_lcd", PFC_LiquidCrystal);
}