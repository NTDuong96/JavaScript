var startItem=document.getElementById('ul')[0];
var firstItem=startItem.firstChild;
var lastItem=startItem.lastChild;

// Chọn item đầu tiên trong mảng <ul> làm mốc
// 2 câu lệnh kế tiếp lấy các item đầu tiên còn lại trong mảng (1 item đầu và 1 item cuối của mảng - sau khi trừ đi item mốc đầu tiên - i[0])

firstItem.className='complete'; // Đổi class cho i[1] thành complete
lastItem.className='cool'; // Đổi class i[3] thành cool

// [?] Code giống hình cho js nhưng không có thuộc tính nào của list được thay đổi cả...