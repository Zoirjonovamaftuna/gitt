// function max(...args) {
//     return args
// }

// console.log(max(4, 5, 6, 7, 8, 9))



// function sum(...nums) {
//     let sum = 0;
//     for (let num of nums) sum += num
//     return sum
// }

// console.log(sum(1, 2, 6, 9, 8, 10, 100))

// function showTitles(name, lastName, ...titles) {
//     console.log(name + ' ' + lastName)
//     console.log(titles)
// }

// showTitles("Matü", "Azi", "Best", "Friends")

// function showTitles(name, lastName, ...titles) {
//     console.log(arguments)
// }

// showTitles("Matü", "Azi", "Best", "Friends")

// let arr = [2, 5, 6],
//     arr2 = [-8, -9, 4, 2]
// console.log(Math.max(...arr, ...arr2, 30))

// let arr = [2, 5, 6],
//     arr2 = [-8, -9, 4, 2],
//     merged = [0, ...arr, ...arr2]
// console.log(merged)

// let str = 'Hello';

// console.log(...str, str)


// let str = 'Hello';

// console.log(str.split(""))

let str = 'Hello';

console.log(Array.from(str))