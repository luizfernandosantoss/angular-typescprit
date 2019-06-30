var message = "Help me, Obi-Wan kenobi.";
console.log(message);
var episode = 4;
console.log("This is epsisode " + episode);
episode = episode + 1;
console.log("Next episode is ", episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log("my favorite droid is ", favoriteDroid);
var isEnoughToBeatMf = function (parsesc) {
    return 12 > parsesc;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millenniut Falcon ? " + (isEnoughToBeatMf(distance) ? "Yes" : "Não"));
var call = function (name) { return console.log("Do you copy, " + name); };
call("R2");
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
