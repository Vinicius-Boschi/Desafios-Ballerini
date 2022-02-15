let projects = [

    {
        image: "../paginaInicial/img/troco.jpg",
        name: "Cálculo de Troco",
        link: "../troco/index.html"
    },

    {
        image: "../paginaInicial/img/desafioExtra.jpg",
        name: "Desafio Extra",
        link: "../desafioExtra/index.html"
    },

    {
        image: "../paginaInicial/img/ballebot.jpg",
        name: "Landing Page",
        link: "https://ballebot.netlify.app/"
    }
]

let res = document.querySelector(".res")

function showProjects() {
    for (let i = 0; i < projects.length; i++){
        res.innerHTML += "<div class='projects'><a href='" + projects[i].link + "'target=_blank'" +"'>" + "<img class='image' src='" + projects[i].image + "']>" + "<span class='text'>" + projects[i].name + "</span></a></div>"
    }
}

showProjects()