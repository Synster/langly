
var filteredData = {},
	currSym;

for (symbol in language.punjabi.symbols) {
	currSym = language.punjabi.symbols[symbol];
	if (currSym.type === "vowel" || currSym.type === "consonant") {
		filteredData[symbol] = currSym;
	}
}

var filteredKeys = Object.keys(filteredData),
	newLetter = filteredData[filteredKeys[0]];

var _dailyLetter = document.getElementById("dailyLetter");

var updateLetter = (function() {
	var	_otherLang = document.getElementById("otherLang"),
		_pronunciation = document.getElementById("pronunciation");

	return function(newLetter) {
		_dailyLetter.querySelector(".letter").innerHTML = newLetter.symbol || "";
		_dailyLetter.querySelector(".desc").innerHTML = newLetter.description || "";

		_otherLang.querySelector(".hindi").innerHTML = newLetter.symbol_hindi || "";
		_otherLang.querySelector(".english").innerHTML = newLetter.symbol_english || "";

		_pronunciation.querySelector(".hindi").innerHTML = newLetter.symbol_hindi || "";
		_pronunciation.querySelector(".english").innerHTML = newLetter.symbol_english || "";
		_pronunciation.querySelector(".punjabi").innerHTML = newLetter.pronunciation_punjabi || "";
	};
}());

updateLetter(newLetter);

var count = 0;
_dailyLetter.querySelector(".prev").addEventListener("click", function(e) {
	e.preventDefault();
	if (count > 0) {
		updateLetter(filteredData[filteredKeys[--count]]);
	}
});
_dailyLetter.querySelector(".next").addEventListener("click", function(e) {
	e.preventDefault();
	if (count <= filteredKeys.length) {
		updateLetter(filteredData[filteredKeys[++count]]);
	}
});