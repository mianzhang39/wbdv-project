const OFFER_API = "http://localhost:4000/api/offers";

const createOffer = (offer) => {
    return fetch(`${OFFER_API}/create`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(offer),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const findOfferByID = (bookId) => {
    return fetch(`${OFFER_API}/${bookId}`)
        .then(response => response.json())
}


const findOfferByUsername = (soldBy) => {
    return fetch(`${OFFER_API}/${soldBy}`)
        .then(response => response.json())
}

const deleteOffer = (offer) => {
    return fetch(`${OFFER_API}/delete`, {
        method: "DELETE",
        credentials: "include",
        body: JSON.stringify(offer),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


export default {
    createOffer,
    findOfferByID,
    findOfferByUsername,
    deleteOffer
}