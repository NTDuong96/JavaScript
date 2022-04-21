var elements=document.getElementsByTagName('li');
// Lấy tất cả các element có tag (đúng hơn là lấy các tag) <li>

if(elements.length > 0) { //Nếu có nhiều hơn 1 tag <li> tìm thấy trong doc HTML
    var el=elements[0]; //Lấy tag <li> đầu tiên trong mảng các tag <li> (được lấy từ câu lệnh var đầu tiên)
    el.className ='cool'; // Đổi <li> đầu tiên trong mảng (fresh figs) thành class 'cool'
}