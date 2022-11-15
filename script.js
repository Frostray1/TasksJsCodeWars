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

descendingOrder(123456789);





