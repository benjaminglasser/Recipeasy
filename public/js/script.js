

(function() {

let num =  document.getElementsByClassName('inst-cntr').length;
let results;

const $newIngredient = $('#new-ingredient');
const $firstIngredient = $('#first-ing');
const $newInstruction = $('#new-instruction');
const $firstInstruction = $('#first-instruction');
const form = document.getElementById('search-form');
const resultsContainer = document.querySelector('.results');
const inputField = document.querySelector('.input-field')

M.AutoInit();

$newIngredient.click(handleIngredientClick);
$newInstruction.click(handleInstructionClick);
form.addEventListener('submit', handleSubmit);
inputField.addEventListener('focus', init);

$(document).ready(function(){
    $('.sidenav').sidenav();
  });


init();

function init() {
    results = '';
    resultsContainer.innerHTML = '';
    form.reset();
}

async function handleSubmit(e) {
    e.preventDefault();
    const value = inputField.value;

    results = await fetch('/api/recipes?title=' + value)
    .then(res => res.json());

    form.reset();

    render();
}

function render() {
    let html;

    if(results.length) {
        html = results.map((result, i) => `
            <article>
                <a href="/recipes/${result._id}">
                    <h3 class="results-style">${i + 1}) ${result.title}</h3>
                </a>
            </article>
        `).join('');
    } else {
        html = '<h3>Sorry, No Results Matched Your Search</h3>';
    }

    resultsContainer.innerHTML = html;
}



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


})();

