const boton = document.getElementById("btn-modo");
if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("oscuro");
    boton.innerHTML = "☀️ Modo claro";
}

boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    if (document.body.classList.contains("oscuro")) {
        boton.innerHTML = "☀️ Modo claro";
        localStorage.setItem("modo", "oscuro");
    } else {
        boton.innerHTML = "🌙 Modo oscuro";
        localStorage.setItem("modo", "claro");
    }
});



const formulario = document.getElementById("formInscripcion");
const mensajeExito = document.getElementById("mensajeExito");

document.querySelectorAll(".btn-inscribir").forEach(btn=>{
    btn.addEventListener("click",()=>{
        document.getElementById("programaSelect").value = btn.dataset.programa;
        formulario.reset();
        formulario.classList.remove("was-validated");
        mensajeExito.classList.add("d-none");
        document.getElementById("programaSelect").value = btn.dataset.programa;
        });
    });

    formulario.addEventListener("submit",function(e){
        e.preventDefault();
        if(!formulario.checkValidity()){
            formulario.classList.add("was-validated");
            return;
        }

        formulario.classList.remove("was-validated");
        mensajeExito.classList.remove("d-none");
        setTimeout(()=>{
            bootstrap.Modal.getInstance(
                document.getElementById("modalInscripcion")
                ).hide();
            formulario.reset();
            mensajeExito.classList.add("d-none");
        }, 2000);
    });
