function Cloze (text, cloze) {
	if (text.includes(cloze)){
		this.cloze = cloze;
		this.partial = text.replace(cloze, "...");
		this.full = text;
	}
	else {
		console.log("There is an error")
	}
}

module.exports = Cloze;