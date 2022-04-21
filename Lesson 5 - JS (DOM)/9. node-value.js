var itemTwo = document.getElementById('two') // Lấy item thứ 2 trong list

var elText = itemTwo.firstChild.nodeValue; // Lấy giá trị text của item thứ 2 đó

elText = elText.replace('pine nuts','kale');
// Đổi Text từ pine nuts thành kale

itemTwo.firstChild.nodeValue=elText; //Cập nhật list mới (sau khi đã thay đổi text thành kale, để hiển thị trên web