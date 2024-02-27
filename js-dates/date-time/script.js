const now = new Date();
console.log('Typeof Date:', typeof now); //=> object

//Date Methods
console.log('getFullYear:', now.getFullYear()); //=>2023

//month index starts from 0, i.e jan = 0, feb = 1
console.log('getMonth:', now.getMonth() + 1); //=> 2
console.log('getDate:', now.getDate()) //=> 21

//day index starts from 0 ie.sun is in 0th index, mon = 2...
console.log('getDay', now.getDay() + 1); // => 1 i.e Sunday


//Time Methods
console.log('getHours:', now.getHours()); //=>10
console.log('getMinutes:', now.getMinutes()); //=> 16
console.log('getSeconds:', now.getSeconds()); //=> 12

//Timestamps
console.log('Timestamps:', now.getTime()); //=> 1709055067777

//Date string
console.log('Date Strings:', now.toDateString()); //=> Tue Feb 27 2024

//Time String
console.log('Time String:', now.toTimeString()); //=> 23:18:52 GMT+0545 (Nepal Time)

//Locale Date String
console.log('Locale Date String: (MM/DD/YYYY)',now.toLocaleDateString()) //=> 2/27/2024

//Locale Time String
console.log('Locale Time String:',now.toLocaleTimeString()); //=> 11:20:46 PM