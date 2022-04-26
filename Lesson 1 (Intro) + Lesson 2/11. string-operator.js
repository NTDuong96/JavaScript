var greeting='Howdy'; // Lưu giá trị greeting và name trong các biến tương ứng
var name='Kelly';

var welcomeMessage= greeting + name + '!';
// Tạo một lời chào bằng cách kết nối các chuỗi ký tự (đã khai báo bằng var)

var el=document.getElementById('greeting');
el.textContent=welcomeMessage;
// Lấy el với id tương ứng
// Thay thế nội dung trong HTML thành nội dung lời chào ở dòng 4