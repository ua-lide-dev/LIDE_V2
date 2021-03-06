import axios from "../configs/axios-config";

async function get() {
    return await fetch(`http://localhost:10000/api/v1/user/${localStorage.username}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    //return axios.get('/user');
}

//(Tanguy (API fetch)) Requete pour récupérer les projets créés par l'utilisateur
async function getUserProjects() {
    return await fetch(`http://localhost:10000/api/v1/user/projects/${localStorage.username}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    //return axios.get("/user/projects");
}


async function getIsProf() {
    return await fetch(`http://localhost:10000/api/v1/user/projects/${localStorage.isProf}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
}

async function getProjectsFromUser(idUser) {
    return await fetch('http://localhost:10000/api/v1/user/projectsFrom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            usernameFrom: idUser
        })
    });
    //return axios.get("/user/projects");
}

// (Tanguy (API fetch)) Créer un utilisateur
async function createUser(username) {
    console.log("username dans les routes fronts create user : " + username);
    //const request = new XMLHttpRequest();
    //request.open("POST", "https://lide.leria-etud.univ-angers.fr:10000/user");
    //request.open("POST", "localhost:10000/user");
    //request.setRequestHeader("username", username);
    //return request.send();
    //return axios.get('/user');

    return await fetch(`http://localhost:10000/api/v1/user/${localStorage.username}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

}

async function getAll() {
    return await fetch('http://localhost:10000/api/v1/user/all', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
}


export default {
    get,
    getAll,
    getUserProjects,
    getProjectsFromUser,
    createUser
};