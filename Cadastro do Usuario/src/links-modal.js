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