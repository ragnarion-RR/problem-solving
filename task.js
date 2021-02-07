// 1.Есть ферма животных, у всех животных есть имена и возраст. 
// Животные бывают разных типов: Кошки, Собаки, Коровы. У каждого 
// животного могут быть дети. Если животное является родителем этих
// детей, в свою очередь глубина семейного древа может достигать 
// N либо 0. Опишите структуры данных для фермы животных и напишите
// функцию, которая делает подсчёт всех возрастов животных и выводит 
// общий возраст для всей фермы.

// const cat = {
//   name: 'кот',
//   mass: 10,
//   childs: [
//     {
//       name: 'котенок',
//       mass: 10,
//     },
//     {
//       name: 'котенок',
//       mass: 10,
//     }
//   ]
// }

// const dog = {
//   name: 'собака',
//   mass: 20,
//   childs: []
// }

// const cow = {
//   name: 'корова',
//   mass: 15,
//   childs: [
//     {
//       name: 'теленок',
//       mass: 10,
//     }
//   ]
// }

// const fish = {
//   name: 'рыба',
//   mass: 5,
//   childs: []
// }

// const animals = [cat, dog, cow, fish]
// const animals2 = [cat, cat, cat, cat]

// let allMass = 0
// for (const animal of animals) {
//   allMass = allMass + animal.mass;
//   console.log(animal.name + ' ' + allMass)
//   if (animal.childs.length > 0) {
//     for (const child of animal.childs) {
//       allMass = allMass + child.mass;
//       console.log(child.name + ' ' + allMass)
//     }
//   }
// }
// console.log(allMass)

// function sumMass(animals, withСhild) {
//   let allMass = 0
//   for (const animal of animals) {
//     allMass = allMass + animal.mass;
//     console.log(animal.name + ' ' + allMass)
//     if (withСhild===true && animal.childs.length > 0) {
//       for (const child of animal.childs) {
//         allMass = allMass + child.mass;
//         console.log(child.name + ' ' + allMass)
//       }
//     }
//   }
//   return allMass
// }
// console.log(sumMass(animals, true))
// console.log(sumMass(animals2, true))
// console.log(sumMass([]))




// 2. Определите переменные str, num, flag и txt со значениями 
// «Привет», 123, true, «true». При помощи оператора определения
//  типа убедитесь, что переменных принадлежат типам: 
//  string, number, boolean.

// const str = 'Привет'
// const num = 123
// const flag = true
// const txt = 'true'

// console.log(typeof(str))
// console.log(typeof(num))
// console.log(typeof(flag))
// console.log(typeof(txt))




// 3.Создайте переменные a1, a2, a3, a4, a5. 
// При помощи математических операторов 
// (сложение, вычитание и т.д.) найдите значения выражений:
// 5 + 3,
// 5 - 3,
// 5 * 3,
// 5 / 3,

// const a1 = 1
// let a2 = 2
// const a3 = 3
// const a4 = 4
// const a5 = 5

// console.log(parseFloat((a3+a5).toFixed(1)))
// console.log(parseFloat((a5-a3).toFixed(1)))
// console.log(parseFloat((a5*a3).toFixed(1)))
// console.log(parseFloat((a5/a3).toFixed(3)))





// 4.Создайте переменные a6, a7, a8, a9, a10.
//  Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'

// const a6 = (5%3)
// const a7 = (3%5)
// const a8 = (5 + '3')
// const a9 = ('5' - 3)
// const a10 = (75 + 'кг')

// console.log([a6,a7,a8,a9,a10])




// 5.Напишите скрипт, который находит площадь прямоугольника
//  высота 23см. (в числовую переменную height), шириной 10см 
//  (в числовую переменную width), значение площади должно 
//  хранится в числовой переменной s.

// const height = 23
// const width = 10
// const s = (height*width)

// console.log(s,'см')






// 6.Напиши скрипт, который находит объем цилиндра высотой 10м 
// (переменная heightC) и диаметром основания 4м (dC), 
// результат поместите в переменную v.

// const heightC = 10
// const dC = 4
// const v = (Math.PI*Math.pow(dC/2,2)*heightC)

// console.log(v,'м')



// 7.У прямоугольного треугольника две стороны n (со значением 3) 
// и m (со значением 4). Найдите гипотенузу k по 
// теореме Пифагора (нужно использовать функцию 
//   Math.pow(число, степень) или оператор возведения 
//   в степень ** ).

// const n = 3
// const m = 4
// const k = (Math.pow(3,2)+Math.pow(4,2))

// console.log(Math.sqrt(k))
