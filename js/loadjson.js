var language = {};

var loadJSON = function(path, lang) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			language[lang] = JSON.parse(xhr.response);
		}
	};

	xhr.open("GET", path, false);
	xhr.send();
	return xhr;
};

var loadPunjabi = loadJSON("../punjabiAppData.json", "punjabi");