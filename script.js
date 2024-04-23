let name = prompt("Welcome to GC mini golf! What is your name?");
let holes = prompt(`Hi ${name}! Would  you like to play 3 or 6 holes?`);
let score = 0;
for(let i = 0; i < holes; i++) {
    let turn = prompt(`How many putts for hole ${i+1}? (par: 3)`);
    score += parseInt(turn);
}
let par = (holes*3);
if (score > par) {
    console.log(`Nice try, ${name}... Your total par was: +${score-par}`)
}else if(score == par) {
    console.log(`Good game, ${name}. Your total par was: 0`)
}else {
    console.log(`Great job, ${name}! Your total par was: ${score-par}`)
}