// from https://www.codewars.com/kata/dragons-curve/javascript

const Dragon = (n, str='Fa')=>{
  if (isNaN(n) || n<0) return ''
  if(n===0) {
    str=str.replace(/a/g, '')
    str=str.replace(/b/g, '')
    return str
  }
  let newStr=str.replace(/b/g, 'c')
  newStr=newStr.replace(/a/g, 'aRbFR')
  newStr=newStr.replace(/c/g, 'LFaLb')
  // }
  return Dragon(n-1, newStr)
}

console.log(fxn(0))
console.log(fxn(1))
console.log(fxn(2))
console.log('FRFRRLFLFR')