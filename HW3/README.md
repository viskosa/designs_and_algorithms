The Home Task need to be done using Typescript.

You need to implement:
1.	class Page:
  a.	property “pageNumber”
  b.	property “pageType” (“with text” for Book, “with article” for Magazine, “with images” for Comics)
  c.	property “pageMaterial” (“simple paper” for Book, “glossy paper” for Magazine and Comics)

2.	class Pages which is wrapper for array of Page instances
  a.	should provide appropriate methods to communicate with iterator

3.	PagesIterable mixin:
  a.	You can use 3rd library or Symbol.iterator to implement PagesIterable mixin
  b.	the “for..of”, spread operator (“…”) and other data consumers should work with your iterables (Book, Magazine, Comics)

4.	abstract class Item with abstract toString method. Make Book, Magazine and Comics inherited from Item class. Mix Iterable behavior into Item’s prototype 

5.	class Book (should be Iterable):
  a.	properties: “pages”, “title”, “author”
  b.	setters and getters for “title” and “author”
  c.	“toString” -> “Book: {book title} by {author} with number of pages: {number}”
  d.	“pages” property keeps instance of Pages class

6.	class Magazine (should be Iterable):
  a.	properties: “pages”, “title”
  b.	setters and getters for “title”
  c.	“toString” -> “Magazine: {title} with number of pages: {number}”
  d.	“pages” property keeps instance of Pages class

7.	class Comics (should be Iterable): 
  a.	properties: “pages”, “title”, “author”, “artist”
  b.	setters and getters for “title”, “author” and “artist”
  c.	“toString” -> “Comics: {title} by {author}, the artist is {artist}, number of pages: {number}”
  d.	pages” property keeps instance of Pages class

Extra mile:
Implement PageFactory, so it will incapsulate pages creation logic.

Usage:
 

You also can run jasmine tests using ‘test’ script from package.json to make sure that main requirements are met.
