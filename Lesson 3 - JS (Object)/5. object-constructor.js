// Tạo object (cách khác với bài 4)
var hotel=new Object();

hotel.name='Park';
hotel.rooms=120;
hotel.booked=77;
hotel.checkAvailability=function(){
    return this.rooms - this.booked;
};

//Gán var hotel thành 1 Object
//Các đặc điểm của object có dạng (hotel.đặc điểm), kết thúc bằng dấu chấm phẩy;
//Hàm Availability cũng được khai báo tương tự như ví dụ 4, thêm this

var elName=document.getElementById('hotelName');
elName.textContent=hotel.name;

var elRooms=document.getElementById('rooms');
elRooms.textContent=hotel.checkAvailability();

//Lấy element với 2 id tương ứng giống với ví dụ 4
//Kết quả hiển thị Park và 43 rooms left cũng giống ví dụ trước