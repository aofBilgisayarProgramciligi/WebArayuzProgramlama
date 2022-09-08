const yaslar = [15, 32, 33, 16, 40]

function yasKontrol(yas) {
    return yas > 18;
}

console.log(yaslar.findIndex(yasKontrol))
// çıktı: 1