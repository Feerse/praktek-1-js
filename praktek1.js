// const tagihan = 100000; // Nyimpan data tagihan
// const tip = 0.25; // persentase tip dari harga bayar
// const nilaiTip = tagihan * tip; // perhitungan dari nilaiTip = tagihan dikali tip

// // Tampilkan dalam konsol
// console.log(
// 	`Tagihan sejumlah ${tagihan}, tip ${nilaiTip}, total bayar ${
// 		tagihan + nilaiTip
// 	} `,
// );

const uang = prompt('Masukkan uang: ');
const beliBaju = prompt('Masukkan jumlah baju yang dibeli: ');
let diskon = beliBaju > 3 ? uang * 0.35 : uang * 0.05;
alert(`Nilai potongan diskon: Rp.${diskon.toFixed(0)}`);

// const hargaSatuan = 15000;
// const pasangBaju = 4;
// const totalHarga = hargaSatuan * pasangBaju;
// let diskon = 0;

// if (pasangBaju > 3) {
// 	diskon = 0.35;
// 	console.log(`Harga 1 baju: ${hargaSatuan}`);
// 	console.log(`Baju yang dibeli: ${pasangBaju}`);
// 	console.log(`Nilai potongan diskon: ${diskon * totalHarga}`);
// 	console.log(`Harga sebelum diskon: ${totalHarga}`);
// 	console.log(`Harga sesudah diskon: ${totalHarga - diskon * totalHarga}`);
// } else {
// 	diskon = 0.05;
// 	console.log(`Harga 1 baju: ${hargaSatuan}`);
// 	console.log(`Baju yang dibeli: ${pasangBaju}`);
// 	console.log(`Nilai potongan diskon: ${diskon * totalHarga}`);
// 	console.log(`Harga sebelum diskon: ${totalHarga}`);
// 	console.log(`Harga sesudah diskon: ${totalHarga - diskon * totalHarga}`);
// }

// // Baju Tipe A Range 15.000
// // Baju Tipe B Range 25.000
// const tipeA = 15000;
// const tipeB = 25000;
// const beliTipeA = 3;
// const beliTipeB = 2;
// const total = tipeA * beliTipeA + tipeB * beliTipeB;
// let diskon = beliTipeA + beliTipeB > 3 ? 0.35 : 0.05;

// console.log(`Harga sebelum diskon: ${total}`);
// console.log(`Nilai potongan diskon: ${total * diskon}`);
// console.log(`Harga sesudah diskon: ${total - total * diskon}`);
