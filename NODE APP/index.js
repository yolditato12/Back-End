//membuat module sendiri
let { penjumlahan, pengurangan } = require(`./mymodules`);  //cara memanggil module
// di dlm let itu nama modulenya

console.log(penjumlahan (100, 50)); //100 dan 50 ada parameter utk di hitung
console.log(pengurangan (100, 50)); //100 dan 50 ada parameter utk di hitung


//modele javascript
let timers = require(`timers`)
timers.setTimeout(waktu = () => {
    console.log(`hello`) }, 2000);

let url = require(`url`)
let link = `http://lin.id/data.html?tgl=12&blm=januari`

let parsing = url.parse(link, true)

console.log(`host :`, parsing.host);
console.log(`path :`, parsing.pathname);
console.log(`query :`, parsing.search);

// npm modules
let colors = require(`colors`)  //panggil package

console.log(`hay`.blue);    // blue = warna yg ada pada package
console.log(`test`.rainbow);
console.log(`test2`.bgCyan);    // bg = memberi background


// module utk mengetahui waktu saat ini
let moment = require(`moment`)  //panggil module atau package

let today = moment().format(`dddd, MMMM Do yyyy, h:mm:ss a`)

console.log(today);