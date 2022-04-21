// Tạo object
var hotel={
    name:'Park',
    rooms: 120,
    booked: 77,
};

hotel.gym=true;
hotel.pool=false;
delete hotel.booked;
// (Object.đặc điểm) - cú pháp gán cho object
// delete hotel.booked - xóa hiển thị của số phòng đã đặt

var elName=document.getElementById('hotelName');
elName.textContent=hotel.name;

var elPool=document.getElementById('pool');
elPool.className=hotel.pool;

var elGym=document.getElementById('gym');
elGym.className=hotel.gym;

//className khác textContent ở điểm nào:
// 1. textContent in ra tên của object tương ứng (hotel.name)
// 2. className sẽ lấy giá trị của gym (true) và pool (false) - hiển thị bằng file ảnh