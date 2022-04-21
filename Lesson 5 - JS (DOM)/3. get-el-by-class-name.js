var elements=document.getElementsByClassName('hot')
// Lấy tất cả các thành phần có class là 'hot' (3 item <li> đầu tiên trong <ul>)

if(elements.length > 2) { //Nếu số item có class ở trên >3
    var el=elements[2]; // Lấy item thứ 3 trong mảng
    el.className='cool'; // Đổi giá trị thuộc tính của class thành cool (chỉ áp dụng với item thứ 3 (honey) - đã Inspect bằng trình duyệt)
}