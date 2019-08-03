//arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)
var romanToInt = function(s) {
    const rome = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
  
    return s.split('').reduce((acc, curr, ind, src) => {
      if(rome[curr] < rome[src[ind + 1]]) {
        acc -= rome[curr]
      } else {    
        acc += rome[curr];
      }
      return acc
    }, 0)
  };