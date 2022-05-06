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

//Variables globales
let tbodyArticle = document.getElementById("bdArticle");
let articleBtn = document.getElementById("listeA");
let blocArticle = document.getElementById("article");
let tbodyCategory = document.getElementById("trCategory");
let catBtn = document.getElementById("listeB");
let blocCategory = document.getElementById("category");
let articlePlace = document.getElementById("infArticle");

//Affichage de la liste des articles
articleBtn.addEventListener("click", function () {
  tbodyArticle.replaceChildren();
  blocArticle.style.display = "block";
  blocCategory.style.display = "none";

  //   console.log(articles.length);

  articles.forEach((art) => {
    let row = document.createElement("tr");
    createTd(row, art.description);
    createTd(row, art.brand);
    createTd(row, art.catId);
    createTd(row, art.price);
    let btnAction = document.createElement("button");
    
    // btnAction.innerHTML = "click me";
    btnAction.onclick = function () {
        addArticleToCart(art);
      alert("hello, world");
    };
    btnAction.innerHTML = "Ajouter";
    let action = document.createElement("td");
    action.appendChild(btnAction);
    row.appendChild(action);
    tbodyArticle.appendChild(row);
  });
});

//afichage de la liste des catégories
catBtn.addEventListener("click", function () {
  blocArticle.style.display = "none";
  blocCategory.style.display = "block";

  categories.forEach((cat) => {
    let row = document.createElement("tr");
    createTd(row, cat.name);
    createTd(row, cat.description);
    let btnAction = document.createElement("button");
    btnAction.innerHTML = "Voir les articles";
    let action = document.createElement("td");
    action.appendChild(btnAction);
    row.appendChild(action);
    tbodyCategory.appendChild(row);
  });
});

//create el td
function createTd(row, text) {
  let td = document.createElement("td");
  td.appendChild(document.createTextNode(text));
  row.appendChild(td);
}
 //addArticle to cart
 function addArticleToCart(art){

 }