let nameBook = prompt("Nhap ten sach");
let quantity = +prompt("Nhap so thu tu cua sach");
console.log("Ten sach goc", nameBook);
console.log(`Ma sach sau chuan hoa: LIB - ${nameBook.trim().toUpperCase()} - ${quantity}`);