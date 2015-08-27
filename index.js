module.exports = {
	brainfuckify: function(input) {
		var output = ""
		var prev = 0
		for (var i = 0, len = input.length; i < len; i++) {
			var cur = input[i].charCodeAt()
			var dif = cur - prev
			if (dif < 0) {
				output += Array(Math.abs(dif)+1).join("+")+"[>-<-]>.<"
			} else if (dif > 0) {
				output += Array(dif+1).join("+")+"[>+<-]>.<"
			} else {
				output += ">.<"
			}
			prev = cur
		}
		return output
	}
}