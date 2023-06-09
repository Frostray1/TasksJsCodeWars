// // Дублирующий кодер

// // Цель этого упражнения —
// // преобразовать строку в новую строку, где каждый символ в новой строке соответствует тому,
// // "("если этот символ появляется только один раз в исходной строке или
// // ")"если этот символ появляется в исходной строке более одного раза.
// // Игнорировать заглавные буквы при определении, является ли символ дубликатом.

// // Примеры
// // "din"      =>  "((("
// // "recede"   =>  "()()()"
// // "Success"  =>  ")())())"
// // "(( @"     =>  "))(("
// function duplicateEncode(word) {
//   word = word.toLowerCase();

//   let counter = 0;
//   var array = word.split("");
//   let array2 = Array.from(array);
//   let uniqSet = Array.from(new Set(array));
//   for (let i = 0; i < uniqSet.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (uniqSet[i] === array[j]) {
//         counter++;
//       }
//     }
//     if (counter > 1) {
//       for (let j = 0; j < array.length; j++) {
//         if (uniqSet[i] === array[j]) {
//           array2[j] = ")";
//         }
//       }
//       counter = 0;
//     } else {
//       for (let j = 0; j < array.length; j++) {
//         if (uniqSet[i] === array[j]) {
//           array2[j] = "(";
//         }
//       }

//       counter = 0;
//     }
//   }
//   text = array2.join("");
//   return text;
// }
// // В порядке убывания
// //Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания.
// //По сути, переставьте цифры, чтобы получить максимально возможное число.
// // Примеры:
// // Вход: 42145 Выход:54421

// // Вход: 145263 Выход:654321

// // Вход: 123456789 Выход:987654321
// function descendingOrder(n) {
//   const array = String(n).split("");
//   array.sort(function (a, b) {
//     return b - a;
//   });
//   n = +array.join("");
//   return n;
// }
// // 2 cтроки
// // Возьмите 2 строки s1и s2включите только буквы от aдо z.
// // Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
// // Примеры:
// // a = "xyaabbbccccdefww"
// // b = "xxxxyyyyabklmopq"
// // longest(a, b) -> "abcdefklmopqwxy"
// function longest(s1, s2) {
//   s1 = new Set(s1);
//   s2 = new Set(s2);
//   s1 = [...s1].join("");
//   s2 = [...s2].join("");
//   str = s1.concat(s2);
//   str = new Set(str);
//   str = [...str].join("");
//   let text = str.split("").sort().join("");
//   return text;
// }
// // Камень ножницы Бумага
// // Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.

// // Примеры (Ввод1, Ввод2 --> Выход):

// // "scissors", "paper" --> "Player 1 won!"
// // "scissors", "rock" --> "Player 2 won!"
// // "paper", "paper" --> "Draw!"
// const rps = (p1, p2) => {
//   if (
//     (p1 == "scissors" && p2 == "paper") ||
//     (p1 == "paper" && p2 == "rock") ||
//     (p1 == "rock" && p2 == "scissors")
//   ) {
//     return "Player 1 won!";
//   }
//   if (
//     (p2 == "scissors" && p1 == "paper") ||
//     (p2 == "paper" && p1 == "rock") ||
//     (p2 == "rock" && p1 == "scissors")
//   ) {
//     return "Player 2 won!";
//   }
//   if (
//     (p1 == "scissors" && p2 == "scissors") ||
//     (p1 == "paper" && p2 == "paper") ||
//     (p1 == "rock" && p2 == "rock")
//   ) {
//     return "Draw";
//   }
// };
// // Сложение элементов массива с возведением в квадрат
// function squareSum(numbers) {
//   let sum = 0;
//   array = numbers.map((num) => num * num);
//   array.forEach(function (elem) {
//     sum += elem;
//   });
//   return sum;
// }

// // Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их.
// // Например, если мы пропустим через функцию 9119, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1.
// // Примечание . Функция принимает целое число и возвращает целое число.

// function squareDigits(num) {
//   num = String(num);
//   num = num.split("");
//   let text = "";
//   let answer = num.reduce((prew, item) => {
//     item = item * item;
//     return (text = text + item);
//   }, -1);
//   return +answer;
// }

// function friend(friends) {
//   const bestFriends = friends.filter((item) => item.length == 4);

//   console.log(bestFriends);

//   return bestFriends;
// }

// function validatePIN(pin) {
//   console.log(/^\d+$/.test(pin));
//   console.log(">0", pin >= 0);
//   console.log("число", Number.isInteger(+pin));
//   console.log("Без букв", !isNaN(pin));
//   console.log("Либо 4 либо 6 ", pin.length === 4 || pin.length === 6);
//   console.log("Целое ли число?", pin.indexOf(".") == -1);
//   console.log("Финал ");
//   console.log();

//   console.log(
//     /^\d+$/.test(pin) &&
//       Number.isInteger(+pin) &&
//       !isNaN(pin) &&
//       (pin.length === 4 || pin.length === 6)
//       ? true
//       : false
//   );

//   return pin > 0 &&
//     Number.isInteger(+pin) &&
//     !isNaN(pin) &&
//     (pin.length === 4 || pin.length === 6)
//     ? true
//     : false;
// }

// function findNeedle(haystack) {
//   haystack.forEach(function (elem, index) {
//     if (elem === "needle") pos = index;
//   });
// }

// function cakes(recipe, available) {
//   console.log("Дано", available);
//   console.log("рецепт", recipe);
//   let flag = false;
//   let prop,
//     counter = 0;
//   let answer=0;
//   let array__recipe = [];
//   let array__available = [];
//   for (prop in recipe) {
//     array__recipe[counter] = prop;
//     counter++;
//   }
//   counter = 0;
//   for (prop in available) {
//     array__available[counter] = prop;
//     counter++;
//   }
//   console.log('Массив рецепта - ',array__recipe);
//   console.log('Массив продуктов - ',array__available);

//   for (let i = 0; i < array__recipe.length; i++) {
//     for (let j = 0; j < array__available.length; j++) {
//       if (array__recipe[i] === array__available[j]) {
//         flag = true;
//         break;
//       } else {
//         flag = false;
//       }
//     }
//   }
//   console.log (flag);

//   if (flag===true) {
//     for (key in recipe) {
//       console.log('key',key);
//       if (recipe[key] === available[key]) {
//         if (answer<recipe[key]){
//           answer = 1;
//         }else{
//           answer = 1;
//           return answer;
//         }
//         console.log(answer);
//         // return prop;
//       } else if (recipe[key] < available[key]) {
//         console.log (recipe[key],' < ',available[key])
//         // console.log(key);
//         prop = Math.floor(available[key] / recipe[key]);
//         if (answer === 0) {
//           answer = prop;
//           // console.log ('answ',answer)
//         }
//         // console.log (answer, '<', prop ,'?' , answer,'=', prop, ':', answer)
//         answer = answer < prop ? answer : prop;
//         // console.log(answer);
//       }else if (recipe[key] > available[key]){
//         console.log('хуй вам 0 ')
//          return 0;
//       }

//     }
//     console.log('Окончательный ответ ', answer);
//     return answer;
//   }else {
//     // console.log('хуй вам 0 ')
//     return 0;
//   }
// }

// let recipe = { crumbles: 4, apples: 3 }
// let available = {
//   flour: 5,
//   eggs: 4,
//   oil: 12,
//   milk: 13,
//   apples: 16,
//   sugar: 15,
//   cream: 19,
//   pears: 16,
//   butter: 11,
//   nuts: 16,
//   chocolate: 16,
//   cocoa: 7,
//   crumbles: 4
// }
// cakes(recipe, available);// надо 1 получить

// function sumStrings(a,b) {
//   let sum = BigInt(a)+BigInt(b)

//   return String(sum)
// }

// sumStrings('1','2')

// function smash (words) {
// let str = String(words)
// for (let i=0; i< words.length; i++){
//   if (i%2==0){
//     buffer = str.replace(',', ' ')
//   }else{
//     str = buffer.replace(',', ' ')
//   }

// }
// return str

// };

// smash(['hello', 'world', 'this', 'is', 'great','asd'] )

// function findAverage(array) {
//  console.log( array == 0 ? 0 : array.reduce((a, b) => (a + b)) / array.length)
//   // return array == undefined ? 0 : array.reduce((a, b) => (a + b)) / array.length;

// }

// findAverage([])

// Вы получаете массив чисел, возвращаете сумму всех положительных значений.

// Пример [1,-4,7,12] => 1 + 7 + 12 = 20

// Примечание: если нечего суммировать, по умолчанию сумма равна 0.

// function positiveSum(arr) {
//   const sum = arr.reduce(function (currentSum, currentNumber) {
//     return currentNumber > 0 ? (currentSum += currentNumber) : currentSum;
//   }, 0);
//   console.log(sum);
// }

// positiveSum([1, -2, 3, 4, 5]); //13

// function check(a, x) {
//   console.log(a.indexOf(x)>=0 ? true:false)
// //
// }

// check(['t', 'e', 's', 't'], '');

// function maps(x){
//   const x1 = x.map((elem)=>{
//     console.log(elem*2)
//   })
// }

// maps([1, 2, 3])

// function squareSum(numbers){
//   const sum = numbers.reduce(function (currentSum, currentNumber) {
//   return currentSum += Math.pow(currentNumber,2)

// }, 0)
//   console.log(sum)
// }

// squareSum([1,2])

// function spinWords(string) {
//   let a = string.split(" ");

//   let b = string.split(" ").map((item) => {
//     if (item.length >= 5) {
//       item.split('').reverse().join('')
//     }
//     console.log(item);
//   });

//   //
// }

// spinWords("This is another test"); // "This is rehtona test"

// function getNumberOfGames(x) {
//   let match = Math.floor(x / 2);
//   let commands = x;
//   let allMatch = 0;
//   if (x <= 100 && x >= 1) {
//     if (x % 2 === 0) {
//       console.log("Четное = ", x);
//       while (match != 1) {
//         console.log("Проход  = ", 1);
//         console.log("  ");

//         match = Math.round((commands - 1) / 2);
//         commands = Math.floor((commands - 1) / 2 + 1);
//         allMatch += match;
//         console.log("Матчей осталось = ", match);
//         console.log("Команд = ", commands);
//         console.log("________________");
//       }
//     } else {
//       console.log("Нечетное = ", x);
//       while (match != 1) {
//         console.log("Проход  = ", 1);
//         console.log("  ");

//         match = Math.round((commands - 1) / 2);
//         commands = Math.floor((commands - 1) / 2 + 1);
//         allMatch += match;
//         console.log("Матчей осталось = ", match);
//         console.log("Команд = ", commands);
//         console.log("________________");
//       }
//     }
//   }

//   console.log("Всего игр - ", allMatch);
//   return allMatch;
// }

// getNumberOfGames();

// function getNumberOfGames(x) {
//   if (x <= 1 || x > 100) {
//     return 0;
//   }
//   let totalGames = 0;
//   while (x > 1) {
//     if (x % 2 === 0) {
//       totalGames += x / 2;
//       x /= 2;
//     } else {
//       totalGames += (x - 1) / 2;
//       x = (x - 1) / 2 + 1;
//     }
//   }
//   return totalGames;
// }

// // Примеры использования
// // console.log(getNumberOfGames(10));
// let allMatch = 0;
// for (let i = 2; i <= 100; i++) {
//   allMatch += getNumberOfGames(i);
//   console.log(i , '--',allMatch )
// }

// function friend(friends){
//   console.log(friends.filter(name => name.match(/^[a-zA-Z]{4}$/)))
//   return friends.filter(word => word.length <= 4)
// }

// friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])

// function findNeedle(haystack) {

//   let a = String('found the needle at position '+haystack.indexOf('needle'))
//   console.log(a)
// }

// findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])

// function disemvowel(str) {
//   let disemvowel = (str) => str.replace(/[aeiouy]/gi, "");
//   return(disemvowel(str))
// }

// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))

// Напишите функцию, которая определяет факт пересечения 2-х интервалов, наприсер (-2; 3) и [3:5]

// function interval(array1, array2) {
//   const length = array1.length + array2.length;
//   const array3=[]
//   const array4=[]
//   for (let i = length; i >= 0; i--) {
//     i < array1.length? array3.push(array1[i]):array4.push(array2[i])
//     // if (i< array1.length ){
//     //     array3.push(array1[i])
//     //     array4.push(array2[i])
//     // }else{
//     //     if (i<array2.length ){
//     //         array4.push(array2[i])
//     //     }
        
//     // }


//   }
//   console.log(array3)
//   console.log(array4)
// }

// interval([4, 3, 2, 1], [9, 8, 7, 6, 5, 4, 3]);




function domainName(url){

  const array = url.split('.')
  console.log(array.indexOf('com'))
  
  console.log(array)
}

domainName("http://google.com")
domainName("www.xakep.ru")