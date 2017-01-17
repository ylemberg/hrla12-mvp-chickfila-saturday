var utils = {
  getMenu: () => {
    var menu = [
      {
        price: 3.05,
        comboPrice: 5.95,
        entree: true,
        name: 'Chicken Sandwich',
        schemaName: 'sandwichChicken'
        },
      {
        price: 3.65,
        comboPrice: 6.55,
        entree: true,
        name: 'Chicken Deluxe Sandwich',
        schemaName: 'sandwichChickenDeluxe'
        },
      {
        price: 3.29,
        comboPrice: 6.19,
        entree: true,
        name: 'Spicy Chicken Sandwich',
        schemaName: 'sandwichSpicy'
        },
      {
        price: 3.89,
        comboPrice: 6.79,
        entree: true,
        name: 'Spicy Chicken Deluxe Sandwich',
        schemaName: 'sandwichSpicyDeluxe'
        },
      {
        price: 4.39,
        comboPrice: 7.19,
        entree: true,
        name: 'Grilled Chicken Sandwich',
        schemaName: 'sandwichGrilled'
        },
      {
        price: 5.59,
        comboPrice: 8.39,
        entree: true,
        name: 'Grilled Chicken Club Sandwich',
        schemaName: 'sandwichClub'
        },
      {
        price: 5.19,
        comboPrice: 8.15,
        entree: true,
        name: 'Grilled Chicken Cool Wrap',
        schemaName: 'sandwichWrap'
        },
      {
        price: 3.99,
        comboPrice: 6.79,
        entree: true,
        name: 'Chicken Salad Sandwich',
        schemaName: 'sandwichSalad'
        },
      {
        price: 3.05,
        comboPrice: 5.95,
        entree: true,
        name: 'Chick-fil-A Nuggets 8pc',
        schemaName: 'nuggets8'
        },
      {
        price: 4.45,
        comboPrice: 8.59,
        entree: true,
        name: 'Chick-fil-A Nuggets 12pc',
        schemaName: 'nuggets12'
        },
      {
        price: 3.85,
        comboPrice: 6.75,
        entree: true,
        name: 'Chick-fil-A Nuggets (Grilled) 8pc',
        schemaName: 'grilledNuggets8'
        },
      {
        price: 5.75,
        comboPrice: 8.59,
        entree: true,
        name: 'Chick-fil-A Nuggets (Grilled) 12pc',
        schemaName: 'grilledNuggets12'
        },
      {
        name: 'pickles',
        schemaName: 'pickes'
      },
      {
        name: 'tomatoes', 
        schemaName: 'tomatoes'
      },
      {
        name: 'lettuce',
        schemaName: 'lettuce'
      },
      {
        small: 1.35,
        medium: 1.59,
        large: 1.85,
        entree: false,
        name: 'Coke',
        schemaName: 'drinkCoke'
      },
      {
        small: 1.35,
        medium: 1.59,
        large: 1.85,
        entree: false,
        name: 'Diet Coke',
        schemaName: 'drinkDietCoke'
      },
      {
        small: 1.35,
        medium: 1.59,
        large: 1.85,
        entree: false,
        name: 'Dr Pepper',
        schemaName: 'drinkDrPepper'
      },
      {
        small: 1.35,
        medium: 1.59,
        large: 1.85,
        entree: false,
        name: 'Sprite',
        schemaName: 'drinkSprite'
      },
      {
        small: 2.75,
        large: 3.15,
        entree: false,
        name: 'Vanilla Milkshake',
        schemaName: 'shakeVanilla'
      },
      {
        small: 2.75,
        large: 3.15,
        entree: false,
        name: 'Chocolate Milkshake',
        schemaName: 'shakeChocolate'
      },
      {
        small: 2.75,
        large: 3.15,
        entree: false,
        name: 'Strawberry Milkshake',
        schemaName: 'shakeStrawberry'
      },
      {
        small: 2.75,
        large: 3.15,
        entree: false,
        name: 'Cookies & Cream Milkshake',
        schemaName: 'shakeCookiesMilk'
      },
      {
        name: 'ChickFilA',
        schemaName: 'sauceChickFilA'
      },
      {
        name: 'Polynesian',
        schemaName: 'saucePoly'
      },
      {
        name: 'Honey Mustard',
        schemaName: 'sauceHoney'
      },
      {
        name: 'Garlic & Herb Ranch',
        schemaName: 'sauceGarlic'
      },
      {
        name: 'Zesty Buffalo',
        schemaName: 'sauceZesty'
      },
      {
        name: 'Barbeque',
        schemaName: 'sauceBarbq'
      },
      {
        name: 'Sriracha',
        schemaName: 'sauceSriracha'
      }
    ];
    return menu;
  },

  getOrderObj: orderArr => {
    var order = {};
    orderArr.forEach(item => {
      if(item.cost) {
        if(item.item.schemaName.indexOf('sandwich') !== -1
          || item.item.schemaName.indexOf('nuggets') !== -1
          || item.item.schemaName.indexOf('Nuggets') !== -1) {
          order[item.item.schemaName] = 1;
        } else if(item.item.schemaName.indexOf('drink') !== -1){
          if(item.cost === 1.35) {
            order[item.item.schemaName] = 'Small ' + item.item.name;
          } else if(item.cost === 1.59) {
            order[item.item.schemaName] = 'Medium ' + item.item.name;
          } else if(item.cost === 1.85) {
            order[item.item.schemaName] = 'Large ' + item.item.name;
          }
        } else if(item.item.schemaName.indexOf('shake') !== -1) {
          if(item.cost === 2.75) {
            order[item.item.schemaName] = 'Small ' + item.item.name;
          } else if(item.cost === 2.75) {
            order[item.item.schemaName] = 'Large ' + item.item.name;
          }
        }
      } else {
        order[item.item.schemaName] = item.numOfSauces;
      }
    });
    return order;
  }
};

module.exports = utils;