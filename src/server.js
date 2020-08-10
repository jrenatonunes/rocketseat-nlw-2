

const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(12) 99876-4321",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "30",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Mike Brito",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(12) 99876-4321",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Biologia",
        cost: "25",
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "(12) 98812-1243",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Matemática",
        cost: "43",
        weekday: [1],
        time_from: [600],
        time_to: [1220]
    }
];

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
];


const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
];


function pageLanding(request, response) {
    return response.render("index.html");
}

function pageStudy(request, response) {
    const filters = request.query;
    return response.render("study.html", {proffys, filters, subjects, weekdays} );
}

function pageGiveClasses(request, response) {
    return response.render("give-classes.html", {subjects, weekdays});
}

const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

nunjucks.configure('src/views', {
    express: server,
    noCache: true
});


server.use(express.static("public"));
server.get("/", pageLanding);
server.get("/study", pageStudy);
server.get("/give-classes", pageGiveClasses);


server.listen(5001, function() {
    console.log('servidor ouvindo na porta 5001');
});
