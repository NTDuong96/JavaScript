var price=5;
var quantity=14;
var total=price*quantity; //Khai báo các giá trị lần lượt cho price, quantity và total

var el=document.getElementById('cost'); //Lấy element với id của cost (getElementById - Id được để trong ('')
el.textContent='$'+total; // Để hiển thị thay đổi ra HTML (sau khi link bằng script) => $70