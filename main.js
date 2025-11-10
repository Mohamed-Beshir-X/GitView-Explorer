let theInput = document.querySelector("input")
let getButton = document.querySelector(".get-button")
let showCont = document.querySelector(".repos-show")

getButton.onclick = function(){
    getRepos()
}


function getRepos(){
    if(theInput.value !== ""){
        showCont.innerHTML = ''
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((repos) => repos.json())
        .then ((rep) => {
            rep.forEach(rep=> {
                let mainDiv = document.createElement("div")
                mainDiv.className = "main-div"
                let repoPrg = document.createElement("p")
                let repoText = document.createTextNode(rep.name)
                let visit = document.createElement("a")
                let visitText = document.createTextNode("visit")
                visit.setAttribute("href" , `https://github.com/${theInput.value}/${rep.name}`)
                visit.setAttribute("target" , "_blank")
                mainDiv.appendChild(repoPrg)
                repoPrg.appendChild(repoText)
                showCont.appendChild(mainDiv)
                visit.appendChild(visitText)
                mainDiv.appendChild(visit)
                console.log(rep.name)
                console.log(rep.forks)
            });
        })
        setTimeout(function(){
            if(showCont.children.length === 0 ){
                showCont.innerHTML = `<span class = "empty">Uninvalid Username</span>`
            }
        },3000)
        
    }else{
        console.log("worked")
        showCont.innerHTML = `<span class = "empty">Please Write Anything in the Field To Start</span>`
    }
}