// Tạo hàm để cập nhật element với id có value=message (<div id="message">
function getArea(width,height){
    var el=document.getElementById('message');
    el.textContent="Area is" + width*height;
}
// Dòng thứ nhất giống với CSS basic-function.
// DÒng thứ 2 đổi nội dung hiển thị thành "Area is" + rộng*cao tương ứng với giá trị trong hàm được gọi
getArea(3,5);
//Gọi hàm