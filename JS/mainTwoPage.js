function displayBooks() {
  let bookNames = JSON.parse(localStorage.getItem("book-names")) || [];
  let descriptionBooks =
    JSON.parse(localStorage.getItem("description-books")) || [];
  let rates = JSON.parse(localStorage.getItem("rates")) || [];
  let images = JSON.parse(localStorage.getItem("images")) || [];

  for (let i = 0; i < bookNames.length; i++) {
    let bookName = bookNames[i];
    let descriptionBook = descriptionBooks[i];
    let rate = rates[i];
    let img = images[i];
    let containerBook = document.querySelector(".box");
    let bookList = document.getElementById("books-list");
    let bookItem = document.createElement("div");
    bookItem.classList.add("book__flex-box");
    bookItem.innerHTML = `
 
    <div class="book1">
        <h3 class="name__booke-title">Имя книги:</h3> ${bookName}<br>
        <h3 class="description__book-title">Описание книги:</h3> <p class ='descriptionBook__text'>${descriptionBook}</p><br>
        <h3 class="rate__title">${rate} <span>из 10</h3></span><br>
       <div class="item">
            
            <button data-modal>Открыть</button>
                 <div class="modal hide">
                    <div data-close class="modal-close"><span class = "symbol__close">&times;</span></div>
                        <div class = "modal__flex-box">
                         <img src="${img}" class="img__book">
                            <div class = "modal__text-box">
                             <h3> ${bookName}</h3><br>
                             <p>${descriptionBook}</p>
                            </div>
                         </div>
                             </div>
                                </div>
        <span id="data3"></span> <br>
        <span id="data4"></span> <br>

    </div>

        `;
    //Добавляет изображение
    if (img) {
      let imgElement = document.createElement("img");
      imgElement.src = img;
      imgElement.classList.add("img__book");
      bookItem.prepend(imgElement);
    }
    bookList.appendChild(bookItem);
  }

  /////////////////////////////МОДАЛЬНОЕ ОКНО НАЧАЛО
  const modalTrigger = document.querySelectorAll("[data-modal]");
  const modalCloseBtn = document.querySelectorAll("[data-close]");
  let containerBook = document.querySelector(".box");

  let modal = null;

  modalTrigger.forEach((el) => {
    el.addEventListener("click", () => {
      modal = el.parentElement.querySelector(".modal");
      modal.classList.add("show");
      modal.classList.remove("hide");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    modal = null;
  }

  modalCloseBtn.forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  /////////////////////////////МОДАЛЬНОЕ ОКНО НАЧАЛО КОНЕЦ
}

displayBooks();
