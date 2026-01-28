let bookName = prompt("Nhap ten sach");
let authorName = prompt("Nhap ten tac gia");
let publish = +prompt("Nhap nam xuat ban");
let price = +prompt("Nhap gia tien mot cuon");
let quantity = +prompt("Nhap so luong nhap");

let bookCode = `${authorName.slice(0,3).toUpperCase()}${publish}-${Math.ceil(Math.random()*1000)}`;

let year = new Date().getFullYear();
let bookAge = year - publish;

let totalPrice = price * quantity;

console.log(`
    --- PHIẾU NHẬP KHO ---
    Mã sách: ${bookCode}
    Tên sách: ${bookName.trim().toUpperCase()}
    Tác giả: ${authorName.toUpperCase()}
    Năm xuất bản: ${publish}
    Tuổi sách: ${bookAge} năm
    Tổng giá trị: ${totalPrice} VNĐ
    Ngăn kệ gợi ý: Kệ số ${Math.ceil(Math.random()*10)}
    `);
