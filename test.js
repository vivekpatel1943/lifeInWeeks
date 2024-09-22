let birthdate = new Date('19 April 2003' );
firstday = birthdate.getTime();
console.log(firstday);

let lifeExpectancy = 90;
lifeExpectancy = birthdate.getFullYear() + 90;
let lastDay = new Date(`${birthdate.getDay} ${birthdate.getMonth} ${lifeExpectancy}`)
console.log(lifeExpectancy);
lastDay = lastDay.getTime();
console.log(lastDay);

let lifeTime = lastDay - firstday;
let lifeTimeInYears = Math.floor(lifeTime / (1000* 60*60*24*365)); 
let lifeTimeInMonths = Math.floor(lifeTime / (1000* 60*60*24*30)); 
let lifeTimeInWeeks = Math.floor(lifeTime / (1000* 60*60*24*7)); 
console.log(lifeTime);
console.log(lifeTimeInYears);
console.log(lifeTimeInMonths);
console.log(lifeTimeInWeeks);
let presentDate =new Date();
console.log(presentDate);
let lifeLived = presentDate.getTime() - firstday; 
let lifeLivedInYears = Math.floor(lifeLived / (1000* 60*60*24*365)); 
let lifeLivedInMonths = Math.floor(lifeLived / (1000* 60*60*24*30)); 
let lifeLivedInWeeks = Math.floor(lifeLived / (1000* 60*60*24*7)); 
console.log(lifeLived);
console.log(lifeLivedInYears);
console.log(lifeLivedInMonths);
console.log(lifeLivedInWeeks);
// let date = Date.now();
// date = date.getTime();
/* console.log(date);
let age = date - birthdate;
let ageInYears = age / (1000* 60*60*24*365); 
let ageInMonths = age / (1000* 60*60*24*30); 
let ageInWeeks = age / (1000* 60*60*24*7); 
ageInYears = Math.floor(ageInYears);
ageInMonths = Math.floor(ageInMonths);
ageInWeeks = Math.floor(ageInWeeks);
console.log(ageInYears);
console.log(ageInMonths);
console.log(ageInWeeks); */