const adSoyad=["ali", "yılmaz"]

//klasik yöntem
// const ad= adSoyad[0]
// const soyad= adSoyad[1]


//destructuring yöntemi
// const [ad, soyad]=adSoyad

// const ogrenci = ["ali","yılmaz",20,"istanbul","bilgisayar programcılığı"]
//
// const [ad,,yas]=ogrenci
//
// console.log(ad);
// // çıktı: ali
//
// console.log(yas);
// // çıktı : 20

const ogrenci={"ad": "Ali", "soyad": "Yılmaz", "sehir": "İstanbul", "yas": 20}
// const ad=ogrenci.ad
// const soyad=ogrenci.soyad
// const yas=ogrenci.yas
// const sehir=ogrenci.sehir

// console.log("Öğrencinin Adı:",ad," Soyadı:",soyad," Yaşı:",yas," Yaşadığı Şehir:",sehir)
// Öğrencinin Adı: Ali  Soyadı: Yılmaz  Yaşı: 20  Yaşadığı Şehir: İstanbul


const {ad, soyad, yas, sehir}=ogrenci
console.log("Öğrencinin Adı:",ad," Soyadı:",soyad," Yaşı:",yas," Yaşadığı Şehir:",sehir)
