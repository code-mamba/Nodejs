const eventEmitter = require("node:events");
const emitter = new eventEmitter();

emitter.on("order-pizza", (size, topping) => {
  console.log(
    `order Received! Baking a ${size} pizza with ${topping} toppings`
  );
});

emitter.on("order-pizza", (size) => {
  if (size === "large" || "extralarge") {
    console.log("serving a free drink");
  }
});
console.log("Hey ");
emitter.emit("order-pizza", "large", "mushroom");

emitter.on("start", () => {
  setTimeout(() => {
    console.log("1");
  }, 1000);
  setTimeout(() => {
    console.log("2");
  }, 2000);
  setTimeout(() => {
    console.log("3");
    console.log("Started!");
  }, 3000);
});

emitter.emit("start");