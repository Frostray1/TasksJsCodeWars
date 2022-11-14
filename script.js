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

duplicateEncode("TTTTdT(TTTTwTTT");
// ))))()())))()))