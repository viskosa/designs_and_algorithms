// Адаптер - структурный паттерн проектирования, который позволяет объектам с несовместимыми интерфейсами работать вместею
// Этот паттерн оборачивает несовместимый с чем-то объект и делает его совместимым, не изменяя исходный код.

function Search (text, word) {
	var text = text;
	var word = word;

	this.searchWordInText = function () {
		return text;
	};

	this.getWord = function () {
		return word;
	};
};

function SearchAdapter (adaptee) {
	this.searchWordInText = function () {
		return 'Эти слова ' + adaptee.getWord()
			+ ' найдены в тексте ' + adaptee.searchWordInText();
	};
};

var search = new Search("текст", "слова");
var searchAdapter = new SearchAdapter(search);
searchAdapter.searchWordInText();