const person = {
  firstName: "John",
  lastName: "Smith",
  age: "20",
  address: {
    streetAddress: "21 2nd Street",
    city: "San Francisco",
    state: "CA",
    postalCode: "10021",
  },
  phoneNumber: [
    {
      type: "home",
      number: "212 555-1234",
    },
    {
      type: "fax",
      number: "212 555-1234",
    },
  ],
  gender: {
    type: "male",
  },
  car1: "Mustang",
  car2: "F150",
};

console.log(person);
var str1 = "car";
var cnt = 1;

// 'access json data'
console.log(person[str1 + cnt]);
cnt++;
console.log(person[str1 + cnt]);
