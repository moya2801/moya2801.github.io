document.getElementById("darkModeToggle").addEventListener("click", Modo);

function Modo() {
    document.body.classList.toggle("dark-mode");
};

document.getElementById("verMasBtn").addEventListener("click",VerMas);

 function VerMas() {
    const texto = document.getElementById("textoExtra");
    texto.style.display = texto.style.display === "none" ? "block" : "none";
}
