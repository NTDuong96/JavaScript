var hotel= {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};
//hotel là object được tạo với các đặc điểm tên, phòng, phòng đã đặt (kết thúc bằng dấu , - không phải dấu ;)
    // Ngoài ra còn có hàm checkAvailability (check xem còn phòng trống hay không)
    // Trong hàm cần thêm 'this' (nếu không trình duyệt sẽ không hiểu rooms và booked là gì

//Cập nhật cho HTML
var elName=document.getElementById('hotelName');
elName.textContent=hotel.name;

var elRooms=document.getElementById('rooms');
elRooms.textContent=hotel.checkAvailability();

//DÒng đầu tiên của cả 2 đều lấy ele với các id tương ứng 'hotelName' và 'rooms'
//Dòng dưới thay đổi content hiển thị trong HTML, với id='rooms' có gọi hàm
// Demo thử, tên object hotel và số phòng còn lại hiển thị là 'Park' và '43 rooms left'