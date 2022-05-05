// document.getElementById("listArticles").addEventListener("click", function () {
//   categories.forEach((cat) => console.log(cat.name));
//   categories.forEach((cat) => addCat(cat.name));
// });

// function addCat(text) {
//   let testUl = document.getElementById("test");
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(text));
//   testUl.appendChild(li);
// }

//DATA

class Article {
  constructor(id, description, brand, price, catId) {
    this.id = id;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.catId = catId;
  }
}

class Category {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

//add cart class

//liste des cat
let info = new Category(1, "Matériel informatique", "Indispendsable à un PC");
let logiciel = new Category(2, "Logiciel", "SA, Antivir");
let pc = new Category(3, "PC", "Laptop et micro ordinateur");
let tel = new Category(4, "Téléphone", "Téléphone mobile");

let categories = new Array(info, logiciel, pc, tel);

//liste des articles
let souris = new Article(1, "Souris", "Logitech", 65, 1);
let tapis = new Article(2, "Tapis souris", "Chaêau bleu", 5, 1);

let articles = new Array(souris, tapis);

let tbodyArticle = document.getElementById("trArticle");

document.getElementById("listA").addEventListener("click", function () {

  articles.forEach(art => {
    let row = document.createElement("tr");
    let desc = document.createElement("td");
    desc.appendChild(document.createTextNode(art.description));
    let brand = document.createElement("td");
    brand.appendChild(document.createTextNode(art.brand));
    let cat = document.createElement("td");
    cat.appendChild(document.createTextNode(art.catId));
    let price = document.createElement("td");
    price.appendChild(document.createTextNode(art.price));
    row.appendChild(desc);
    row.appendChild(brand);
    row.appendChild(cat);
    row.appendChild(price);
    let btnAction = document.createElement("button");
    btnAction.innerHTML = "Ajouter";
    let action = document.createElement("td");
    action.appendChild(btnAction);
    row.appendChild(action);
    tbodyArticle.appendChild(row);
  })
});
