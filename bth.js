let bookName="  Lap trinh web voi JavaScript  ";
let authorName="Nguyen Van A";
let publish=2022;
let price=100000;
let quantity=100;

console.log("Chuoi sau khi chuyen thanh in hoa:", bookName.trim().toUpperCase());
console.log("Ten tac gia sau khi chuyen thanh chu in hoa:", authorName.toUpperCase());

console.log("3 ky tu dau ten tac gia:", authorName.slice(0,3));
console.log("Nam xuat ban:", publish);
console.log("So ngau nhien tu 1 den 1000:", Math.ceil(Math.random()*1000));

let bookCode = `${authorName.slice(0,3)}${publish}-${Math.ceil(Math.random()*1000)}`;
console.log("ma sach", bookCode);

console.log("thoi gian hien tai:", new Date());
let year=new Date().getFullYear();
let month=new Date().getMonth()+1;
let date=new Date().getDate();
let hour=new Date().getHours();
let minute=new Date().getMinutes();
let second=new Date().getSeconds;
let milliSecond=new Date().getMilliseconds;

console.log("Nam hien tai: ", year);
console.log("Thang hien tai: ", month);
let bookAge=year-publish;
console.log("Tuoi cua sach: ", bookAge);

let totalPrice=price*quantity;
console.log("Tong gia tri cua kho sach: ", totalPrice);

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
