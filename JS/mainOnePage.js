let bookIndex = 0;

function getData() {
  // getting the values
  let bookName = document.getElementById("book-name").value;
  let descriptionBook = document.getElementById("description-book").value;
  let rate = document.getElementById("rate").value;

  // getting existing values from local storage or creating new arrays if they don't exist
  let bookNames = JSON.parse(localStorage.getItem("book-names")) || [];
  let descriptionBooks =
    JSON.parse(localStorage.getItem("description-books")) || [];
  let rates = JSON.parse(localStorage.getItem("rates")) || [];
  let images = JSON.parse(localStorage.getItem("images")) || [];

  // adding new values to arrays
  bookNames.push(bookName);
  descriptionBooks.push(descriptionBook);
  rates.push(rate);
  if (localStorage.getItem("img-BASE64")) {
    images.push(localStorage.getItem("img-BASE64"));
    localStorage.removeItem("img-BASE64");
  } else {
    images.push(null);
  }

  // saving arrays in local storage
  localStorage.setItem("book-names", JSON.stringify(bookNames));
  localStorage.setItem("description-books", JSON.stringify(descriptionBooks));
  localStorage.setItem("rates", JSON.stringify(rates));
  localStorage.setItem("images", JSON.stringify(images));

  // incrementing book index
  bookIndex++;
}
//Функция преобразует файл в в base64
function getBase64(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
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
