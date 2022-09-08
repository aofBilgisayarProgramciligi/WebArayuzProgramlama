// setTimeout(f, 2000);
//
// function f(){
//     console.log("Merhaba Dünya")
// }
// // çıktı: Merhaba Dünya
//
// setTimeout(function(){
//     console.log("Merhaba Dünya");
// }, 2000);
// // çıktı: Merhaba Dünya
//

let timerIdentifier=setTimeout(function(){
    console.log("Merhaba Dünya");
}, 2000);

clearTimeout(timerIdentifier)
