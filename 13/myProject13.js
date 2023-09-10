const itemTags = document.getElementById('items');
const textarea = document.getElementById('textarea');
const recipeCards = document.getElementById('recipeCards');

let items = [];
textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createItems(e.target.value);
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 100);
        fetchAndProcessRecipes();
    }
});

function createItems(input) {
    items = input.split(',').filter(item => item.trim() !== '').map(item => item.trim());

    itemTags.innerHTML = '';
    items.forEach(item => {
        const itemTag = document.createElement('span');
        itemTag.classList.add('tag');
        itemTag.innerText = item;
        itemTags.appendChild(itemTag);
    });
}

function getMissingIngredients(recipeIngredients, items) {
    return recipeIngredients.filter(ingredient => !items.includes(ingredient.item));
}

async function fetchAndProcessRecipes() {
    try {
        const res = await fetch('recipes.json');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        const sortedAndFilteredRecipes = data.recipe
            .filter(recipe => getMissingIngredients(recipe.ingredients, items).length > 0)
            .sort((a, b) => getMissingIngredients(a.ingredients, items).length - getMissingIngredients(b.ingredients, items).length);

        recipeCards.innerHTML = ''; // Clear the existing cards before adding new ones

        sortedAndFilteredRecipes.forEach(sortedAndFilteredRecipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe');

            // Add Image
            const recipeImage = document.createElement('div');
            recipeImage.classList.add('recipe-image');
            recipeImage.style.backgroundImage = `url(${sortedAndFilteredRecipe.image})`;
            recipeCard.appendChild(recipeImage);

            // Add Recipe Name
            const recipeNameDiv = document.createElement('div');
            const recipeName = document.createElement('h2');
            recipeName.innerText = sortedAndFilteredRecipe.name;
            recipeNameDiv.appendChild(recipeName);

            const missingIngredients = getMissingIngredients(sortedAndFilteredRecipe.ingredients, items);
            const missingIngredientsDiv = document.createElement('div');
            missingIngredientsDiv.innerText = `${missingIngredients.length} ingredients missing`;
            missingIngredientsDiv.classList.add('missingIngredientsText');
            recipeNameDiv.appendChild(missingIngredientsDiv);

            recipeCard.appendChild(recipeNameDiv);

            recipeCards.appendChild(recipeCard); 
        });

    } catch (error) {
        console.error('Error fetching the JSON data:', error);
    }
}
