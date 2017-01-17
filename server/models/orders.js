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
  sandwichNuggets8: Number,
  sandwichNuggets12: Number,
  sandwichGrilledNuggets8: Number,
  sandwichGrilledNuggets12: Number,
  pickes: Boolean,
  lettuce: Boolean,
  tomatoes: Boolean,
  drinkCoke: Boolean,
  drinkDietCoke: Boolean,
  drinkDrPepper: Boolean,
  drinkFanta: Boolean,
  sauceChickFilA: Number,
  saucePoly: Number,
  sauceHoney: Number,
  sauceGarlic: Number,
  sauceZesty: Number,
  sauceBarbq: Number,
  sauceSriracha: Number
});

mongoose.model('Order', orderSchema);