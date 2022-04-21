// Thêm item cho đầu và cuối list
var list=document.getElementsByTagName('ul')[0];
// Lấy element <ul> (item đầu tiên)

// Thêm item cuối list
var newItemLast=document.createElement('li');
// Tạo element mới (<li>)
var newTextLast=document.createTextNode('cream');
// Thêm text node với giá trị chuỗi = 'cream'
newItemLast.appendChild(newTextLast);
// Gắn content 'cream' vào element <li> vừa tạo (dòng 6)
list.appendChild(newItemLast);
// Thêm element vào list, vị trí được thêm = cuối list

// Thêm item đầu list
var newItemFirst=document.createElement('li');
// Tạo el mới (<li>)
var newTextFirst=document.createTextNode('kale');
// Thêm 'kale' vào text node vừa tạo
newItemFirst.appendChild(newTextFirst);
// Gắn 'kale' vào <li> (dòng 16)
list.insertBefore(newItemFirst,list.firstChild);
// Thêm el mới vào list (phần trong ngoặc - chuyển item đầu tiên (mới) tới vị trí đầu tiên của list trước đó [?])

var listItems=document.querySelectorAll('li') // Gắp toàn bộ element <li>

// Thêm class='cool' cho tất cả <li>
var i; // Back to C :)) (tạo var đếm=i)
for (i=0; i<listItems.length; i++) { // Từ <li> đầu tiên cho tới hết <li>, mỗi lần đếm +1, thực hiện lệnh trong { }
    listItems[i].className='cool'; // Tất cả các item (listItems[i]) sẽ có class được đổi thành cool (ngầu)
}

// Thêm số lượng item trong list vào heading
var heading=document.querySelector('h2') // Chọn các element <h2>
var headingText=heading.firstChild.nodeValue; // Lấy giá trị (text) của <h2> đầu tiên
var totalItems=listItems.length // Gắn số lượng <li> bắng listItems
var newHeading=headingText + '<span>' + totalItems + '</span>'; // In content cho heading
heading.innerHTML = newHeading; // Cập nhật <h2> bằng innerHTML (không phải textContent)

// Lí do không dùng textContent, vì lệnh này chỉ dùng để thay đổi text;
// Trong khi ở đây, element cần đổi là heading <h2>, không phải text trong các tag đó