class Town {
    constructor(name, population) {
        this.name = name;
        this.population = population;
    }
}

const towns = [
    new Town('Skopje', 1),
    new Town('Berlin', 4),
    new Town('Moskow', 20),
    new Town('Valencia', 1),
    new Town('Istanbul', 18),
    new Town('Mexico City', 21)
]

const biggestTowns = towns.sort((a, b) => b.population - a.population)
const biggestTowns2 = towns.sort(town => town.population)
console.log(biggestTowns[0], biggestTowns[1], biggestTowns[2])
// console.log(biggestTowns[1])
// console.log(biggestTowns[2])
//console.log(biggestTowns2)


let numbers = [10, 5, 8, 15, 3];

let max = numbers.sort();
console.log(max[0])

const evenNum = max.filter(num => num % 2 === 0);
console.log(evenNum)


