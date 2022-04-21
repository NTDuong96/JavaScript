var today= new Date(); // Tạo var lưu object new Date
var year= today.getFullYear(); // Tạo var lưu object năm

var el=document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';