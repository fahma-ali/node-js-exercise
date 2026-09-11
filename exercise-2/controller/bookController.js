import Book from "../model/book.js";
export const createBook = async(req, res) => {
    const book = await Book.create(req.body)
    res.status(201).json(book);
}
export const getBook = async (req, res) => {
    const {id}=req.params
    const book = await Book.findById(id)
    if (!book) return res.status(404).send("book not found")
    res.status(200).json(book)
}
export const getBooks = async (req, res) => {
    const books = await Book.find()
    if (!books) return res.status(404).send("books not found")
    res.status(200).json(books)

}
export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id,req.body,{new:true})
        if (!book) return res.status(404).send("book not found")
        res.json(book)
    } catch (error) {
        res.status(500).json({message:error.message})
 }
}
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        const book = await Book.findByIdAndDelete(id)
        if (!book)
            return res.status(404).send(`can not be deleted using ${id}`)
        res.status(200).json({
            message: "Book deleted successfully",
            book
        });
    } catch (error) {
        res.status(500).json({message:error.message})
  }
    
}