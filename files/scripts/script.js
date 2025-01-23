let contact = document.getElementById("contact");
let aboutMe = document.getElementById("about-me");
let languages = document.getElementById("container-languages");
let contactBtn = document.getElementById("btn-contact");
let homeBtn = document.getElementById("btn-home");
let imgPerfil = document.getElementById("img-perfil");

contactBtn.addEventListener("click", () => {
    aboutMe.style.display = "none";
    languages.style.display = "none";
    contact.style.display = "block";
});

homeBtn.addEventListener("click", () => {
    aboutMe.style.display = "block";
    languages.style.display = "block";
    contact.style.display = "none";
});

imgPerfil.addEventListener("click", (element)=>{
    rotate = parseInt(element.target.style.rotate)
    imgPerfil.style.rotate = rotate+360 + "deg"
})