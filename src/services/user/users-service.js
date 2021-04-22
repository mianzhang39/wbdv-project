const USER_API = "http://localhost:4000/api/users";

const profile = () => {
    return fetch(`${USER_API}/profile`, {
        method: "POST",
        credentials: "include"
    }).then(response => response.json())
}


const login = (credentials) => {
    return fetch(`${USER_API}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const register = (credentials) => {
    return fetch(`${USER_API}/register`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const findUserByName = (name) => {
    return fetch(`${USER_API}/${name}`)
        .then(response => response.json())
}

const updateUser = (updated) => {
    return fetch(`${USER_API}/profile`, {
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(updated),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}
// const clickFollow = (userA,userB) =>{
//     return fetch(`${USER_API}/${userA}/${userB}`, {
//         method: "POST",
//         credentials: "include"
//     })
//         .then(response => response.json())
// }

const logout = () => { return fetch(`${USER_API}/logout`, {
    method: "POST",
    credentials: "include"
}).then(response => response.json())}


export default {
    register, login, logout, profile,findUserByName,updateUser
}