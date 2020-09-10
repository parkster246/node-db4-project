const db = require("../data/dbConfig")

const getRecipes = () => {
    return db("recipes")
}

const getShoppingList = (id) => {
    return db("shopping_list as sl")
    .where({"sl.recipe.id": id})
    .join("ingredients as i", "i.id", "sl.ingredients_id")
    .select("i.ingredients_name", "sl.measurement")
}

const getInstructions = (id) => {
    return db ("instruction")
    .where({"instruction.recipe_id": id})
    .select("instruction.recipe_id", "instruction.step" )
}



module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}