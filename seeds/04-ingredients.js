
exports.seed = function(knex) {

  return knex('ingredients').insert([
    //pb&j
    {ingredient_name:'peanut butter'},
    {ingredient_name:'jelly'},
    {ingredient_name:'bread'},
    //spaghetti
    {ingredient_name:'pasta'},
    {ingredient_name:'oil'},
    {ingredient_name:'onions'},
    {ingredient_name:'garlic'},
    {ingredient_name:'ground beef'},
    {ingredient_name:'pasta sauce'},
    //burgers
    {ingredient_name:'ground turkey'},
    {ingredient_name:'pepper'},
    {ingredient_name:'himalayan salt'},
    {ingredient_name:'dijon mustard'},
    {ingredient_name:'worcestershire'},
    {ingredient_name:'buns'}
  ]);
};
