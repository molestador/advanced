module.exports = function getZerosCount(number, base) {
  // your implementation
  function getDivider(base) {
    let arr = [];
    for (let i = 2; i <= base; i += 1) {

      if (base % i === 0) {
        arr.push(i);
        base = base / i;
      }
    }
    return arr;
  }

  
  function getPrime(array) {
    
    array = array.filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    })
    
    return array;
  }
  
  let d = Math.max.apply(null, getPrime(getDivider(base)));

  let zeros = 0;

  while (number > 0) {
    number /= d;
    zeros += Math.floor(number)
  }

  return zeros;

}