var msg = '<p><b>Page title: </b>' + document.title + '<br />';
// Tìm tên title của doc HTML, rồi đặt vào sau đoạn 'Page title:' của var msg
msg += '<b>Page address: </b>' + document.URL + '<br />';
// Tìm URL doc HTML, in sau đoạn 'Page address:' của msg
msg += '<b>Last modified: </b>' + document.lastModified + '</p>';
// Tìm thời điểm lần cuối trang được chỉnh sửa (lastModified) và in vào var msg

var el=document.getElementById('footer');
el.innerHTML=msg;