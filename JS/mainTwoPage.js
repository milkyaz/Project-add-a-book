function displayBooks() {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  let bookList = document.querySelector("#books-list");

  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookItem = document.createElement("div");
    bookItem.classList.add("book__flex-box");
    bookItem.innerHTML = `
        <div class="book1">
            <h3 class="name__booke-title">Имя книги:</h3> ${book.name}<br>
            <h3 class="description__book-title">Описание книги:</h3> <p class='descriptionBook__text'>${book.description}</p><br>
            <h3 class="rate__title">${book.rate} <span>из 10</h3></span><br>
           <div class="item">
                 <button data-modal>Открыть</button>
                      <div class="modal hide">
                         <div data-close class="modal-close"><span class = "symbol__close">&times;</span></div>
                             <div class = "modal__flex-box">
                              <img src="${book.image}" class="img__book">
                                 <div class = "modal__text-box">
                                  <h3> ${book.name}</h3><br>
                                  <p>${book.description}</p>
                                 </div>
                              </div>
                                  </div>
                                     </div>
            <span id="data3"></span> <br>
            <span id="data4"></span> <br>
        </div>
      `;

    if (book.image) {
      let imgElement = document.createElement("img");
      imgElement.src = book.image;
      imgElement.classList.add("img__book");
      bookItem.prepend(imgElement);
    }

    bookList.appendChild(bookItem);
  }

  /////////////////////////////МОДАЛЬНОЕ ОКНО НАЧАЛО
  const modalTrigger = document.querySelectorAll("[data-modal]");
  const modalCloseBtn = document.querySelectorAll("[data-close]");

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
