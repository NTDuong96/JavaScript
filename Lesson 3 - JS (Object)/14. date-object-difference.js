var today = new Date();
var year = today.getFullYear();

var est = new Date('Apr 16, 1996 15:45:55');
// Đặt var est (ngày thành lập cty - Tháng/Ngày,Năm / Giờ)
var difference = today.getTime() - est.getTime();
// Tìm khoảng thời gian từ lúc est đến hiện tại, làm tròn đến mili giây
difference=(difference/31556900000);
// Chia con số từ phép tính difference (line 6) cho mili giây để tìm được số năm

var elMsg = document.getElementById('message');
elMsg.textContent=Math.floor(difference) + 'years of online travel advice';