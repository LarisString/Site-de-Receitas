var controleCampo = 1;
function adicionarCampo() {
    controleCampo++;
   
    document.getElementById ('Ingredientes').insertAdjacentHTML('beforeend', '<div class="form-receita" id="campo' + controleCampo + '"><label>Ingrediente: </label><input type="text" name="Ingredientes[]' + controleCampo + '" id="Ingredientes' + controleCampo + '"><button type="submit" onclick="adicionarCampo()"> + </button><br><br></div>')

}