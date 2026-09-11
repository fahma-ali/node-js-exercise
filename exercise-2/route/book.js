import express from 'express';
import { createBook, deleteBook, getBook, getBooks, updateBook } from '../controller/bookController.js';
const router = express.Router();
router.post('/create', createBook)
router.get('/:id', getBook)
router.get('/', getBooks)
router.put('/update/:id', updateBook)
router.delete('/delete/:id',deleteBook)

export default router