//Modal Compartilhar e denunciar

var menuModal = document.getElementById("menu-modal")
var btnMenu = document.getElementById("user-btns-more")

btnMenu.onclick = function() {
    menuModal.style.display = "block";
    console.log("modal aberto")
}

menuModal.onclick = function(event) {
    if (event.target == menuModal) {
        console.log("testando")
        menuModal.style.display = "none";
    }
    
}

//=-=-=-=-=-=-=-=Modal dos links=-=-=-=-=-=-=-=-=-=//

var modal = document.getElementById("links-modal")
var btn = document.getElementById("linkBtn")
var span = document.getElementsByClassName("close")[0]

//quando o usuário apertar o botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

//quando o usuário apertar o span X, fecha o modal
span.onclick = function() {
    modal.style.display = "none"
}

//quando o usuário apertar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}