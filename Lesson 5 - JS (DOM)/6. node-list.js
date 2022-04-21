var hotItems=document.querySelectorAll('li.hot');
// Lấy ra một NodeList (với ví dụ là list các item có class='hot') lưu trữ thành mảng

if(hotItems.length > 0){ //Nếu dùng câu lệnh lấy NodeList mà có item class='hot', làm lệnh trong { }
    for(var i=0; i<hotItems.length; i++){ //Vòng lặp chạy từ thành phần đầu tiên (i=0), chạy đến khi hết hotItems, mỗi lần chạy i tăng thêm 1
        hotItems[i].className='cool'; // Đổi class thành cool cho các item (số thứ tự = i trong mảng) từ hot thành cool
    }

}