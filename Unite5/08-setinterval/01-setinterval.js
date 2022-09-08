let timeIdentifier=setInterval(function (){
    console.log("Merhaba Dünya")},2000)

setTimeout(function (){
    clearInterval(timeIdentifier)
    console.log("Zamanlayıcı durduruldu");
},5000)
// çıktı:  Merhaba Dünya
//         Merhaba Dünya
//         Zamanlayıcı durduruldu
