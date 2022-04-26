var subtotal=(13+1)*5; //subtotal=70
var shipping=0.5*(13+1); //shipping=7
var total=subtotal+shipping; //total=77
//Tạo var với các toán tử tương ứng

var elSub=document.getElementById('subtotal');
elSub.textContent= subtotal;

var elShip=document.getElementById('shipping');
elShip.textContent= shipping;

var elTotal=document.getElementById('total');
elTotal.textContent= total;

// In kết quả các el lên màn hình