import { Page } from "./page";
import { Pages } from "./pages";
import { Book } from "./book";
import { Magazine } from "./magazine";
import { Comics } from "./comics";

const book = new Book('Harry Potter', 'J.K.Rowling', new Pages([
  new Page(1, 'with text', 'simple paper'),
  new Page(2, 'with text', 'simple paper'),
  new Page(3, 'with text', 'simple paper'),
  new Page(4, 'with text', 'simple paper')
]))

for (let page of book) {
  // The Book: ${Harry Potter}, author: ${J.K.Rowling}, it has ${4} pages, 
  // here is page with text #${1} and it's material is ${simple paper}
  console.log(page);
}

const magazine = new Magazine('G.Q', new Pages([
  new Page(1, 'with article', 'glossy paper'),
  new Page(2, 'with article', 'glossy paper')
]))

for (let page of magazine) {
  // The Magazine: ${G.Q} it has ${2} pages, 
  // here is page with article #${1} and it's material is ${glossy paper}
  console.log(page);
}

const comics = new Comics('Spider-Man', 'Stan Lee', 'Some artist', new Pages([
  new Page(1, 'with images', 'glossy paper'),
  new Page(2, 'with images', 'glossy paper')
]))

for (let page of comics) {
  // The Comics: ${Spider-Man}, author: ${Stan Lee}, artist: ${Some artist}, it has ${2} pages, 
  // here is page with text #${1} and it's material is ${glossy paper}
  console.log(page);
}
