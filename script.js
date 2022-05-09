//DATA
class Article {
  constructor(id, description, brand, price, catId, quantity = 1) {
    this.id = id;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.catId = catId;
    this.quantity = quantity;
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

//panier
let cart = localStorage;

//Variables globales
let tbodyArticle = document.getElementById("trArticle");
let articleBtn = document.getElementById("listeA");
let blocArticle = document.getElementById("article");
let tbodyCategory = document.getElementById("trCategory");
let catBtn = document.getElementById("listeB");
let catBtn2 = document.getElementById("listeB2");
let articleBtn2 = document.getElementById("listeA2");
let cartBtn = document.getElementById("listeC");
let cartBtn2 = document.getElementById("listeC2");
let blocCategory = document.getElementById("category");
let trArticleByCat = document.getElementById("trArticleByCat");
let catListName = document.getElementById("catListName");
let trCart = document.getElementById("trCart");
let blocCart = document.getElementById("cart");
let tPrice = document.getElementById("total");

//Affichage de la liste des articles
articleBtn.addEventListener("click", function () {
  tbodyArticle.replaceChildren();
  blocArticle.style.display = "block";
  blocCategory.style.display = "none";
  blocCart.style.display = "none";
  offArticle();
  onCat();
  onCart();
  articles.forEach((art) => {
    let row = document.createElement("tr");
    createTd(row, art.description);
    createTd(row, art.brand);
    createTd(row, art.getCatName());
    createTd(row, art.price);
    let btnAction = document.createElement("button");
    btnAction.innerHTML = "Ajouter";
    btnAction.value = art.id;
    btnAction.classList.add("addArticle");
    let action = document.createElement("td");
    action.appendChild(btnAction);
    row.appendChild(action);
    tbodyArticle.appendChild(row);
  });

  //ajout d'un article
  let addBtns = document.getElementsByClassName("addArticle");
  // for (let i = 0; i < addBtns.length; i++) {
  for (let addBt of addBtns) {
    addBt.addEventListener("click", function () {
      let articleId = addBt.value;
      articles.forEach((art) => {
        if (articleId == art.id) {
          for (let i = 0; i < cart.length; i++) {
            if (cart.key(i) == art.id) {
              art.quantity += 1;
            }
          }
          localStorage.setItem(articleId, art.quantity);
          console.log("article ajouté");
        }
      });
    });
  }
});

//afichage de la liste des catégories
catBtn.addEventListener("click", function () {
  tbodyCategory.replaceChildren();
  blocArticle.style.display = "none";
  blocCategory.style.display = "block";
  blocCart.style.display = "none";
  onArticle();
  offCat();
  onCart();
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

  //gestion de l'affichage des articles par catégorie
  for (let catB of catBtns) {
    catB.addEventListener("click", function () {
      trArticleByCat.replaceChildren();
      let catId = catB.value;
      articleByCat.style.display = "block";
      articles.forEach((art) => {
        if (art.catId == catId) {
          catListName.innerHTML = art.getCatName();
          let newRow = document.createElement("tr");
          createTd(newRow, art.description);
          createTd(newRow, art.brand);
          createTd(newRow, art.getCatName());
          createTd(newRow, art.price);
          let btnAction = document.createElement("button");
          btnAction.innerHTML = "Ajouter";
          btnAction.value = art.id;
          btnAction.classList.add("addArticl");
          let action = document.createElement("td");
          action.appendChild(btnAction);
          newRow.appendChild(action);
          trArticleByCat.appendChild(newRow);
        }
        //ajout d'un article
  let addBtns = document.getElementsByClassName("addArticl");
  // for (let i = 0; i < addBtns.length; i++) {
  for (let addBt of addBtns) {
    addBt.addEventListener("click", function () {
      let articleId = addBt.value;
      articles.forEach((art) => {
        if (articleId == art.id) {
          for (let i = 0; i < cart.length; i++) {
            if (cart.key(i) == art.id) {
              art.quantity += 1;
            }
          }
          localStorage.setItem(articleId, art.quantity);
          console.log("article ajouté");
        }
      });
    });
  }
      });
    });
  }
});

//affichage du panier
cartBtn.addEventListener("click", function () {
  trCart.replaceChildren();
  blocArticle.style.display = "none";
  blocCategory.style.display = "none";
  blocCart.style.display = "block";
  document.getElementById("cartTable").style.display = "block";

  onArticle();
  onCat();
  offCart();

  let totalPrice = 0;

  console.log(cart);
  console.log(articles);
  for (let i = 0; i < cart.length; i++) {
    articles.forEach((art) => {
      if (cart.key(i) == art.id) {
        let cartRow = document.createElement("tr");
        createTd(cartRow, art.description);
        createTd(cartRow, art.brand);
        createTd(cartRow, art.getCatName());
        createTd(cartRow, art.price);
        createTd(cartRow, cart.getItem(art.id));
        let btnAction = document.createElement("button");
        btnAction.classList.add("deleteArticle")
        btnAction.innerHTML = "Supprimer";
        btnAction.value = art.id;
        let action = document.createElement("td");
        action.appendChild(btnAction);
        cartRow.appendChild(action);
        trCart.appendChild(cartRow);
        
        //
        totalPrice +=art.price*art.quantity;
      }
    });
  }
  tPrice.innerHTML = totalPrice;
 

  //supprimer un article 
  let deleteBtns = document.getElementsByClassName("deleteArticle");
  for(let delet of deleteBtns){
    
    delet.addEventListener("click", function(){
      // console.log(document.getElementsByTagName("tr")[delet.value].getElementsByTagName("td")[3].textContent)
      let deletePrice = document.getElementsByTagName("tr")[delet.value].getElementsByTagName("td")[3].textContent;
     
      if(cart.getItem(delet.value) == 1){
        localStorage.removeItem(delet.value);
      $(this).closest('tr').remove();
      tPrice.innerHTML = totalPrice - parseInt(deletePrice); //document.getElementsByTagName("tr")[delet.value].getElementsByTagName("td")[3].textContent;
      }else{
      //   localStorage.removeItem(delet.value);
      // $(this).closest('tr').remove();
      cart.setItem(delet.value, cart.getItem(delet.value)-1)
     // console.log(document.getElementsByTagName("tr")[delet.value])
      let q = document.getElementsByTagName("tr")[delet.value].getElementsByTagName("td")[4];
      console.log(q)
      //document.getElementsByTagName("tr")[delet.value].getElementsByTagName("td")[4].innerText = cart.getItem(delet.value)-1;
      tPrice.innerHTML = totalPrice - parseInt(deletePrice); 
      }
      
    })
  }
  //Valider panier
  let validateCart = document.getElementById("cartValidate");
  
  validateCart.addEventListener("click", function () {
    let text = "Voulez-vous vraiment valider le panier!\nEither OK or Cancel.";
    if (confirm(text) == true) {
      text = "yes";
    } else {
      text = "no";
    }
    if(text=="yes"){
      cart.clear();
      document.getElementById("cartTable").style.display = "none";
      document.getElementById("cartEmpty").innerHTML = "Votre panier est vide - Merci pour l'achat"
    }
    
  })
});






//create el td
function createTd(row, text) {
  let td = document.createElement("td");
  td.appendChild(document.createTextNode(text));
  row.appendChild(td);
}

//gestion btn
function offArticle() {
  articleBtn.style.display = "none";
  articleBtn2.style.display = "block";
}

function onArticle() {
  articleBtn.style.display = "block";
  articleBtn2.style.display = "none";
}

function offCat() {
  catBtn.style.display = "none";
  catBtn2.style.display = "block";
}

function onCat() {
  catBtn.style.display = "block";
  catBtn2.style.display = "none";
}

function offCart() {
  cartBtn.style.display = "none";
  cartBtn2.style.display = "block";
}

function onCart() {
  cartBtn.style.display = "block";
  cartBtn2.style.display = "none";
}


