const person = {
    name: 'John Doe',
    sayHello() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  };
  
  person.sayHello(); // Output: Hello, my name is John Doe!