for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let gunler=["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]

for (let i = 0; i < gunler.length; i++) {
    console.log(gunler[i])
}

// for/in

let user={ad:"Ahmet", meslek:"Yazılım", yas:"32"}
for(i in user){
    console.log("Özellik:",i," Değeri",user[i])
}
// Özellik: ad  Değeri Ahmet
// Özellik: meslek  Değeri Yazılım
// Özellik: yas  Değeri 32


for(gun in gunler){
    console.log("Özellik:",gun," Değeri",gunler[gun])
}
// Özellik: 0  Değeri Pazartesi
// Özellik: 1  Değeri Salı
// Özellik: 2  Değeri Çarşamba
// Özellik: 3  Değeri Perşembe
// Özellik: 4  Değeri Cuma
// Özellik: 5  Değeri Cumartesi
// Özellik: 6  Değeri Pazar

// for/of

for(gun of gunler){
    console.log("Değer:",gun)
}
// Değer: Pazartesi
// Değer: Salı
// Değer: Çarşamba
// Değer: Perşembe
// Değer: Cuma
// Değer: Cumartesi
// Değer: Pazar

