// normal fonksiyon tanımı
var carp = function(x, y) {
    return x * y;
}
console.log(carp(3, 5));


const carp2 = (x, y) => x * y;
console.log(carp2(3, 5));


const carp3 = (x, y) => {
    let sonuc = x*y
    return sonuc
};
console.log(carp3(3, 5));