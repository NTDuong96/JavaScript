var colors=['white','black','custom'];
colors [2] = 'beige';
// Tạo mảng và thay đổi giá trị cuối cùng (custom) thành beige

var el=document.getElementById('colors');
el.textContent = colors[2];

// Lấy el id='colors' và thay đổi để cập nhật giá trị mới beige cho item thứ 3