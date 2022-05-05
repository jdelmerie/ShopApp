

//DATA

class Article {
  constructor(id, description, brand, price, catId) {
    this.id = id;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.catId = catId;
  }

  getCatName() {
    let catName;
    categories.forEach((cat) => {
      if (cat.id == this.catId) {
        catName = cat.name;
      }
    });
    return catName;
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
let laptop = new Article(3, "Laptop", "HP", 1199, 3);
let cd = new Article(4, "CD", "CETME", 250, 3);
let batterie = new Article(5, "Batterie Laptop", "HP", 85, 1);
let iphone = new Article(6, "iPhone 50", "Apple", 2000, 4);
let samsung = new Article(7, "S10", "Samsung", 1500, 4);
let clavier = new Article(8, "Clavier", "Logitech", 80, 1);
let articles = new Array(
  souris,
  tapis,
  laptop,
  cd,
  batterie,
  iphone,
  samsung,
  clavier
);


//Variables globales
let tbodyArticle = document.getElementById("trArticle");
let articleBtn = document.getElementById("listeA");
let articleBtn2=document.getElementById("listeA2");
let blocArticle = document.getElementById("article");
let tbodyCategory = document.getElementById("trCategory");
let catBtn = document.getElementById("listeB");
let catBtn2 = document.getElementById("listeB2");
let cartBtn = document.getElementById("listeC");
let cartBtn2 = document.getElementById("listeC2");
let blocCategory = document.getElementById("category");
let trArticleByCat = document.getElementById("trArticleByCat");

//Affichage de la liste des articles
articleBtn.addEventListener("click", function () {
  tbodyArticle.replaceChildren();
 
  offArticle();
  onCat()
  onCart()
  articles.forEach((art) => {
    let row = document.createElement("tr");
    createTd(row, art.description);
    createTd(row, art.brand);
    createTd(row, art.getCatName());
    createTd(row, art.price + " €");
    let btnAction = document.createElement("button");
    btnAction.innerHTML = "Ajouter";
    let action = document.createElement("td");
    action.appendChild(btnAction);
    row.appendChild(action);
    tbodyArticle.appendChild(row);
  });
});
//afichage de la liste des catégories
catBtn.addEventListener("click", function () {
  tbodyCategory.replaceChildren();
 
  onArticle();
  offCat()
  onCart()
  categories.forEach((cat) => {
    let row = document.createElement("tr");
    createTd(row, cat.name);
    createTd(row, cat.description);
    let btnAction = document.createElement("button");
    btnAction.innerHTML = "Voir les articles";
    btnAction.value = cat.id;
    btnAction.classList.add("btnCat");
    let action = document.createElement("td");
    action.appendChild(btnAction);
    row.appendChild(action);
    tbodyCategory.appendChild(row);
  });

  let catBtns = document.getElementsByClassName("btnCat");

  for (let j = 0; j < catBtns.length; j++) {
    catBtns[j].addEventListener("click", function () {
      trArticleByCat.replaceChildren();
      let catId = catBtns[j].value;
      articleByCat.style.display = "block";
      articles.forEach((art) => {
        if (art.catId == catId) {
          catListName.innerHTML = art.getCatName();
          let newRow = document.createElement("tr");
          createTd(newRow, art.description);
          createTd(newRow, art.brand);
          createTd(newRow, art.getCatName());
          createTd(newRow, art.price + " €");
          let btnAction = document.createElement("button");
          btnAction.innerHTML = "Ajouter";
          let action = document.createElement("td");
          action.appendChild(btnAction);
          newRow.appendChild(action);
          trArticleByCat.appendChild(newRow);
        }
      });
    });
  }
});
//clear box
function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}
//create el td
function createTd(row, text) {
  let td = document.createElement("td");
  td.appendChild(document.createTextNode(text));
  row.appendChild(td);
}

//gestion btn
function offArticle(){
  articleBtn.style.display = "none";
  articleBtn2.style.display="block";
}
function onArticle(){
  articleBtn.style.display = "block";
  articleBtn2.style.display="none";
}
function offCat(){
  catBtn.style.display = "none";
  catBtn2.style.display="block";
}
function onCat(){
  catBtn.style.display = "block";
  catBtn2.style.display="none";
}
function offCart(){
  cartBtn.style.display = "none";
  cartBtn2.style.display="block";
}
function onCart(){
  cartBtn.style.display = "block";
  cartBtn2.style.display="none";
}
