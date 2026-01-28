let nameBook = prompt("Nhap ten sach");
let publish = +prompt("Nhap nam xuat ban cua sach");
let year = new Date().getFullYear();
console.log("Ten sach: ", nameBook);
console.log("Nam xuat ban", publish);
console.log(`Tuoi cua sach ${year-publish} nam`);

