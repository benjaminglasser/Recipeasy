const $newIngredient = $('#new-ingredient')
const $firstIngredient = $('#first-ing')

$newIngredient.click(handleIngredientClick);

function handleIngredientClick () {
    let $newField = $(`
    
    <input class="new-input" type="text" name="ingredients">
    
    `);
    $firstIngredient.prepend($newField)
}