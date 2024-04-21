import { ManageAccount } from "/.FirebaseConfi.js";
document.getElementById("close").addEventListener("submit", (event) => {
    event.preventDefault();

    const account = new ManageAccount();
    account.signOut();
});
    var boton = document.getElementById("close");

// Agregar un evento de clic al botón
boton.addEventListener("click", function() {
    // Redirigir a otra página
    window.location.href = "/index.html";

});