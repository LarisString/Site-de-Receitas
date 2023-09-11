var controleCampo = 1;
function adicionarCampo() {
    controleCampo++;
   
    document.getElementById ('Ingredientes').insertAdjacentHTML('beforeend', '<div class="form-receita" id="campo' + controleCampo + '"><label>Ingrediente: </label><br><input type="text" name="Ingrediente[]' + controleCampo + '" id="Ingrediente' + controleCampo + '"><button id="add" width="20px" onclick="adicionarCampo()"> + </button><br><br></div>')

}

/* Quando o usuário clica no Ícone, abre novamente o Menu só que desta vez com a formatação que definimos no media screen */
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

/*
OBS: Esta função deverá ser adicionada dentro de um Script na sua página HTML, ou dentro de uma chama de arquivo .js
*/
