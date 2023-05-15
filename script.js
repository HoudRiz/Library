let btn = document.querySelector(".circle-btn");
let plusIcon = document.querySelector(".plus-icon");
let formContainer = document.querySelector(".form-container");
let form = document.querySelector("#form");
let bookLibrary = [];
let displayContainer = document.querySelector(".display-container");
let bookNumber = document.querySelector(".book-number");
let sBookNumber = document.querySelector(".side-book-number");
let readNumber = document.querySelector(".read-number");
let sReadNumber = document.querySelector(".side-read-number");
let completedNUmber = document.querySelector(".completed-number");
let sCompletedNUmber = document.querySelector(".side-completed-number");
let totalPageNumber = document.querySelector(".tp-number");
let sTotalPageNumber = document.querySelector(".side-tp-number");
let titleName = document.querySelector(".name");
let sidebar = document.querySelector(".sidebar");
let navButton = document.querySelector(".nav-button");

function toggleColor() {
  plusIcon.classList.toggle("rotate");
  btn.classList.toggle("clicked");
  formContainer.classList.toggle("unhidden");
  form.reset();
}

function book(title, author, read, total, coverPage, file) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.total = total;
  this.coverPage = coverPage;
  this.file = file;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let read = document.querySelector("#read");
  let total = document.querySelector("#total");
  let coverPage = document.querySelector("#cover-page");
  let file = coverPage.files[0];
  let url = URL.createObjectURL(file);

  const addBook = new book(
    title.value,
    author.value,
    read.value,
    total.value,
    url,
    file
  );
  bookLibrary.push(addBook);

  displayContainer.innerHTML = "";
  for (let books of bookLibrary) {
    coverPage.src = URL.createObjectURL;
    let indexNum = bookLibrary.indexOf(books);
    let cardContent = `<div class="image-container" id =${indexNum}>
    <div class="card-top">
    <button class="card-edit" data-index-number = ${indexNum} onclick = "cardEdit(event)">
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_15_551)">
    <path d="M11.9624 0.582401C11.6252 0.217101 11.177 0.0162506 10.7 0.0162506C10.223 0.0162506 9.7748 0.217101 9.4376 0.582401L1.7876 8.8699C1.7564 8.9037 1.733 8.944 1.718 8.98885L0.518 12.5638C0.4784 12.6828 0.5054 12.8154 0.5876 12.9044C0.6446 12.9662 0.7214 12.9994 0.8 12.9994C0.8342 12.9994 0.869 12.9928 0.9026 12.9798L4.2026 11.6799C4.244 11.6636 4.2812 11.6376 4.3124 11.6045L11.9624 3.31695C12.2996 2.95165 12.485 2.4661 12.485 1.94935C12.485 1.4326 12.2996 0.947051 11.9624 0.581751V0.582401ZM3.935 11.0942L1.3016 12.1316L2.2592 9.27875L8.9 2.08455L10.5758 3.9L3.935 11.0942ZM11.5376 2.8574L11 3.4398L9.3242 1.62435L9.8618 1.04195C10.0856 0.799501 10.3832 0.666251 10.6994 0.666251C11.0156 0.666251 11.3132 0.799501 11.537 1.04195C11.7608 1.2844 11.8838 1.6068 11.8838 1.94935C11.8838 2.2919 11.7608 2.6143 11.537 2.85675L11.5376 2.8574Z" fill="currentColor"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_15_551">
                  <rect width="12" height="13" fill="currentColor" transform="translate(0.5)"/>
                  </clipPath>
                  </defs>
                  </svg>
          </button>
          <div class="card-title">${books.title}
          <div class="author">${books.author}</div>
          </div>
          <button class="card-delete" data-index-number = ${indexNum} onclick = "cardDelete(event)">
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.9375 0.25C4.64306 0.25 4.34204 0.353269 4.12891 0.566406C3.91577 0.779543 3.8125 1.08056 3.8125 1.375V1.9375H0.4375V3.0625H1V12.0625C1 12.9875 1.76245 13.75 2.6875 13.75H9.4375C10.3625 13.75 11.125 12.9875 11.125 12.0625V3.0625H11.6875V1.9375H8.3125V1.375C8.3125 1.08056 8.20923 0.779543 7.99609 0.566406C7.78296 0.353269 7.48194 0.25 7.1875 0.25H4.9375ZM4.9375 1.375H7.1875V1.9375H4.9375V1.375ZM2.125 3.0625H10V12.0625C10 12.3745 9.74951 12.625 9.4375 12.625H2.6875C2.37549 12.625 2.125 12.3745 2.125 12.0625V3.0625ZM3.25 4.75V10.9375H4.375V4.75H3.25ZM5.5 4.75V10.9375H6.625V4.75H5.5ZM7.75 4.75V10.9375H8.875V4.75H7.75Z" fill="currentColor"/>
              </svg>                    
              </button>
              </div>
              <img src = ${books.coverPage}>
          <div class="card-bottom">
          <div class="number-read">${books.read} | ${books.total}</div>
          <progress id='p0' value='${books.read}' max='${books.total}'></progress>

          </div>
          </div>`;
    displayContainer.innerHTML += cardContent;
  }
  displayStat();
});

function bookCount() {
  bookNumber.innerText = bookLibrary.length;
  sBookNumber.innerText = bookLibrary.length;
}

function readCount() {
  let readSum = bookLibrary.reduce((sum, book) => sum + parseInt(book.read), 0);
  readNumber.innerHTML = readSum;
  sReadNumber.innerHTML = readSum;
}

function totalPageCount() {
  let readSum = bookLibrary.reduce(
    (sum, book) => sum + parseInt(book.total),
    0
  );
  totalPageNumber.innerHTML = readSum;
  sTotalPageNumber.innerHTML = readSum;
}

function completedCount() {
  let completedCounter = 0;
  for (books of bookLibrary) {
    if (books.read === books.total) {
      completedCounter++;
    }
    completedNUmber.innerText = completedCounter;
    sCompletedNUmber.innerText = completedCounter;
  }
}

function displayStat() {
  bookCount();
  readCount();
  totalPageCount();
  completedCount();
}

function titleEdit() {
  console.log("woooo");
}

function cardDelete(event) {
  let index = event.currentTarget.dataset.indexNumber;
  let deletedCard = document.getElementById(`${index}`);
  deletedCard.remove();
  bookLibrary.splice(`${index}`, 1);
  displayStat();
}

function cardEdit(event) {
  let index = event.currentTarget.dataset.indexNumber;
  let editedCard = document.getElementById(`${index}`);
  toggleColor();
  displayStat();
  formFilling(index);
  cardDelete(event);
}

// fills form when clicked on edit button (needs to fill the file space)
function formFilling(index) {
  let currentBook = bookLibrary[index];
  document.querySelector("#title").value = currentBook.title;
  document.querySelector("#author").value = currentBook.author;
  document.querySelector("#read").value = currentBook.read;
  document.querySelector("#total").value = currentBook.total;
  // let fileList = [];
  // fileList.push(currentBook.file);
  // document.querySelector("#cover-page").files[0] = file;
}

document.addEventListener("click", (e) => {
  let isClosest = e.target.closest(".sidebar");
  let closestNavButton = e.target.closest(".nav-button"); //sidebar keeps closing when pressed on nav button
  if (!isClosest && !closestNavButton && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }
});

// opens sidebar
function popSide() {
  sidebar.classList.add("open");
}
