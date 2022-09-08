const x=function (param1) {
    console.log(param1);
    // çıktı: Merhaba Dünya
}

x("Merhaba Dünya")

let dizi=[
    
    ()=>  {
        console.log("Fonksiyon 1")
    },
    function () {
        console.log("Fonksiyon 2")
    },
    function () {
        console.log("Fonksiyon 3")
    }
]
dizi[0]()
// çıktı: Fonksiyon 1

dizi[1]()
// çıktı: Fonksiyon 2

dizi[2]()
// çıktı: Fonksiyon 3
