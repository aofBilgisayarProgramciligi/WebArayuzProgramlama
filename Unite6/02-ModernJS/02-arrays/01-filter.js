const yaslar = [32, 33, 16, 40]

function yasKontrol(yas) {
    return yas >= 18;
}

const altKume = yaslar.filter(yasKontrol)

console.log(altKume)
// çıktı :[ 32, 33, 40 ]
