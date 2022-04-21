var el=document.querySelector('li.hot'); // Vậy querySelector chỉ lấy giá trị đầu tiên có thuộc tính 'hot' trong <li>
el.className='cool' // Đổi class của el được chọn thành 'cool'

var els=document.querySelectorAll('li.hot');
els[1].className = 'cool';

// var els ở đây lấy nhiều item - tương ứng với câu lệnh querySelectorAll (có nhiều hơn 1 item)
// els[1] đổi thành cool, nghĩa là chỉ có item thứ 2 trong mảng (nếu mảng nhiều hơn 1) được đổi thành cool
// Vì 1 trong 3 element 'hot' đã đổi thành 'cool' sau lệnh querySelector, nên item thứ 2 trong mảng sẽ là el thứ 3 trong <li> - honey