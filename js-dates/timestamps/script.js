const now = new Date();
const before = new Date('February 28 2016 12:30:12');
// console.log(before.getTime());

//get now  and before timestamp and subract from now
const diff = now.getTime() - before.getTime();
const minutes = Math.floor(diff / 1000 / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);

console.log(`Minutes : ${minutes}\nHours: ${hours}\nDays: ${days}`);

//Converting timestamp to Date objects
const timestamp = 1456641912000
const date = new Date(timestamp);
console.log(`Timestamp ${timestamp} equals \n${date} Date`)