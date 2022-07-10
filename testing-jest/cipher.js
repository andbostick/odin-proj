const Alphabet = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

function cipher(string, shift) {
    let splitArr = string.split('')
    console.log(splitArr)
    splitArr.forEach(element => {
        if (element === Alphabet[element]) {
            console.log(Alphabet[element], element)
            console.log(Alphabet[element] + shift, element)
        }
        console.log(element)
    });
    // console.log(Alphabet.a + 5)
  return splitArr.join('');
}

module.exports = cipher;
