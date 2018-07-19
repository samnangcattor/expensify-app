//
//  Object destructuring
//
const person = {
  name: 'Dam SamNang',
  age: 29,
  location: {
    city: 'Hanoi',
    temp: 9
  }
};

const { name, age, title: firstTitle = 'default title' } = person;
console.log(`${name} is ${age}, ${firstTitle}`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} is ${city}`);
}

//
// Array destructuring
//

const address = ['123 street', 'Hanoi', 'Vietnam', '2018'];

// const [street, town, state, zip] = address;
const [, town, state = 'new year'] = address;

console.log(`You are is ${town} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice}`);
