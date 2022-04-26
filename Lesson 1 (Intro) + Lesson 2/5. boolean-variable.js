var inStock;
var shipping;
inStock=true;
shipping=false;
// Tạo var và gán các giá trị

var elStock=document.getElementById('stock');
elStock.className=inStock;
// Trỏ tới el <id='stock'>
// Thay class của el thành giá trị của inStock (true)

var elShip=document.getElementById('shipping');
elShip.className=shipping;
// Trỏ tới el <id='shipping'>
// Thay class của el thành giá trị của shipping (false)