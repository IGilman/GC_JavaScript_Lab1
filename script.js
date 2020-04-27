let name = "Isaac Gilman";
let age = 32;
let birthday = "May 24";
let detroitGC = true;
let lifeEvents = ["I was born in NYC", "I have a one year old daughter", "I am from New Jersey", "I moved to Michigan in 2010"];

if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
}
else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
    let randomNum = Math.floor(Math.random() * 11);
    if (randomNum !== 5) {
        counter++;
        console.log(`${randomNum} !==5!`);
    }
    else {
        counter++;
        console.log(`5===5. It took ${counter} iterations to randomly generate the number 5`);
        break;
    }

}