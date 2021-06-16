// console.log("before");
// let random = Math.random();
// if (random < 0.5)
// {
//     console.log("your number is less than 0.5");
//     console.log(random);
// }
// console.log("after");

const dayOfWeek = prompt("Enter a day: ").toLowerCase();

if (dayOfWeek === "monday") {
    console.log("I HATE MONDAYS");
} else if(dayOfWeek === "saturday") {
    console.log("I LOVE SATURDAYS");
} else if(dayOfWeek === "sunday") {
    console.log("SUNDAYS ARE NICE");
} else if(dayOfWeek === "friday") {
    console.log("FRIDAYS ARE DECENT");
} else {
    console.log("MEH");
}

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);