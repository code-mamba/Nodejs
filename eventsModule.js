const PizzaShop = require("./pizzaShop");
const DrinkMachine = require("./drinkMachine");
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();
pizzaShop.on("order", (size, topping) => {
  console.log(
    `order Received! Baking a ${size} pizza with ${topping} toppings`
  );
  drinkMachine.serveDrink(size);
});
pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();

