

const BOOK_API = "http://localhost:4000/api/local";

export const findLocalBookById = (id) => {
    fetch(`${BOOK_API}/${id}`)
        .then(response => response.json())
}

export default {
    findLocalBookById
}