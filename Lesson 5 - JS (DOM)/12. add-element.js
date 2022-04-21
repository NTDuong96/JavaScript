var newEl=document.createElement('li');
// Tạo 1 el mới và lưu trong var

var newText=document.createTextNode('quinoa');
// Tạo 1 text node (điểm text?) và lưu trong var newText.

newEl.appendChild(newText);
// Gắn phần content của newText vào el mới
// (Có thể hiểu phần newText được copy đến vị trí của element mới - newEl)

var position=document.getElementsByTagName('ul')[0];
// var position trỏ tới vị trí thêm element mới (newEl) vào (i[0] của <ul>)

position.appendChild(newEl);
// Gắn newEl (đã bao gồm content được gán của newText) vào vị trí (i[0] của <ul>)

// [?] i[0] của <ul> thì dòng quinoa phải nhảy tới trên của fresh figs...?