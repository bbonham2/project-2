// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

let revWord = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr){
    result = char + result;
  }
  return result;
};

let revWords1 = (sentence) => {
  let arr = sentence.split(" ");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    let currentWord = arr[i];
    let reversedWord = revWord(currentWord);
    result += revWord(currentWord) + " ";
  }
  return result;
};


// not sure how to do these next two
let revWords2 = sentence => {
  let arr = sentence.split(" ");

  arr.forEach(function
  });
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    let currentWord = arr[i];
    let reversedWord = revWord(currentWord);
    result += revWord(currentWord) + " ";
  }
  return result;
};

  let revWords3 = (sentence) => {
    let arr = sentence.split(" ");
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      let currentWord = arr[i];
      let reversedWord = revWord(currentWord);
      result += revWord(currentWord) + " ";
    }
    return result;
  };
