var title="Howdy's special offers";
var message= '<a href="sale.html">25% off!</a>';
// Gán giá trị cho title và message
// Giá trị message là 1 link, file sale.html

var elTitle=document.getElementById('title');
elTitle.textContent=title;
// Lấy element với id='title', thay content hiển thị tương ứng
// Tương tự với id='note' ở dưới.

var elNote=document.getElementById('note');
elNote.textContent=message;