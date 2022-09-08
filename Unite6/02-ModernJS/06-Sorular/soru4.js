const notlar= [13, 36, 60, 70, 75]

notlar.forEach(not=>{
    if (not>50){
        console.log(not);
    }
})



function buyuk(not){
    return not>50
}

console.log(notlar.filter(buyuk));

const dizi1=[1,2,3]
const dizi2=[4,5,6]
const dizi3=[dizi1 + dizi2]

console.log(dizi3);
// çıktı: [ 1, 2, 3, 4, 5, 6 ]