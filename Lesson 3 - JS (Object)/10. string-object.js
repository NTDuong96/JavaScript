// Tạo var lưu giá trị của chuỗi được sử dụng trong ví dụ
var saying='Home sweet home';

// Tạo var msg để hiển thị text trên web
var msg = '<h2>length</h2><p>' + saying.length + '</p>';
// Tìm độ dài của chuỗi và in trong msg
msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
// Chuyển chuỗi thành in hoa và in trong msg
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
// Giống với in hoa, nhưng dòng trên chuyển chuỗi thành viết thường
msg += '<h2>character index: 12 </h2><p>' + saying.charAt(12) + '</p>';
// Tìm ký tự số thứ 12 trong chuỗi và add vào msg
msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';
// Tìm đoạn ee đầu tiên (indexOf - o in hoa, không phải số 0) trong chuỗi rồi in vào msg
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';
// Tìm 'e' cuối cùng trong chuỗi (lastIndexOf)
msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8,14) + '</p>';
// Tìm các ký tự của chuỗi, thứ tự trong khoảng thứ 8-14 của chuỗi (substring(thứ tự đầu,cuối))
msg += '<h2>replace</h2><p>' + saying.replace('me','w') + '</p>';
// Tìm và thay thế 'me' đầu tiên của chuỗi bằng 'w'
// Hàm thay thế replace('đoạn ký tự muốn thay trong chuỗi', 'ký tự mới muốn thay thế')

var el=document.getElementById('info');
el.innerHTML=msg;