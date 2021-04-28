const $newIngredient = $('#new-ingredient')
const $firstIngredient = $('#first-ing')
const $newInstruction = $('#new-instruction')
const $firstInstruction = $('#first-instruction')

$newIngredient.click(handleIngredientClick);
$newInstruction.click(handleInstructionClick);

function handleIngredientClick () {
    let $newField = $(`
    
    <input class="new-input" type="text" name="ingredients" STYLE="background-color: rgb(223, 223, 223); border: none;box-shadow: inset 0 0 5px #00000048;">
    
    `);
    $firstIngredient.append($newField)
}

function handleInstructionClick () {
    let $newField = $(`
    
    <input class="new-input" type="text" name="instructions" STYLE="background-color: rgb(223, 223, 223); border: none;box-shadow: inset 0 0 5px #00000048;">
    
    `);
    $firstInstruction.append($newField)
}