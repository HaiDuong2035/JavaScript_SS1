let name = prompt("Nhap ten sach");
let publish = +prompt("Nhap nawm xuat ban cua sach");
let year = new Date().getFullYear();
console.log("Ten sach: ", name);
console.log("Nam xuat ban", publish);
console.log(`Tuoi cua sach ${year-publish} nam`);
