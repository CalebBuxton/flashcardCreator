// module.exports =
// console.log("out of function")
// var newBasic = function(front, back) {
// 	console.log("in function")
// 	this.front = front;
// 	this.back = back;
// }



function newBasic(front, back) {
	console.log("in function")
	this.front = front;
	this.back = back;
}

module.exports = newBasic;