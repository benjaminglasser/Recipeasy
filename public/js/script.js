const $newIngredient = $('#new-ingredient')
const $firstIngredient = $('#first-ing')
const $newInstruction = $('#new-instruction')
const $firstInstruction = $('#first-instruction')


let num =  document.getElementsByClassName('inst-cntr').length;

$newIngredient.click(handleIngredientClick);
$newInstruction.click(handleInstructionClick);

function handleIngredientClick () {
    let $newField = $(`
    
    <input class="new-input" type="text" name="ingredients" STYLE="background-color: rgb(223, 223, 223); border: none;box-shadow: inset 0 0 5px #00000048;">
    
    `);
    $firstIngredient.append($newField)
}

function handleInstructionClick () {
    num = num + 1;
    let $newField = $(`
        <div class="inst-cntr">
            <label class="inst-num">${num})  </label>
            <textarea class="instructions" rows="10" name="instructions"></textarea>
        </div>
    `);
    $firstInstruction.append($newField)
}