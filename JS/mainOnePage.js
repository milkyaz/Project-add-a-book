let bookIndex = 0;

function getData() {
  // getting the values
  let bookName = document.getElementById("book-name").value;
  let descriptionBook = document.getElementById("description-book").value;
  let rate = document.getElementById("rate").value;

  // getting existing values from local storage or creating a new array if it doesn't exist
  let books = JSON.parse(localStorage.getItem("books")) || [];

  // creating a new book object and adding it to the array
  let newBook = {
    name: bookName,
    description: descriptionBook,
    rate: rate,
    image: null,
  };

  if (localStorage.getItem("img-BASE64")) {
    newBook.image = localStorage.getItem("img-BASE64");
    localStorage.removeItem("img-BASE64");
  }

  books.push(newBook);

  // saving the array of book objects in local storage
  localStorage.setItem("books", JSON.stringify(books));

  // incrementing book index
  bookIndex++;
}

//Функция преобразует файл в в base64
function getBase64(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
}

document
  .querySelector("#adminDealImg")
  .addEventListener("change", async (e) => {
    const data = await getBase64(e.target.files[0]);
    localStorage.setItem("img-BASE64", data);
  });
