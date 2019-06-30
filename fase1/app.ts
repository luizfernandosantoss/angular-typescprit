let message: string = "Help me, Obi-Wan kenobi.";
console.log(message);

let episode:number = 4;
console.log("This is epsisode "+episode);
episode = episode + 1;
console.log("Next episode is ", episode);

let favoriteDroid:string;
favoriteDroid = "BB-8";
console.log("my favorite droid is ", favoriteDroid);

let isEnoughToBeatMf = function (parsesc:number) : boolean {
    return 12 > parsesc;
};

let distance = 14;
console.log(`Is ${distance} parsecs enough to beat Millenniut Falcon ? ${isEnoughToBeatMf(distance) ? "Yes" : "Não"}`);

let call = (name:string) => console.log(`Do you copy, ${name}`);
call(`R2`);



function inc (speed:number, inc:number = 1): number {
    return speed + inc;
}
console.log(`inc (5,1) = ${inc(5,1)}`);
console.log(`inc (5) = ${inc(5)}`);



