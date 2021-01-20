const admin = require("firebase-admin")

const serviceAccount = require('../../../secc02-coffee-firebase-adminsdk-zrfb3-13ccb3a799.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://secc02-coffee-default-rtdb.firebaseio.com"
})

const db = admin.database()

exports.getRecipe = function (coffeeName, callback) {
  db.ref('coffees').once("value")
    .then(snapshot => {
      const coffeeList = snapshot.val()
      const ingredientList = coffeeList.find(coffee => coffee.title === coffeeName).ingredients
      callback(ingredientList)
    })
}

exports.printRecipe = (coffeeName, ingredientList) => {
  console.log(coffeeName + ': ')
  ingredientList.forEach(ingredient => console.log(ingredient))
}
