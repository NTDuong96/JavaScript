// Tạo var để lưu object số sử dụng cho ví dụ
var oriNumber = 10.23456;

// Tạo var lưu đoạn text hiện trên page (chỉ in ra số ban đầu, chưa chỉnh cách hiển thị số)
var msg = '<h2>Original number</h2><p>' + oriNumber + '</p>';

// Làm tròn số tới số thập phân thứ 3 (object số.toFixed(hiện đến số thứ mấy sau dấu thập phân)
msg += '<h2>3 decimal places</h2><p>' + oriNumber.toFixed(3) + '</p>';

// Làm tròn tới chính xác 3 chữ số sau dấu thập phân (toPrecision(3))
msg += '<h2>digits</h2><p>' + oriNumber.toPrecision(3) + '</p>';

var el=document.getElementById('info');
el.innerHTML = msg;