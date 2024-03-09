let posts = [
    {
        id: 1,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info"
    },
    {
        id: 2,
        title: "event on matfak",
        desccription: "description here",
        image: "media\\1.png",
        category: "event"
    },
    {
        id: 3,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info"
    },
    {
        id: 4,
        title: "matfak event",
        desccription: "<p>djadfsfsbfjagfuk</p>",
        image: "media\\1.png",
        category: "event"
    },
    {
        id: 5,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info"
    },
    {
        id: 6,
        title: "my sifrt post",
        desccription: "Etiam posuere quam ac quam. Maecenas aliquet accumsan leo.і dfkgidddddd ddfksn haietoiuhahif uywehsa fieya tilytdashkirhgl ksgivreh; bwavouybioag vighamong olaryohvgo shboh ksgivreh; bwavouybioag vighamong olaryohvgo shboh",
        image: "media\\1.png",
        category: "info"
    },
    {
        id: 7,
        title: "my sifrt post",
        desccription: "description here",
        image: "media\\1.png",
        category: "info"
    },
]

let isSubscribed = false;
let i = 1;

function loadPosts(category){
    let container = document.getElementById("container");
    let postsHtml = "";
    let postsFiltered = [];
    if(category){
        postsFiltered = posts.filter(elem => elem.category === category);
    }else{
        postsFiltered = posts;
    }
    postsFiltered.forEach(elem => {
        let postHtml = `<div class="card"><h3>${elem.title}</h3><p><image src="${elem.image}"/>${elem.desccription}</p></div>`;
        postsHtml += postHtml;
    })
    container.innerHTML = postsHtml;
}

loadPosts();
let subscribeElement = document.getElementById("subscribe-modal");



function showDisplay () {
    subscribeElement.style.display = "block";
}

setInterval(() => {
    if(!isSubscribed){
        showDisplay();
        i += 1;
    }
}, 
3000 * (i * i));

setInterval(() => {
    if(!isSubscribed){
        showCloseButton();
        i += 1;
    }
}, 
3000 * (i * i));

function subscribe(){
    isSubscribed = true;
    subscribeElement.style.display = "none";
}


function closeModal(){
    subscribeElement.style.display = "none";
}

