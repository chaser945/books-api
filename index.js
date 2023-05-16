async function getBooks() {
  let response = await fetch(
    "https://api.nytimes.com/svc/books/v3/lists/business-books.json?api-key=3N0q2kLobHvIbACAlExjrgpE9kaiBF90 "
  );
  let data = await response.json();
  console.log(data);
  return data;
}

getBooks().then((data) => {
  displayBooks(data);
});

function displayBooks(data) {
  let booksHtml = data.results.books
    .map((book) => {
      console.log(book);
      const { book_image, author, title } = book;
      // console.log(title);
      return `<div class="book-card">
        <img alt="a book" src="${book_image}" />
        <h3 class="author-name" >Author: ${author}</h3>
        <h3 class="book-title" >Book Title: ${title}</h3>
    </div>`;
    })
    .join("");

  document.body.innerHTML = `<div class="wrapper" >${booksHtml}</div>`;
}
