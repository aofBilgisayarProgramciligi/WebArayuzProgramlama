const meyveler=["elma", "muz", "çilek"]

console.log(...meyveler);
// çıktı:elma muz çilek


const dizi1=[1, 2, 3]
const dizi2=[4, 5, 6]
const dizi3=[...dizi1, ...dizi2]

console.log(dizi3);
// çıktı: [ 1, 2, 3, 4, 5, 6 ]



function f(a, b, ...c) {
    console.log(a);
    // çıktı:  1
    console.log(b);
    // çıktı:  2
    console.log(c);
    // çıktı:  [ 3, 4, 5 ]
}

f(1, 2, 3, 4, 5)

