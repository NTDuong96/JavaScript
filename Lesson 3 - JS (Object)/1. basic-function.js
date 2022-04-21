var msg="Sign up to receive newsletter with 10% off!";
// Khai báo var (msg) để hiển thị dòng text mới

// Tạo hàm updateMessage để cập nhật content cho element <div id=message>
function updateMessage(){
    var el=document.getElementById('message');
    el.textContent=msg;
}
// Lấy element với id=message (ở đây là <div id=message>) - dòng đầu tiên trong hàm
// Dòng dưới để thay đổi text trong HTML thành dòng text của msg (dòng khai báo)
updateMessage(); // Gọi hàm để áp dụng thay đổi.

//Lưu ý: File CSS khi tải trên classroom, cần đổi lại đường dẫn để áp dụng CSS vào HTML (do địa chỉ lưu trên từng máy khác nhau)