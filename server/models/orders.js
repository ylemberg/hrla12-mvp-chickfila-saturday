var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  sandwichChicken: Number,
  sandwichChickenDeluxe: Number,
  sandwichSpicy: Number,
  sandwichSpicyDeluxe: Number,
  sandwichGrilled: Number,
  sandwichClub: Number,
  sandwichWrap: Number,
  sandwichSalad: Number,
  nuggets8: Number,
  nuggets12: Number,
  grilledNuggets8: Number,
  grilledNuggets12: Number,
  drinkCoke: String,
  drinkDietCoke: String,
  drinkDrPepper: String,
  drinkSprite: String,
  drinkVanilla: String,
  drinkChocolate: String,
  drinkStrawberry: String,
  drinkCookiesMilk: String,
  sauceChickFilA: Number,
  saucePoly: Number,
  sauceHoney: Number,
  sauceGarlic: Number,
  sauceZesty: Number,
  sauceBarbq: Number,
  sauceSriracha: Number,
  total: Number
});

mongoose.model('Order', orderSchema);