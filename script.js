// easyFetch("https://strapi-gogokodo.herokuapp.com/api/sources",callback, method = 'GET', headers = {}, body )


function filter(data) {
  easyFilter("#searchBar", data, myApi)
  myApi(data)
}

easyFetch("https://strapi-gogokodo.herokuapp.com/api/sources", filter)



///////////////// firebase ////////////////////

firebase.initializeApp({
  apiKey: "AIzaSyAD1KPUlqKsN3eU_2ikLhU4HUcPsfytkLU",
  authDomain: "gogokodo-2590b.firebaseapp.com",
  projectId: "gogokodo-2590b",
  storageBucket: "gogokodo-2590b.appspot.com",
  messagingSenderId: "833185072727",
  appId: "1:833185072727:web:03129f4b8d69a734328512"
});


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    // ...
  } else {
    document.location.href = "http://127.0.0.1:5500/authPage/auth.html"
  }
});


//////////////////////// filter //////////////////////////////


function myApi(data) {
  const article = document.getElementById("art")
  article.innerHTML = ''

  for (video of data) {

  let diffColor = ""
  switch (video.attributes.difficulty) {
    case "Facile":
    diffColor = '"background-color:green"'
      break;
    case "Moyen" :
        diffColor = '"background-color: orange"'
      break;
    case "Dure":
        diffColor = '"background-color:red"'
      break;
    default:
        diffColor = '"background-color:green"'
  }


  catColor =""

    switch (video.attributes.category) {
      case "javascript":
        catColor = '"background-color:#556AD8"'
        break;
      case "html/css" :
        catColor = '"background-color:#8CBDBF"'
        break;
      case "Nodejs":
        catColor = '"background-color:#D8559C"'
        break;
      case "agile":
        catColor = '"background-color:#708090"'
        break;
      case "kanban":
        catColor = '"background-color:#DEB887"'
        break;
      case "wordpress":
        catColor = '"background-color:#6495ED"'
        break;
      case "seo":
        catColor = '"background-color:#6B8E23"'
        break;
      case "SQL":
        catColor = '"background-color:#EF8180"'
        break;
      default:
        catColor = '"background-color:#BC8F8F"'
    }

    console.log(video)
    article.innerHTML += `<section class="caps">
<h3>${video.attributes.title}</h3>
<p style=${catColor} class="category">${video.attributes.category.toUpperCase()}</p>
<img src="./images/heart_empty.png" class="heart-empty"alt="empty heart logo">
<div class="caps-footer">
  <div style=${diffColor} class="color"></div>
  <button class="valide"><a href="${video.attributes.url}" target=blank>Visiter</button>
</div>
</section>`
  }
}



/////////////////////////////// terminal ///////////////////////////////////

const terminal = document.querySelector(".lien")
const titre = document.querySelector("h1")
const term = document.querySelector(".terminal")
const main = document.querySelector(".main")
const termLine = document.querySelector("#text")


terminal.addEventListener('click', () => {
  if (term.style.display === "none") {
    term.style.display = "block"
    termLine.focus()
    main.style.display = "none"
    titre.innerHTML = "TERMINAL"
    terminal.innerHTML = "Hub"
  } else {
    term.style.display = "none"
    main.style.display = "block"
    titre.innerHTML = "<span>Go Go</span> Hub"
    terminal.innerHTML = "Terminal"
  }
})


const check = document.querySelector(".console")
const menu = document.querySelector(".menu")

check.addEventListener('change', (e) => {
  if (e.target.value == "ls") {
    menu.style.display = "block"
    e.target.value = ""
  } else {
    menu.style.display = "none"
  }

  if (e.target.value == "cd ..") {
    term.style.display = "none"
    main.style.display = "block"
    titre.innerHTML = `<span>Go Go</span> Hub`
    e.target.value = ""
  }

  if (e.target.value == "cd index.html") {
    document.location.href = "http://127.0.0.1:5500/authPage/auth.html"
    e.target.value = ""
  }

  if (e.target.value == "cd Hub.html") {
    document.location.href = "http://127.0.0.1:5500/index.html#"
    e.target.value = ""
  }
})