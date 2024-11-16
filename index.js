// -- 1 -- //
const user = {
  hobby: "cycling",
  premium: true,
};
const userNew = { mood: "happy", ...user, hobby: "skydivig", premium: false };
const keys = Object.keys(userNew);
for (const key of keys) {
  console.log(`${key}: ${userNew[key]}`);
}

// -- 2 -- //
const countProps = function (obj) {
  const keys = Object.keys(obj);
  let count = 0;
  for (const key of keys) {
    count += 1;
  }
  return count;
};
console.log(countProps(userNew));

// -- 3 -- //
const employees = {
  John: 10,
  Fred: 24,
  Buddy: 33,
  Anna: 28,
  Mike: 15,
};
const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let maxValue = 0;
  let bestEmployee;
  for (const key of keys) {
    if (employees[key] > maxValue) {
      maxValue = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};
console.log(findBestEmployee(employees));

// -- 4 -- //
const employees2 = {
  John: 7000,
  Fred: 4000,
  Buddy: 3000,
  Anna: 5000,
  Mike: 3000,
};
const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum;
};
console.log(countTotalSalary(employees2));

// -- 5 -- //
const tanks = [
  {
    name: "Tiger1",
    year: 1942,
    front: "West Europe",
  },
  {
    name: "Tiger2",
    year: 1944,
    front: "East Europe",
  },
  {
    name: "T34",
    year: 1943,
    front: "West Europe",
  },
  {
    name: "Sherman",
    year: 1943,
    front: "North Africa",
  },
];
const getAllPropValues = function (arr, prop) {
  let values = [];

  for (const obj of arr) {
    for (const key in obj) {
      if (key === prop) {
        values.push(obj[key]);
      }
    }
  }
  return values;
};
console.log(getAllPropValues(tanks, "name"));
console.log(getAllPropValues(tanks, "year"));
console.log(getAllPropValues(tanks, "front"));

// -- 6 -- //
const products = [
  {
    name: "AK-74",
    price: 1200,
  },
  {
    name: "bazooka",
    price: 350,
  },
  {
    name: "bazooka",
    price: 350,
  },
  {
    name: "T-34",
    price: 250000,
  },
  {
    name: "T-34",
    price: 250000,
  },
  {
    name: "Tiger 1",
    price: 4000000,
  },
];
const calculateTotalPrice = function (allProdcuts, productName) {
  let sum = 0;
  for (const product of allProdcuts) {
    if (product.name === productName) {
      sum += product.price;
    }
  }
  return `The price of all ${productName} named products is: ${sum} USD`;
};
console.log(calculateTotalPrice(products, "T-34"));
console.log(calculateTotalPrice(products, "bazooka"));
console.log(calculateTotalPrice(products, "Tiger 1"));

// --7 -- //
const account = {
  name: "John",
  amount: 10000,
  number: "0000 0000 0000 0000",
  password: "1234",
  amountOfTransactions: 10,
  showRemainder() {
    console.log(`You have ${this.amount} USD left.`);
  },
  showAmountOfTranactions() {
    console.log(`You have done ${this.amountOfTransactions} tranactions.`);
  },
  withdraw(amount, pass) {
    if (pass === this.password) {
      if (amount <= this.amount) {
        this.amount -= amount;
        this.amountOfTransactions += 1;
        console.log(
          `You have succecfully withdrawn ${amount} USD, remainder: ${this.amount} USD.`
        );
      } else {
        console.log("Not enough money on account!");
      }
    } else {
      console.log("Wrong password!");
    }
  },
  deposit(amount, pass) {
    if (pass === this.password) {
        this.amount += amount;
        this.amountOfTransactions += 1;
        console.log(
          `You have succecfully deposited ${amount} USD, remainder: ${this.amount} USD.`
        );
      } else {
      console.log("Wrong password!");
    }
  }
};

account.showRemainder();
account.showAmountOfTranactions();
account.withdraw(4000, "1111");
account.withdraw(11000, "1234");
account.withdraw(4000, "1234");
account.deposit(6000, "1111");
account.deposit(8000, "1234");
account.showRemainder();
account.showAmountOfTranactions();