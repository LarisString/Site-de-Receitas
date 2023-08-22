var controleCampo = 1;
function adicionarCampo() {
    controleCampo++;
   
    document.getElementById ('Ingredientes').insertAdjacentHTML('beforeend', '<div class="form-receita" id="campo' + controleCampo + '"><label>Ingrediente: </label><br><input type="text" name="Ingrediente[]' + controleCampo + '" id="Ingrediente' + controleCampo + '"><button id="add" width="20px" onclick="adicionarCampo()"> + </button><br><br></div>')

}