
/*
Object to hold favourite recipes

Array is equal to a list of items 

Create an OBJECT to hold information for our favourite recipe

OBJECT
recipeTitle = string
servings = number
ingredients = an array of strings
directions = an array of string 

let favouriteRecipe ={
    recipeTitle = ['Chocolate Cake']
    serving = [4]
    ingredients = [' golden caster sugar' 'unsalted butter']
    directions = ['Heat oven to 190C/170C fan/gas 5. 
            Butter the base and sides of two 20cm round sandwich tins 
            line the bases with baking parchment.']
}

for loop 
counter = 0 
condition = counter <ingredient.length
counter + 1

for (let counter = 0; counter <ingredients.length; counter++)

200g golden caster sugar
200g unsalted butter, softened plus extra for the tins
4 large eggs
200g self-raising flour
2 tbsp cocoa powder
1 tsp baking powder
½ tsp vanilla extract
2 tbsp milk



1) Create receipe object 

recipeTitle = ['Chocolate Cake']
serving = [4]
ingredients = [' golden caster sugar' 'unsalted butter']
directions = ['Heat oven to 190C/170C fan/gas 5. 
            Butter the base and sides of two 20cm round sandwich tins 
            line the bases with baking parchment.']

loop through ingredients

 */


let favouriteRecipe = {
    recipeTitle: "Chocolate Cake",
    serving: 4,
    ingredients: [
        'golden caster sugar', 
        'unsalted butter'],
    directions: 
        ['Heat oven to 190C/170C fan/gas 5']
}

let ingredients = favouriteRecipe.ingredients;
let directions = favouriteRecipe.directions;

for (let counter = 0; counter <ingredients.length; counter++) {
    console.log(ingredients[counter]);
}
   
for (let counter = 0; counter <directions.length; counter++) {
    console.log(directions[counter]);
}




/*
fix start 

1. create a function
2. it should take a single string 
3. return a version where all occurences of first character have been replaced with ****
4. first letter should always show.
5. word will be more than one character 

function fixStart () {
    return ***
}

if arr[0 t] === '0
return *+word


*/