// string tanımlaması çift tırnak veya tek tırnak kullanarak yapılabilir.
let string1="Merhaba"
let string2="Dünya"

// stringler başka string ifadelerle birleştirilebilirler.
let birlesim= string1+" "+string2
console.log(birlesim);
// çıktı: Merhaba Dünya

// index kullanarak istenilen karaktere ulaşılabilir
console.log("İlk karakter:",birlesim[0])
console.log("İkinci karakter:",birlesim[3])

// number tanımlama
let number=10


// number ve string farkı
let nbr =10
console.log(typeof nbr)
// çıktı: number

let str ="10"     //nbr değişkenine eşit değildir
console.log(typeof str)
// çıktı: string


// string ifadenin number ifadeye dönüşümü
str="10.34"

let numberInt= parseInt(str)
console.log(numberInt)
// çıktı :10

let numberFloat= parseFloat(str)
console.log(numberFloat);
// çıktı: 10.34


// boolean veri türü

let kullanici= true
console.log(kullanici);
// çıktı: true

let sayi1=10
let sayi2=5
let sayi1Buyuk= (sayi1>sayi2)
console.log(sayi1Buyuk);
// çıktı: true


// dizi
let dersler=["Türkçe","Matematik","Fizik", "Kimya","Biyoloji"]
console.log(dersler);
// çıktı:[ 'Türkçe', 'Matematik', 'Fizik', 'Kimya', 'Biyoloji' ]


console.log(dersler[0]);
// çıktı: Türkçe

let dizi=["merhaba",12,true]
console.log(dizi);
// çıktı:[ 'merhaba', 12, true ]

let diziUzunlugu=dizi.length
console.log(diziUzunlugu);
// çıktı: 3


let dizi1=["Türkçe","Matematik","Fizik"]
let dizi2=["Kimya","Biyoloji"]

let toplamDizi= dizi1.concat(dizi2)

console.log(toplamDizi);
// çıktı:[ 'Türkçe', 'Matematik', 'Fizik', 'Kimya', 'Biyoloji' ]



let ogrenci={"ad":"Ahmet","soyad":"Veli", "sehir":"Ankara","yas":25}
console.log(ogrenci);
// çıktı:{ ad: 'Ahmet', soyad: 'Veli', sehir: 'Ankara', yas: 25 }


console.log(ogrenci.ad);
// çıktı: Ahmet

console.log(ogrenci["yas"]);
// çıktı: 25