const loader = document.getElementById("loader")

let manubtn = document.getElementById("menu")
let manubox = document.querySelector(".menubox")
let abocra = Array.from(document.querySelectorAll(".menubtns"))

window.addEventListener("load",()=>{
    loader.style.display = "none"
})

let boxs =Array.from(document.getElementsByClassName("box"))
boxs.forEach((e,index)=>{
    e.setAttribute("data-boxnum",`boxe${index}`)
    e.addEventListener("click",()=>{
        let boxnumber = e.dataset.boxnum;
        if (boxnumber == "boxe0") {
          window.location = "./HTMLS/listofbio.html";
        }else if (boxnumber == "boxe1") {
            window.location = "./HTMLS/listofphy.html";
        }else if (boxnumber == "boxe2") {
            window.location = "./HTMLS/listofhis.html";
        }else if (boxnumber == "boxe3") {
            window.location = "./HTMLS/listofgeo.html";
        }

    })
})


manubtn.addEventListener("click",()=>{
    console.log("subhro")
    manubox.classList.toggle("hiso")
})

abocra.forEach((e)=>{
    e.addEventListener("click",(btn)=>{
        if (btn.target.innerText == "ABOUT") {
            window.location = "./HTMLS/about.html"
        }
        if (btn.target.innerText == "CRADIT") {
            window.location = "./HTMLS/cradit.html"
        }
    })
})