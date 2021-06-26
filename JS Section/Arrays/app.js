const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];

leaderboard[1] = 'Luna';

leaderboard.push('Damon');
leaderboard.pop('Harry');
let first = leaderboard.shift();
console.log(first);
leaderboard.unshift('Hairy');
console.log(leaderboard);