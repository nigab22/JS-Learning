class CoffeeMachine {
  constructor(type) {
    this.type = type;
  }

  heatWater() {
    const heatWater = new Promise((resolve, reject) => {
      let heatWater = true;
      if (heatWater) {
        this.type == 'espresso'
          ? setTimeout(() => resolve('Water heated for espresso'), 1000)
          : setTimeout(() => resolve('Water heated for americano'), 4000);
      } else {
        reject('Error! Water could not be heated.');
      }
    });
    return heatWater;
  }

  grindCoffee() {
    const grindCoffee = new Promise((resolve, reject) => {
      let grindCoffee = true;
      if (grindCoffee) {
        setTimeout(resolve('coffee grounded'), 2000);
      } else {
        reject('Error! Coffee was not grounded');
      }
    });
    return grindCoffee;
  }

  brewCoffee() {
    Promise.all([this.heatWater(), this.grindCoffee()])
      .then((resolve) => {
        console.log(resolve[0]);
        console.log(resolve[1]);
        console.log('Enjoy your coffee');
      })
      .catch((reject) => {
        console.log(reject);
        console.log('No coffee for you');
      });
  }
}

let cup1 = new CoffeeMachine('americano');
cup1.brewCoffee();

let cup2 = new CoffeeMachine('espresso');
cup2.brewCoffee();

/**
 * const heatWater = new Promise((resolve, reject) => {
  let heatWater = true;
  if (heatWater) {
    setTimeout(() => resolve("water heated"), 3000);
  } else {
    reject("Error! Water could not be heated.");
  }
});
//heatWater.then(result => console.log(result), error => console.log(error));

const grindCoffee = new Promise((resolve, reject) => {
  let grindCoffee = true;
  if (grindCoffee) {
    setTimeout(resolve("coffee grounded"), 4000);
  } else {
    reject("Error! Coffee was not grounded");
  }
});

//grindCoffee.then(result => console.log(result), error => console.log(error));


Promise.all([heatWater, grindCoffee]).then(
  result => {
    console.log(result[0]);
    console.log(result[1]);
    console.log("Enjoy your coffee");
  },
  error => {
    console.log(error);
    console.log("No coffee for you");
  }
);

 */
