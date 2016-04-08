//Business
function Order(pizzaStorage, costTotal, pizzaCounter) {
  this.pizzaStorage = [];
  this.costTotal = 0;
  this.pizzaCounter = 0;
}
var order = new Order();

function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}
Pizza.prototype.price = function () {
  var price = 6;
  var priceMultiplier = 1;
  if (this.pizzaSize === "large") {
    priceMultiplier ++
  }
  if (this.pizzaSize === "medium") {
    priceMultiplier += .5
  }
  price += this.toppings.length;
  if (isInArray("sprinkles", this.toppings)) {
    price --;
  }
  price = price * priceMultiplier;
  return price;
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

var newPizza = new Pizza();

//UI
$(document).ready(function() {
  $("form#newPizza").submit(function(event) {
    event.preventDefault();

    newPizza.pizzaSize = $("input[name=size]:checked").val();
    var topping = [];
      $.each($("input[name='topping']:checked"), function() {
        newPizza.toppings.push($(this).val());
      });
    order.costTotal += newPizza.price();
    order.pizzaStorage.push(newPizza);
    order.pizzaCounter ++;
    $("#pizzaCount").text(order.pizzaCounter).toString();
    $("#costTotal").text(order.costTotal).toString();
    $(".displayOrder").show();
    });
  });
