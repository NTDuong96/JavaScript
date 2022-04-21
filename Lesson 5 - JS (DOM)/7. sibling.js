var startItem=document.getElementById('two');
var prevItem=startItem.previousSibling;
var nextItem=startItem.nextSibling;

// startItem lấy các element với id='two'
// (với ví dụ này có 1 el id='two' - Pine Nuts làm điểm mốc)
// [?] Nếu có nhiều hơn 1 item có cùng id thì các sibling sẽ được chọn ntn?
// prevItem - previousSibling lấy item liền trước startItem (điểm mốc) - ở đây là fresh figs
// nextItem - nextSibling lấy item sau điểm mốc (honey)

prevItem.className='complete'; // Đổi class item liền trước thành complete
nextItem.className='cool'; // Đổi class item liền sau thành cool