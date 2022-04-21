var firstItem = document.getElementById('one');
// Lấy item đầu tiên trong list đặt vào var

var itemContent=firstItem.innerHTML;
// Lấy content của item đầu tiên trong list

firstItem.innerHTML = '<a href="#">' + itemContent + '</a>';
// Cập nhật thông tin cho item đầu tiên của list, chuyển nó thành link