const age = prompt("Enter age:");
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or a senior");
} else {
    console.log("You are either a baby or a senior");
}

const day = 2;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    default:
        console.log("INVALID NUMBER");
}