var s = "Piedra";
var sp = "Tijera";
var p = "Papel";
var user;
var pc;
let op = ["Piedra", "Papel", "Tijera"]
user = op[Math.floor(op.length * Math.random())];
pc = op[Math.floor(op.length * Math.random())];
console.log("EL usuario eligio: " + user);
console.log("La computadora eligio: " + pc);

if (user == pc) {
    console.log("Empate");
}
if (user == s && pc == sp) {
    console.log("Gana el Usuario");
}
if (user == sp && pc == p) {
    console.log("El usuario Gana");
}
if (user == p && pc == s) {
    console.log("Gana el Usuario");

}
if (pc == s && user == sp) {
    console.log("El PC gana");
}
if (pc == sp && user == p) {
    console.log("El PC gana");
}
if (pc == p && user == s) {
    console.log("El PC gana");
}