const { getRecipe, printRecipe } = require('./helpers')
const myCoffee = process.argv[2] || 'Latte'
getRecipe(myCoffee, myRecipe => {
  printRecipe(myCoffee, myRecipe)
})