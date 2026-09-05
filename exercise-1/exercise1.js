const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());
let books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
  },
  {
    id: 5,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
  },
];
// GET All Books
app.get("/", (req, res) => {
  res.json(books);
});
//GET Single Book
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not Found");

  res.json(book);
});

//POST create new Books
app.post("/books", (req, res) => {
  const newBook = {
    id: Math.max(...books.map((book) => book.id)),
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.json(`created Book is ${newBook.title}`);
});

//PUT Update Book
app.put("/books/:id", (req, res) => {
  const book = books.find((book) => book.id == req.params.id);
  if (!book) return res.status(404).send("Book not Found");

  ((book.title = req.body.title),
    (book.author = req.body.author),
    res.json(book));
});
//DELETE book
app.delete("/books/:id", (req, res) => {
  books = books.filter((b) => b.id != req.params.id);

  res.send(`Deleted Book Id ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
