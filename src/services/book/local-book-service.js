

const BOOK_API = "http://localhost:4000/api/local";

const findLocalBookById = (id) => {
    return fetch(`${BOOK_API}/${id}`)
        .then(response => response.json())
}

const createLocalBook = (id,title) => {
    const newBook = {_id: id,title:title}
    return fetch(`${BOOK_API}/${id}/create`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(newBook),
        headers: {
            'content-type': 'application/json'
        }

    })

}

const updateLocalBook = (updated) =>{
    return fetch(`${BOOK_API}/profile`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(updated),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


export default {
    findLocalBookById, createLocalBook,updateLocalBook
}