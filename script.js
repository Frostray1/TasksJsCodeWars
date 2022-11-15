// Дублирующий кодер

// Цель этого упражнения —
// преобразовать строку в новую строку, где каждый символ в новой строке соответствует тому,
// "("если этот символ появляется только один раз в исходной строке или
// ")"если этот символ появляется в исходной строке более одного раза.
// Игнорировать заглавные буквы при определении, является ли символ дубликатом.

// Примеры
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
function duplicateEncode(word) {
  word = word.toLowerCase();

  let counter = 0;
  var array = word.split("");
  let array2 = Array.from(array);
  let uniqSet = Array.from(new Set(array));
  for (let i = 0; i < uniqSet.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (uniqSet[i] === array[j]) {
        counter++;
      }
    }
    if (counter > 1) {
      for (let j = 0; j < array.length; j++) {
        if (uniqSet[i] === array[j]) {
          array2[j] = ")";
        }
      }
      counter = 0;
    } else {
      for (let j = 0; j < array.length; j++) {
        if (uniqSet[i] === array[j]) {
          array2[j] = "(";
        }
      }

      counter = 0;
    }
  }
  text = array2.join("");
  return text;
}
// В порядке убывания
//Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания.
//По сути, переставьте цифры, чтобы получить максимально возможное число.
// Примеры:
// Вход: 42145 Выход:54421

// Вход: 145263 Выход:654321

// Вход: 123456789 Выход:987654321
function descendingOrder(n) {
  const array = String(n).split("");
  array.sort(function (a, b) {
    return b - a;
  });
  n = +array.join("");
  return n;
}
// 2 cтроки
// Возьмите 2 строки s1и s2включите только буквы от aдо z. 
// Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
// Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
function longest(s1, s2) {
  s1 = new Set(s1)
  s2 = new Set(s2)
  s1 = [...s1].join('')
  s2 = [...s2].join('')
  str = s1.concat(s2);
  str = new Set(str)
  str = [...str].join('')
  let text = str.split('').sort().join('');
  return text
}
// Камень ножницы Бумага
// Давайте играть! Вы должны вернуть, какой игрок выиграл! В случае ничьей возврат Draw!.

// Примеры (Ввод1, Ввод2 --> Выход):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
const rps = (p1, p2) => {
  if (p1 == 'scissors' && p2 == 'paper' || p1 == 'paper' && p2 == 'rock' || p1 == 'rock' && p2 == 'scissors'){
    return "Player 1 won!";
  }
  if (p2 == 'scissors' && p1 == 'paper' || p2 == 'paper' && p1 == 'rock' || p2 == 'rock' && p1 == 'scissors'){
    return "Player 2 won!";
  }
  if (p1 == 'scissors' && p2 == 'scissors' || p1 == 'paper' && p2 == 'paper' || p1 == 'rock' && p2 == 'rock'){
    return "Draw"
  }
};
// Сложение элементов массива с возведением в квадрат
function squareSum(numbers){
  let sum=0;
  array = numbers.map((num) => num * num);
  array.forEach(function(elem) {
     sum+=elem;
  });
  return sum
}



// Добро пожаловать. В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их.
// Например, если мы пропустим через функцию 9119, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1.
// Примечание . Функция принимает целое число и возвращает целое число.

function squareDigits(num){
  num = String(num)
  num = num.split('');
  let text = '';
  let answer = num.reduce((prew,item) => {
    item = item * item;
    return text = text+item;
  },-1)
  return +answer;
}


squareDigits(3212)