var inStock=true;
var shipping=false;
// Gán giá trị true/false cho 2 var

inStock=false;
shipping=true;

var elStock=document.getElementById('stock');
elStock.className=inStock;
var elShip=document.getElementById('shipping');
elShip.className=shipping;

// inStock và shipping sau khi chạy thử đã thay đổi giá trị true/false