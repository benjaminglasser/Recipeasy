const $newIngredient = $('#new-ingredient')
const $firstIngredient = $('#first-ing')
const $newInstruction = $('#new-instruction')
const $firstInstruction = $('#first-instruction')

$newIngredient.click(handleIngredientClick);
$newInstruction.click(handleInstructionClick);

function handleIngredientClick () {
    let $newField = $(`
    
    <input class="new-input" type="text" name="ingredients">
    
    `);
    $firstIngredient.append($newField)
}

function handleInstructionClick () {
    let $newField = $(`
    
    <input class="new-input" type="text" name="instructions">
    
    `);
    $firstInstruction.append($newField)
}