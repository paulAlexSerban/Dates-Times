const now = new Date();

console.log('getFullYear', now.getFullYear());
console.log('getMonth', now.getMonth());
console.log('getDate', now.getDate()); // returns the date of the day of the week
console.log('getDay', now.getDay()); // returns the index of the day in the week
console.log('getHours', now.getHours()); // returns the number of hours
console.log('getMinutes', now.getMinutes()); // returns the number of minutes
console.log('getSeconds', now.getSeconds()); // returns the number of seconds

// timestamps
// -> these are the number of milliseconds since January 1, 1970
// -> very useful to compare two dates together
console.log('timestamps', now.getTime());

// date strings
console.log('date', now.toDateString());
console.log('time', now.toTimeString());
console.log('local', now.toLocaleDateString());

// timestamp comparison
const before = new Date('February 1 2021 7:30:59');

const difference = now.getTime() - before.getTime();
console.log('difference', difference);

const minutes = Math.round(difference / 1000 / 60);
const hours = Math.round(minutes / 60);
const days = Math.round(hours / 24);

console.log(minutes, hours, days);
console.log(`The blog was written ${days} ago.`)