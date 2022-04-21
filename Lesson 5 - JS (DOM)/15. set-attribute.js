var firstItem=document.getElementById('one'); // Lấy item đầu list
firstItem.className='complete'; // Đổi thuộc tính class (chuyển 'hot' -> 'complete')

var fourthItem=document.getElementsByTagName('li').item(3);
// Một cách chọn item khác (trỏ đến tag name và thứ tự item - khá giống với mảng)
// Note: Dòng kế tiếp phải sử dụng fourthItem (không phải el2)
fourthItem.setAttribute('class','cool'); // Thêm thuộc tính class='cool' cho item thứ 4

// Ví dụ set attribute đổi 2 thuộc tính class cho item 1 và 4 của list